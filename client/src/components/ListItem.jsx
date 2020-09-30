import React from 'react';

var ListItem = (props) => (
  <div>
    <div className='holder'>
      <div> {props.item.itemName} </div>
      <div> {props.item.quantity} </div>
    </div>
  </div>
);

export default ListItem;