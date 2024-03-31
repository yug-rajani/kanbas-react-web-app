import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);


    const [module, setModule] = useState({
        id: "M01",
        name: "NodeJS Module",
        description: "NodeJS with ExpressJS",
        course: "CS123",
    });

    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const MODULE_URL = `${API_BASE}/a5/module`

    return (
        <div>
            <h3>Working With Objects</h3>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button className="btn btn-primary btn-sm mx-1"
                onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button className="btn btn-primary btn-sm mx-1"
                onClick={fetchAssignment} >
                Fetch Assignment
            </button>

            <h4>Retrieving Objects</h4>
            <a href={API_BASE + "/a5/assignment"}>
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a href={API_BASE + "/a5/assignment/title"}>
                Get Title
            </a>
            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                className="mx-2"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <br />

            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input type="number"
                className="mx-2"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score} />

            <br />

            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <input type="checkbox"
                className="mx-2"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={assignment.completed} />


            <h4>Working with Module</h4>
            <a href={API_BASE + "/a5/module"}>
                Get Module
            </a>
            <br />
            <a href={API_BASE + "/a5/module/name"}>
                Get Module Name
            </a>
            <br />
            <a href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input type="text"
                className="mx-2"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <br />
            <a href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <textarea className="mx-2"
                onChange={(e) => setModule({
                    ...module,
                    description: e.target.value
                })}
                value={module.description} />
        </div>
    );
}
export default WorkingWithObjects;