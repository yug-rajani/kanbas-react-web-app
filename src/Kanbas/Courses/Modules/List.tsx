import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}
                        style={{ borderRadius: "0px", padding: "0px" }}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            <FaCaretDown className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group" style={{ borderRadius: "0px" }}>
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item" style={{ borderRadius: "0px" }}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;