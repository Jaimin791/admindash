import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { store } from "../../Utils/AxiosUtils/API";
import { YupObject, nameSchema, descriptionSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import AddressComponent from "../InputFields/AddressComponent";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const StoreForm = ({ mutate, updateId, loading, buttonName }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  
  const { data: oldData, isLoading, refetch } = useQuery(["store/id"], () => request({ url: store + "/" + updateId }, router), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
    select: (data) => (data?.data),
  });

  useEffect(() => {
    updateId && refetch();
  }, [updateId]);

  if (updateId && isLoading) return <Loader />

  // Generate a unique phone number based on timestamp
  const generateUniquePhone = () => {
    const timestamp = Date.now().toString().slice(-10);
    return timestamp;
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        store_name: updateId ? oldData?.store_name || "" : "",
        description: updateId ? oldData?.description || "" : "",
        country_id: updateId ? oldData?.country?.id || "" : "",
        state_id: updateId ? oldData?.state?.id || "" : "",
        city: updateId ? oldData?.city || "" : "",
        address: updateId ? oldData?.address || "" : "",
        status: updateId ? Boolean(Number(oldData?.status)) : true,
        pincode: "000000", // Add dummy pincode
        // Add dummy values for required fields
        password: "defaultPassword123",
        password_confirmation: "defaultPassword123",
        email: `dummy${Date.now()}@example.com`, // Generate unique email
        phone: generateUniquePhone(), // Generate unique phone
        name: "Dummy Name"
      }}
      validationSchema={YupObject({
        store_name: nameSchema,
        description: descriptionSchema,
        country_id: nameSchema,
        state_id: nameSchema,
        city: nameSchema,
        address: nameSchema
      })}
      onSubmit={(values) => {
        // Add method for update
        if (updateId) {
          values["_method"] = "put";
        } else {
          // Only generate new values for create operation
          values["phone"] = generateUniquePhone();
          values["email"] = `dummy${Date.now()}@example.com`;
        }

        // Set dummy values for required fields
        values["password"] = "defaultPassword123";
        values["password_confirmation"] = "defaultPassword123";
        values["name"] = "Dummy Name";
        values["pincode"] = "000000";
        values["status"] = Number(values["status"]);
        values["hide_vendor_phone"] = 0;
        values["hide_vendor_email"] = 0;

        // Ensure country_id and state_id are sent as numbers
        values["country_id"] = values.country_id ? Number(values.country_id) : "";
        values["state_id"] = values.state_id ? Number(values.state_id) : "";

        mutate(values);
      }}
    >
      {({ values }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField
              nameList={[
                { name: "store_name", title: t("Name"), placeholder: t("Enter Name"), require: "true" },
                { name: "description", title: t("Description"), placeholder: t("Enter Description"), require: "true" },
              ]}
            />
            
            <AddressComponent values={values} noAddress={false} />
            
            <CheckBoxField name="status" title={t("Status")} />
            
            <FormBtn loading={loading} buttonName={buttonName} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default StoreForm;