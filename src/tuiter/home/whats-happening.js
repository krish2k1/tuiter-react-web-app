import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";
import {BsImage} from "react-icons/bs";
import {BsFiletypeGif} from "react-icons/bs";
import {MdFormatListBulleted} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" width={60} alt="nasa"/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-3">
           
           <BsImage className="me-3"/>
           <BsFiletypeGif className="me-3"/>
           <MdFormatListBulleted className="me-3"/>
           <BsEmojiSmile className="me-3"/>
           <HiOutlineLocationMarker className="me-3"/>
           
         </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;