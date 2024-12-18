export const StoreInitialValue = (updateId, oldData) => {
    // Generate unique identifiers
    const timestamp = Date.now();
    const phone = timestamp.toString().slice(-10);
    const email = `dummy${timestamp}@example.com`;

    return {
        store_name: updateId ? oldData?.store_name || "" : "",
        description: updateId ? oldData?.description || "" : "",
        country_id: updateId ? oldData?.country?.id || "" : "",
        state_id: updateId ? oldData?.state?.id || "" : "",
        city: updateId ? oldData?.city || "" : "",
        address: updateId ? oldData?.address || "" : "",
        status: updateId ? Boolean(Number(oldData?.status)) : true,
        
        // Dummy values for API compatibility
        password: "defaultPassword123",
        password_confirmation: "defaultPassword123",
        name: "Dummy Name",
        email: updateId ? oldData?.vendor?.email || email : email,
        phone: updateId ? oldData?.vendor?.phone || phone : phone,
        pincode: "000000",
        country_code: "91",
        hide_vendor_email: false,
        hide_vendor_phone: false
    }
}