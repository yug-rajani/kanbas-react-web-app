import { FaBan, FaBell, FaBullhorn, FaChartBar, FaCheckCircle, FaCloudUploadAlt, FaUpload } from "react-icons/fa";
import "./index.css";
import Events from "./Events";

function Status() {
    return (
        <div className="mx-2">
            <h4>Course Status</h4>
            <table>
                <tbody>
                    <tr>
                        <td><button className="btn btn-secondary btn-custom-top my-2"> <FaBan className="mx-1" /> Unpublish</button>
                        </td>
                        <td><button className="btn btn-success btn-custom-top-success my-2" disabled> <FaCheckCircle className="mx-1" />
                            Published</button></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-secondary my-1 btn-custom"> <FaUpload className="mx-1" />
                Import Existing Content</button><br />
            <button className="btn btn-secondary my-1 btn-custom"> <FaCloudUploadAlt className="mx-1" />Import from
                Commons</button><br />
            <button className="btn btn-secondary my-1 btn-custom"> <FaChartBar className="mx-1" />View Course Stream</button><br />
            <button className="btn btn-secondary my-1 btn-custom"> <FaBullhorn className="mx-1" /> New Announcement</button><br />
            <button className="btn btn-secondary my-1 btn-custom"> <FaChartBar className="mx-1" />New Analytics</button><br />
            <button className="btn btn-secondary my-1 btn-custom"> <FaBell className="mx-1" />View Course
                Notifications</button><br />

            <Events />
        </div>
    );
}

export default Status;