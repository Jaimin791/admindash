import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { emailSchema, nameSchema, passwordConfirmationSchema, passwordSchema, phoneSchema, YupObject } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import UserAddress from "./Widgets/UserAddress";
import CreateUser from "./Widgets/CreateUser";
import { useRouter } from "next/navigation";

const UserForm = ({ mutate, loading, updateId, fixedRole, noRoleField, addAddress, type, buttonName }) => {
  const router = useRouter();
  const {
    data: rolesData,
    isLoading: roleLoading,
    refetch: RoleRefetch,
  } = useQuery(["/role"], () => request({ url: "/role" }, router), {
    refetchOnMount: false,
    enabled: false,
    select: (data) => data?.data?.data?.filter((elem) => elem.id !== 1 && elem.id !== 3),
  });

  const { data: oldData, isLoading: oldDataLoading, refetch } = useQuery([updateId], () => request({ url: `/user/${updateId}` }, router), { enabled: false, refetchOnWindowFocus: false });
  useEffect(() => {
    if (updateId) {
      refetch();
    }
  }, [updateId]);
  useEffect(() => {
    !fixedRole && RoleRefetch();
  }, []);
  if (roleLoading && updateId && oldDataLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: updateId ? oldData?.data?.name || "" : "",
        email: updateId ? oldData?.data?.email || "" : "",
        phone: updateId ? Number(oldData?.data?.phone) || "" : "",
        status: updateId ? Boolean(Number(oldData?.data?.status)) : false,
        password: !updateId ? "defaultPassword123" : "",
        password_confirmation: !updateId ? "defaultPassword123" : "",
        role_id: 2,
        address: [],
        country_code: updateId ? oldData?.data?.country_code || "" : "91",
      }}
      validationSchema={YupObject({
        name: nameSchema,
        email: emailSchema,
        phone: phoneSchema,
      })}
      onSubmit={(values) => {
        // Add default password and role for new patients
        if (!updateId) {
          values["password"] = "defaultPassword123";
          values["password_confirmation"] = "defaultPassword123";
          values["role_id"] = 2;
        }

        // Ensure status is set correctly
        values["status"] = Number(values["status"]);

        // Send the data to the API
        mutate(values);
      }}
    >
      {({ values }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            {!addAddress && (
              <>
                <CreateUser updateId={updateId} rolesData={rolesData} fixedRole={fixedRole} />
              </>
            )}
            <UserAddress addAddress={addAddress} type={type} />
            <FormBtn loading={loading} buttonName={buttonName} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;