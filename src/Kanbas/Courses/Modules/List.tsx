import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const [moduleList, setModuleList] = useState<any[]>(modules);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);

    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });

    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };

    return (
        <>
            <span className="d-flex justify-content-end">
                <button className="btn mx-1" style={{ backgroundColor: "lightgrey" }}>Collapse All</button>
                <button className="btn mx-1" style={{ backgroundColor: "lightgrey" }}>View Progress</button>
                <select className="mx-1 form-control w-25">
                    <option> Publish All</option>
                    <option>Unpublish All</option>
                </select>
                {/* <button className="btn btn-danger mx-1">+ Module</button> */}
                <button className="btn"><FaEllipsisV /></button>
            </span>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item" style={{ borderRadius: "0px", padding: "0px" }}>
                    <input value={module.name}
                        className="form-control w-75 my-1 mx-2"
                        onChange={(e) => setModule({
                            ...module, name: e.target.value
                        })}
                    />
                    <textarea value={module.description} className="form-control my-1 mx-2 w-75"
                        onChange={(e) => setModule({
                            ...module, description: e.target.value
                        })}
                    />
                    <button className="btn btn-success mx-2 my-1 btn-sm"
                        onClick={() => { addModule(module) }}>
                        + Add Module
                    </button>
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li
                            key={index}
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
                                    {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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