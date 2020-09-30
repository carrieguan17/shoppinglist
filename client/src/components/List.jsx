import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => (
  <div>
    <div className='holder'>
      <div>Item Name</div>
      <div>Quantity</div>
    </div>
    <br></br>
    <div className="items">
      {props.items.map(function(item) {
        return <ListItem key={item.itemName} item={item}/>
      })}
    </div>
  </div>
)

export default List;


// WHAT REACT IS DOING WITH PROPS IN THE CONSTRUCTOR
// attributes.forEach(attribute => {
//   props[attribute] = node[attribute];
// })

// props = {
//   groceries: [
//     {name: 'Chicken Thighs', quantity: 12},
//     {name: 'Garlic', quantity: 3},
//     {name: 'Parmesean Cheese', quantity: 1},
//     {name: 'Pesto Sauce', quantity: 1},
//     {name: 'Peaches', quantity: 5},
//     {name: 'Spinach', quantity: 3},
//     {name: 'Onions', quantity: 5}
//   ],
//   moreStuff: moreStuff
// }

// var arr = [1,2,3,4,5];

// var mappedArr = arr.map(function(item){
//   return item*2;
// })

// mappedArr ?