import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
    const [editedItem, setEditedItem] = useState(props.item);
    const [editMode, setEditMode] = useState(false);
    const editedItemChanged = (evt) => {
		setEditedItem(evt.target.value);
    };
    const saveEditedItem=()=>{
        props.editHandeler(editedItem,props.idx);
        setEditMode(false);
    }
    return (
        <div className="list">
            {editMode ?
                <>
                    <textarea className="editTask" placeholder="Edit Task" value={editedItem}></textarea>
                    <button className="saveTask"  onClick={saveEditedItem} disabled={editedItem.trim().length === 0}>Save Task</button>
                </> :
                <>
                    {props.item}
                    <button className="edit" onClick={()=> setEditMode(true)} onChange={editedItemChanged}>Edit</button>
                    <button className="delete" onClick={() => props.deleteHandeler(props.idx)}>Delete</button>
                </>}
        </div>
    );

}

export default ListItem;