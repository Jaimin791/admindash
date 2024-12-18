let storePermission = {};
const ISSERVER = typeof window === "undefined";

// Declare the function in the module scope
export const getPermissionArray = (sidebarItems) => {
  if (ISSERVER) return sidebarItems; // Return original items if on server

  const accountData = localStorage.getItem("account");
  storePermission = accountData ? JSON.parse(accountData) : {};

  const roleData = localStorage.getItem("role");
  const storedRole = roleData ? JSON.parse(roleData) : { name: "" };

  // Given this ignore list for adding below menus
  const paymentPermission = storedRole.name === "vendor" ? "PaymentDetails" : "";
  const ignoreList = ["Dashboard", paymentPermission];

  return sidebarItems.reduce((filteredItems, item) => {
    const clonedItem = { ...item };
    if (ignoreList.includes(item.title)) {
      filteredItems.push(item);
    }
    if (clonedItem.permission) {
      clonedItem.permission = clonedItem.permission.filter((perm) => {
        return storePermission?.permissions?.some((p) => p.name === perm);
      });
    }
    if (clonedItem?.children && clonedItem.children.length > 0) {
      clonedItem.children = getPermissionArray(clonedItem.children);
    }
    if (
      clonedItem?.permission?.length > 0 ||
      (clonedItem?.children && clonedItem?.children?.length > 0)
    ) {
      filteredItems.push(clonedItem);
    }
    return filteredItems;
  }, []);
};