export default {
    path: "/userCenter",
    component: () => import ("../userCenter/components/UserCenter"),
    children: [
        {
            path: "",
            component: () => import("../userCenter/components/UserSummary"),
        },
        {
            path: "info",
            component: () => import("../userCenter/components/UserInfo")
        },
        {
            path: "course",
            component: () => import("../userCenter/components/user-course/UserCourse"),
            children: [
                {
                    path: "addNewCourse",
                    component: () => import("../userCenter/components/user-course/AddCourse")
                },
            ]
        },
        {
            path: "blog",
            component: () => import("../userCenter/components/UserBlog")
        },
        {
            path: "history",
            component: () => import("../userCenter/components/UserHistory")
        },
        
    ]
}