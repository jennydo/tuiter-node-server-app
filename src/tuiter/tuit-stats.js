import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {updateTuitThunk} from "../services/tuits-thunks.js";

const TuitStats = () => {
    const liked = true;
    const replies = 123;
    const retuits =432;
    const likes = 2345;
    return (

        <div className="row">
            <div className="col-3"><i className="bi bi-chat me-3"></i>{replies}</div>
            <div className="col-3"><span><i className="bi bi-arrow-repeat me-3"></i>{retuits}</span></div>
            {tuit.tuit}
            <div>
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               likes: tuit.likes + 1
                                                           })} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>

            <div className="col-3"><i className="fa fa-share"></i></div>
        </div>
    );

}
export default TuitStats;

