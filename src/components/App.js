import React, {useState} from "react";
import ListItem from "./ListItem";
import "./../styles/App.css";

function App() {
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	const addItem = () => {
		// let newItemList=[...items].concat([newItem]);
		// setItems([newItemList]);
		items.push = (newItem);
		setItems([items]);
		
		setNewItem("");
	};
	const newItemChanged = (evt) => {
		setNewItem(evt.target.value);
	};
	const deleteHandeler=(itemidx)=>{
		items.slice(itemidx,1);
		setItems([items]);
	}
	const editHandeler=(editedValue,itmIdx)=>{
		items[itmIdx]=editedValue;
		setItems([...items]);
	}
	return (
		<div id="main">
			<textarea id="task" 
			onChange={newItemChanged} 
			placeholder="New Item" 
			value={newItem}
			></textarea>
			<button id="btn" onClick={addItem} disabled={(newItem.trim().length)===0}>Add Item</button>
			{items.map((item, idx) => (
				<ListItem item={item} key={`${item}_${idx}`} idx={idx} editHandeler={editHandeler} deleteHandeler={deleteHandeler} />
			))}
		</div>
	);
}


export default App;
