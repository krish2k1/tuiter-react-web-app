import {MdVerified} from "react-icons/md";

import {GrFormClose} from "react-icons/gr";
import TuitsCount from "./tuits-count";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";


const TuitsItem = (
    {
        tuit = {
            _id: 234,
            topic: "Tesla",
            userName: "Tesla",
            time: "4d",
            title: "Autopilot and Full Self-Driving Capability",
            image: "tesla-logo.png",
            liked: false,
            replies: 234,
            retuits: 543,
            likes: 3456,
            handle: "@tesla",
            tuit: "Autopilot is an advanced driver assistance system that enhances safety and convenience behind the wheel. When used properly, Autopilot reduces your overall workload as a driver. Each new Tesla vehicle is equipped with eight external cameras and powerful vision processing to provide an additional layer of safety. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar."
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    };

    

    return(
        <div className="list-group-item pt-3 wd-post-list-item border-1">
            <div className="row">
                {/* Left Avatar */}
                <div className="col-auto">
                    <img src={`/images/${tuit.image}`} className="rounded-circle" width="48px" alt="avatar"/>
                </div>
                {/* Right Content */}
                <div className="col-10">
                    {/* User's name handle and post time */}
                    <div>
                    
                        < GrFormClose className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)} />
                        <span className="fw-bolder">{tuit.userName}{' '}</span>
                        <MdVerified color ="#0d6efd"/>
                        {/*Add blue tick here*/}
                        <span className="text-secondary">{' '}{tuit.handle} {'\u00B7'} {tuit.time}</span>
                    </div>
                    {/* Tuit */}
                    <div className="mb-4">
                        {tuit.tuit}
                    </div>
                    {/* Bottom Icons */}
                    
                    <TuitsCount  tuit={tuit} />
                </div>
            </div>
        </div>
    )
}

export default TuitsItem;