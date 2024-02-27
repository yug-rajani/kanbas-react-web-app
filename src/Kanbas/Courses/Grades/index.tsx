import React from "react";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaArrowCircleRight, FaCaretDown, FaFilter, FaPaperPlane, FaSearch, FaUpload } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="px-3">
            <div className="d-flex justify-content-end">
                <button className="btn mx-2" style={{ backgroundColor: "lightgrey" }}>
                    <FaUpload className="mx-1" />
                    Import
                </button>
                <button className="btn mx-2" style={{ backgroundColor: "lightgrey" }}>
                    <FaPaperPlane className="mx-1" />
                    Export
                </button>
                <button className="btn mx-2" style={{ backgroundColor: "lightgrey" }}>
                    <FaGear />
                </button>
            </div>

            <div className="d-flex justify-content-between">
                <div className="w-50">
                    <b>Student Names</b>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Students" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>
                </div>

                <div className="w-50">
                    <b>Assignment Names</b>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Assignments" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>
                </div>
            </div>

            <div>
                <button className="btn p-1 m-2" style={{ backgroundColor: "lightgrey" }}>
                    <FaFilter className="mx-1" />
                    Apply Filters
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (
                                            <td>
                                                <div className="d-flex">
                                                    <input className="form-control" value={grade?.grade || ""} />
                                                    <FaArrowCircleRight className="float-end" />
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}

export default Grades;
