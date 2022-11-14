import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = () => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-start rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i> {tuit.userName} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                    <TuitStats/>
                </div>
            </div>

        </li>
    );
}
export default TuitItem;