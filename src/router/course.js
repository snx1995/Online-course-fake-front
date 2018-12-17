import Course from "../course/components/Course";
import CourseSummary from "../course/components/CourseSummary";

export default {
    path: "/course",
    component: Course,
    children: [
        {
            path: "",
            component: CourseSummary
        }
    ]
}