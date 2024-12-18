import { AllCountryCode } from "../../../Data/AllCountryCode";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";
import SimpleInputField from "../../InputFields/SimpleInputField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { useTranslation } from "react-i18next";

const CreateUser = ({ updateId, fixedRole, rolesData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: "name", placeholder: t("EnterFullName"), require: "true" },
          {
            type: "email",
            name: "email",
            placeholder: t("EnterEmailAddress"),
            require: "true",
          },
        ]}
      />
      <div className="country-input mb-4">
        <SimpleInputField
          nameList={[
            {
              name: "phone",
              type: "number",
              placeholder: t("EnterPhoneNumber"),
              require: "true",
            },
          ]}
        />
        <SearchableSelectInput
          nameList={[
            {
              name: "country_code",
              notitle: "true",
              inputprops: {
                name: "country_code",
                id: "country_code",
                options: AllCountryCode,
              },
            },
          ]}
        />
      </div>
      <div>
      {!updateId && (
          <>
          
         
          </>
        )}
      </div>

      {!updateId && (
        <>
         
          <CheckBoxField name="status" /> 
        </>
      )}
    </>
  );
};

export default CreateUser;