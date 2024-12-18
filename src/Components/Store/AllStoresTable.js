import { store } from "../../Utils/AxiosUtils/API";
import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";

const AllStores = ({ data, ...props }) => {
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);

  // Format the data to ensure state and country names are displayed
  const formattedData = data?.map(item => ({
    ...item,
    'state.name': item?.state?.name || '',
    'country.name': item?.country?.name || '',
  })) || [];

  const headerObj = {
    checkBox: true,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    optionHead: { title: "Action", show: "seller/partner" },
    column: [
      { title: "Partner Name", apiKey: "store_name", sorting: true, sortBy: "desc" },
      { title: "Description", apiKey: "description" },
      { title: "Address", apiKey: "address" },
      { title: "City", apiKey: "city" },
      { title: "State", apiKey: "state.name" },
      { title: "Country", apiKey: "country.name" },
      { title: "Status", apiKey: "status", type: 'switch' }
    ],
    data: formattedData
  };

  if (!data) return null;

  return (
    <ShowTable {...props} headerData={headerObj} />
  );
};

export default TableWarper(AllStores);