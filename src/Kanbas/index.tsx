import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./styles.css";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Calendar" element={<Navigate to="Calendar" />} />
                    <Route path="Inbox" element={<Navigate to="Inbox" />} />
                    <Route path="History" element={<Navigate to="History" />} />
                    <Route path="Studio" element={<Navigate to="Studio" />} />
                    <Route path="Commons" element={<Navigate to="Commons" />} />
                    <Route path="Help" element={<Navigate to="Help" />} />
                </Routes>

            </div>
        </div>

    );
};

export default Kanbas;