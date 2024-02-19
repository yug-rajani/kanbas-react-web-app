import React from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="d-flex">
                <input className="form-control w-25 mx-2 order-0" placeholder="Search for Assignment" />
                <div className="ms-auto">
                    <button className="btn btn-secondary mx-2">+Group</button>
                    <button className="btn btn-danger mx-2">+Assignment</button>
                    <button className="btn"><FaEllipsisV /></button>
                </div>
            </div>

            <hr />


            <ul className="list-group wd-modules" style={{ borderRadius: "0px", padding: "0px" }}>
                <li className="list-group-item" style={{ borderRadius: "0px", padding: "0px" }}>
                    <div>
                        <FaEllipsisV className="me-2" />
                        <FaCaretDown className="me-2" />
                        <b>ASSIGNMENTS</b>
                        <span className="float-end">
                            <label className="border rounded border-secondary">&nbsp;40% of Total&nbsp;</label>
                            <FaCheckCircle className="text-success ms-2" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item" style={{ borderRadius: "0px", padding: "0px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="vertical-center-span">
                                        <FaEllipsisV />
                                        <FaPenSquare className="mx-3" />
                                    </span>

                                    <span className="flex-fill">
                                        <b>
                                            <Link style={{ textDecoration: "none", color: "black" }}
                                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}
                                            </Link>
                                        </b><br />
                                        <span className="assignment-description">
                                            {assignment.week_description} |<br />
                                            <b>Due</b> {assignment.due_date} at {assignment.due_time} | {assignment.points} pts
                                        </span>
                                    </span>

                                    <span className="float-end vertical-center-span">
                                        <FaCheckCircle className="text-success" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                </div>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;