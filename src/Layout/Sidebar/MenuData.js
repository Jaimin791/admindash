import { RiArticleLine, RiCoinsLine, RiContactsLine, RiCoupon2Line, RiCurrencyFill, RiExchangeDollarFill, RiHomeLine, RiImageLine, RiListUnordered, RiPagesLine, RiPercentLine, RiQuestionnaireLine, RiRefund2Line, RiSettings3Line, RiStore2Line, RiStore3Line, RiTruckLine, RiWalletLine, RiWindowLine } from "react-icons/ri";

const MENUITEMS = [
  {
    title: "Dashboard",
    displayTitle: "Dashboard",
    icon: <RiHomeLine />,
    path: "/dashboard",
    type: "link"
  },
  {
    title: "Patients",
    displaTitle: "Patients",
    icon: <RiContactsLine />,
    type: "sub",
    children: [
      { title: "Add Patient", path: "/user/create", displayTitle: "Add Patient", permission: ["user.create"] },
      { title: "All Patients", path: "/user", displayTitle: "All Patients", permission: ["user.index"] },
      { title: "Role", path: "/role", displayTitle: "Role", permission: ["role.index"] },
    ],
  },
  {
    title: "Products",
    displayTitle: "Products",
    icon: <RiStore3Line />,
    type: "sub",
    children: [
      { title: "AddProduct", path: "/product/create", displayTitle: "Add Product", permission: ["product.create"] },
      { title: "AllProducts", path: "/product", displayTitle: "All Product", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["product.create"] },
      { title: "Attributes", path: "/attribute", displayTitle: "All Attributes", permission: ["attribute.index", "attribute.create"] },
      { title: "Categories", path: "/category", displayTitle: "Categories", permission: ["category.index"] },
      { title: "Tags", path: "/tag", displayTitle: "All Tag", permission: ["tag.index", "tag.create"] },
      { title: "Brands", path: "/brand", displayTitle: "Brand", permission: ["brand.index", "brand.create"] },
      { title: "Q&A", path: "/qna", displayTitle: "Q&A", permission: ["question_and_answer.index", "question_and_answer.create"] },
      { title: "License Key", path: "/license_key", displayTitle: "License Key", permission: ["license_key.index"] },
    ],
  },
  {
    title: "Partners",
    displayTitle: "Partners",
    icon: <RiStore2Line />,
    type: "sub",
    children: [
      { title: "Add Partner", path: "/store/create", displayTitle: "Add Partner", permission: ["store.create"] },
      { title: "All Partners", path: "/store", displayTitle: "All Partners", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["store.index"] },
      { title: "Wallet", path: "/vendor_wallet", displayTitle: "Wallets", permission: ["vendor_wallet.index"] },
      { title: "CommissionHistory", path: "/commission", displayTitle: "Commission History", permission: ["commission_history.index"] },
      { title: "PaymentDetails", path: "/payment_account", displayTitle: "Payment Details", permission: ["payment_account.create"] },
      { title: "Withdrawal", displayTitle: "Withdrawal", path: "/withdraw_request", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["withdraw_request.index"] },
    ],
  },
  {
    title: "Orders",
    displayTitle: "Orders",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      { title: "AllOrders", path: "/order", displayTitle: "All Orders", permission: ["order.index"] },
      { title: "CreateOrder", path: "/order/create", displayTitle: "Create Order", permission: ["order.create"] }],
  },
  {
    title: "Media",
    displayTitle: "Media",
    icon: <RiImageLine />,
    path: "/attachment",
    permission: ["attachment.index", "attachment.create"],
    type: "link"
  },
  {
    title: "Blog",
    displayTitle: "Blog",
    icon: <RiArticleLine />,
    type: "sub",
    children: [
      { title: "AllBlogs", path: "/blog", displayTitle: "All Blog", permission: ["blog.index"], },
      { title: "Categories", path: "/blog/category", displayTitle: "Category", permission: ["category.index", "category.create"], },
      { title: "Tags", path: "/blog/tag", displayTitle: "Tags", permission: ["tag.index", "tag.create"] },
    ],
  },
  {
    title: "Pages",
    displayTitle: "Pages",
    icon: <RiPagesLine />,
    path: "/page", permission: ["page.index"],
    type: "link"
  },
  {
    title: "Taxes",
    displayTitle: "Taxes",
    icon: <RiPercentLine />,
    path: "/tax", permission: ["tax.index"],
    type: "link"
  },

  {
    title: "Shipping",
    displayTitle: "Shipping",
    icon: <RiTruckLine />,
    path: "/shipping",
    permission: ["shipping.index"],
    type: "link"
  },
  {
    title: "Coupons",
    displayTitle: "Coupons",
    icon: <RiCoupon2Line />,
    path: "/coupon",
    permission: ["coupon.index"],
    type: "link"
  },
  {
    title: "Currencies",
    displayTitle: "Currency",
    icon: <RiCurrencyFill />,
    path: "/currency",
    permission: ["currency.index"],
    type: "link"
  },
  {
    title: "Points",
    displayTitle: "Point",
    icon: <RiCoinsLine />,
    path: "/point",
    permission: ["point.index"],
    type: "link"
  },
  {
    title: "Wallet",
    displayTitle: "Wallet",
    icon: <RiWalletLine />,
    path: "/wallet",
    permission: ["wallet.index"],
    type: "link"
  },
  {
    title: "Refund",
    displayTitle: "Refund",
    icon: <RiExchangeDollarFill />,
    path: "/refund",
    permission: ["refund.index"],
    badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0,
    type: "link"
  },
  {
    title: "Reviews",
    displayTitle: "Reviews",
    icon: <RiRefund2Line />,
    path: "/review",
    permission: ["review.index"],
    type: "link"
  },
  {
    title: "FAQ's",
    displayTitle: "FAQ's",
    icon: <RiQuestionnaireLine />,
    path: "/faq",
    permission: ["faq.index"],
    type: "link"
  },
  {
    title: "Notice",
    displayTitle: "Notice",
    icon: <RiArticleLine />,
    path: "/notice",
    permission: ["notice.index", "notice.create"],
    type: "link"
  },
  {
    title: "Subscription",
    displayTitle: "Subscription",
    icon: <RiRefund2Line />,
    path: "/subscription",
    permission: ["subscribe.index"],
    type: "link"
  },
  {
    title: "StoreFront",
    displayTitle: "Store Front",
    icon: <RiWindowLine />,
    type: "sub",
    children: [
      { title: "Themes", path: "/theme", displayTitle: "Theme", permission: ["theme.index"], },
      { title: "ThemeOptions", path: "/theme_option", displayTitle: "Theme Option", permission: ["theme_option.index"], },
      { title: "Menu", path: "/menu", displayTitle: "Menu", permission: ["menu.index"], }
    ],
  },
  {
    title: "Settings",
    displayTitle: "Settings",
    icon: <RiSettings3Line />,
    path: "/setting",
    permission: ["setting.index"],
    type: "link"
  },
  // {
  //   title: "appSettings",
  //   displayTitle: "appSettings",
  //   icon: <RiSettings3Line />,
  //   path: "/app-setting",
  //   permission: ["setting.index"],
  //   type: "link"
  // }
];

export default MENUITEMS;