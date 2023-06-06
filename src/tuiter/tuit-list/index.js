import TuitsItem from "./tuits-item";
import {useSelector} from "react-redux";


const TuitsList = () => {
    const tuits = useSelector(state => state.tuits)
    return(
        <div className="list-group">
            {
                tuits.map(tuit => {
                    return(<TuitsItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}

export default TuitsList;