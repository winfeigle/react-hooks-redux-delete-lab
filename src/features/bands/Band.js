import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

function Band({ band }){
    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(bandRemoved(band.id))
    }

    return(
        <li>
         <span>{band.name}</span>
            <button onClick={onDeleteClick}>delete band</button>
        </li>
    );
}

export default Band;