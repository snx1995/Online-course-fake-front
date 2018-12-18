import Course from "../course/components/Course";
import CourseSummary from "../course/components/CourseSummary";

export default {
    path: "/course/:courseId",
    component: Course,
    children: [
        {
            path: "",
            component: CourseSummary
        },
        {
            path: "video/:videoUrl",
            component: () => import("../video/components/Video")
        }
    ]
}