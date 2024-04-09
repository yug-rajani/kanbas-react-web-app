import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const API_BASE = process.env.REACT_APP_API_BASE;
    const COURSES_API = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    });

    const { pathname } = useLocation();
    const pathSegments = pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return (
        <div>
            <h4>
                <nav aria-label="breadcrumb" className="custom-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="me-4">
                            <Link to="/Kanbas/Navigation/screen.html">
                                <HiMiniBars3 className="mx-4" style={{ color: "red" }} />
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="#" style={{ color: "red", textDecoration: "none" }}>{course?.number} {course?.semester}</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <span style={{ color: "black", textDecoration: "none" }}>{lastSegment.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
                        </li>
                    </ol>
                </nav>
            </h4>

            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="ZoomMeetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="PanoptoVideo" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default Courses;