import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';

const ENDPOINT = '/items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.getItems = this.getItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.setItems = this.setItems.bind(this);
    // this.state.listeners = {
    //   name: [<List/>],
    //   location: []
    // }
  }

  getItems() {
    axios.get(ENDPOINT)
      .then(this.setItems)
      .catch(console.log)
  }

  setItems(items) {
    this.setState({items: items.data})
  }

  addItem(item) {
    axios.post(ENDPOINT, item)
    .then(() => this.setState({items: [...this.state.items, item]}))
    .catch(console.log)
    // this.setState({Items: [...this.state.Items, Item]})
  }

  // this.setState = (newState) {
  //   for(var key in newState) {
  //     this.state[key] = newState[key];
  //     this.state.listeners[key].forEach(component => {
  //       component.render();
  //     })
  //   }
  // }


  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div>
        <Header />
        <Form addItem={this.addItem}/>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default App;