import React from "react";
import { Link } from "react-router-dom";
import { FaComment, FaFolder, FaPenSquare } from "react-icons/fa";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }
) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control w-25"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control w-25"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control w-25" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control w-25" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <input value={course.semester} className="form-control w-25"
                onChange={(e) => setCourse({ ...course, semester: e.target.value })} />
            <input value={course.textbook} className="form-control w-25"
                onChange={(e) => setCourse({ ...course, textbook: e.target.value })} />
            <input value={course.image} className="form-control w-25"
                onChange={(e) => setCourse({ ...course, image: e.target.value })} />

            <button className="btn btn-success mx-1 my-2" onClick={addNewCourse} >
                + Add Course
            </button>

            <button className="btn btn-primary mx-1 my-2"
                onClick={updateCourse} >
                Update
            </button>


            <hr />
            <h2>Published Courses</h2>
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
                                            <br />
                                            <button className="btn btn-danger btn-sm mt-2"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}>
                                                Delete
                                            </button>
                                            <button className="btn btn-primary btn-sm mt-2 mx-2"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}>
                                                Edit
                                            </button>
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