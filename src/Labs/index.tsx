import { Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";

function Labs() {
    return (
        <div className="container-fluid">
            <Nav />
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
                <Route path="/a4" element={<Assignment4 />} />
            </Routes>
        </div>
    );
}
export default Labs;