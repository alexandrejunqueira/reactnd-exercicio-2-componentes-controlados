import React from 'react';

const DeleteLastItem = props => {
  
  const handleDeleteLastItem = () => {
   props.onDeleteLastItem();  
  };
  
  	return (
    	<button onClick={handleDeleteLastItem} disabled={props.disabled}>
    		Delete Last Item
		</button>
	);
};

export default DeleteLastItem;