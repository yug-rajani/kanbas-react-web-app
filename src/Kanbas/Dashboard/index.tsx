import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { FaComment, FaFolder, FaPenSquare } from "react-icons/fa";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);

    const course = {
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        semester: "New Semester",
        textbook: "New Course Textbook",
        image: "reactjs.jpg"
    };

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...courses, { ...course, ...newCourse }]);
    };

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <button className="btn btn-danger mx-1" onClick={addNewCourse} >
                + Add Course
            </button>

            <hr />
            <h2>Published Courses (3)</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {
                        courses.map((course) => (
                            <div key={course._id} className="col" style={{ width: 300, minWidth: 300 }}>
                                <div className="card">
                                    <img src={`/images/${course.image}`} alt="" className="card-img-top"
                                        style={{ height: 150 }} />
                                    <div className="card-body">
                                        <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                            {course.number} {course.name}
                                        </Link>

                                        <p>
                                            <Link className="card-text" to={`/Kanbas/Courses/${course._id}/Home`}
                                                style={{ textDecoration: "none", color: "grey" }}>

                                                {course.textbook} <br />
                                                {course.startDate} {course.semester}
                                            </Link>
                                        </p>
                                        <div className="d-flex">
                                            <FaPenSquare className="mx-3" />
                                            <FaComment className="mx-3" />
                                            <FaFolder className="mx-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Dashboard;