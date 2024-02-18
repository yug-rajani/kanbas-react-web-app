import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "ZoomMeetings", "Assignments", "Quizzes", "Grades", "People", "PanoptoVideo", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    return (
        <ul className="wd-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link.replace(/([a-z])([A-Z])/g, '$1 $2')}</Link>
                </li>
            ))}
        </ul>
    );
}

export default CourseNavigation;