const routes = [
    { path: "/", name: "Landing Page" },
    { path: "/articles", name: "Articles" },
    { path: "/catalog", name: "Catalog" },
    { path: "/catalog/[catalogid]", name: "Catalog Details" },
    {
        path: "/catalog/[catalogid]/academies/[tutorialid]",
        name: "Catalog Details",
        isProtected: true,
    },
    { path: "/dashboard", name: "Main Dashboard", isProtected: true },
    { path: "/profile", name: "Profile", isProtected: true },
    { path: "/events", name: "Events", isProtected: false },
    { path: "/events/dashboard", name: "Events Dashboard", isProtected: true },
    { path: "/signin", name: "Sign In", isProtected: false },
    { path: "/signup", name: "Sign Up", isProtected: false },
];

export default routes;
