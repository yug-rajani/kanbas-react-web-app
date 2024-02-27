import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
    return (
        <div className="d-flex">
            <div className="flex-fill">
                <ModuleList />
            </div>
            <div>
                <Status />
            </div>
        </div>
    );
}
export default Home;