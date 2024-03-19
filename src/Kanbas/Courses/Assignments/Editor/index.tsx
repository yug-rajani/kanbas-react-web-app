import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

function AssignmentEditor() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isNewAssignment, setIsNewAssignment] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsNewAssignment(location.pathname.endsWith("/new"));
  }, [location.pathname]);

  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (isNewAssignment) {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (

    <div className="flex-fill px-5">
      <div className="d-flex">
        <div className="ms-auto">
          <button className="btn btn-success mx-2" disabled> <FaCheckCircle className="mx-1" />
            Published</button>
          <button className="btn btn-secondary"> <FaEllipsisV /></button>
        </div>
      </div>

      <hr />

      <form>
        <label>
          <h5>
            Assignment Name
          </h5>
        </label>
        <input
          value={assignment.title}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
          className="form-control" />
        <br />

        <textarea
          className="form-control"
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))
          }
        >
          {assignment?.description}
        </textarea>

        <br />

        <div className="row">
          <div className="col-md-6 text-end">
            <label className="mx-3">Points</label>
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              value={assignment?.points}
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, points: e.target.value }))
              }
            />
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6 text-end">
            <label className="mx-3">Assignment Group</label>
          </div>
          <div className="col-md-6">
            <select className="form-control">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6 text-end">
            <label>Display Grade as</label>
          </div>
          <div className="col-md-6">
            <select className="form-control">
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
            </select>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6 text-end">
            <label>Submission Type</label>
          </div>
          <div className="col-md-6">
            <select className="form-control">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6 text-end">
            <label>Online Entry Options</label>
          </div>
          <div className="col-md-6">
            <input type="checkbox" id="online_entry_options1" />
            <label htmlFor="online_entry_options1" className="mx-1">Text Entry</label>
            <br />
            <input type="checkbox" id="online_entry_options2" />
            <label htmlFor="online_entry_options2" className="mx-1">Website URL</label>
            <br />
            <input type="checkbox" id="online_entry_options3" />
            <label htmlFor="online_entry_options3" className="mx-1">Media Recordings</label>
            <br />
            <input type="checkbox" id="online_entry_options4" />
            <label htmlFor="online_entry_options4" className="mx-1">Student Annotation</label>
            <br />
            <input type="checkbox" id="online_entry_options5" />
            <label htmlFor="online_entry_options5" className="mx-1">File Uploads</label>

            <br /><br />
            <input type="checkbox" id="count_final_grade" />
            <label htmlFor="count_final_grade" className="mx-1">Do not count this assignment towards the final grade</label>

          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-6 text-end">
            <label>Assign</label>
          </div>
          <div className="col-md-6">
            <div className="border p-2">
              <label><b>Assign to</b></label>
              <br />
              <input className="form-control" value="Everyone" />
              <br />

              <label><b>Due</b></label>
              <input
                className="form-control"
                type="date"
                onChange={(e) =>
                  dispatch(setAssignment({ ...assignment, due_date: e.target.value }))
                }

              />
              <br />

              <div className="row">
                <div className="col-md-6">
                  <label><b>Available from</b></label>
                  <input className="form-control w-30" type="date" />
                </div>

                <div className="col-md-6">
                  <label><b>Until</b></label>
                  <input className="form-control w-30" type="date" />
                </div>
              </div>
              <br />

              <button className="btn rounded-0"
                style={{ backgroundColor: "lightgrey", width: "100%" }}>
                + Add
              </button>
            </div>
          </div>
        </div>


        <hr />
        <div className="d-flex">
          <div>
            <input type="checkbox" id="notify_users" />
            <label htmlFor="notify_users" className="mx-1">Notify users that this content has changed</label>
            <br />
          </div>
          <div className="ms-auto">
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
              Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end">
              Cancel
            </Link>
          </div>
        </div>
        <hr />
      </form>
    </div>
  );
}

export default AssignmentEditor;
