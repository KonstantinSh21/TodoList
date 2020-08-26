import React, {Component} from 'react';
import './App.css';
import AppHeader from './Components/App-header/App-header'
import PostList from './Components/Post-list/Post-list'
import PostAddForm from './Components/Post-add-form/Post-add-form'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      date:[
        {lable: 'Вводите свои дела' , important: true, id: 1},
        {lable: 'Отмечайте важными' , important: false, id: 2},
        {lable: 'Удаляйте выполненые' , important: false, id: 3}
    ] };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4
  }
//  function
  deleteItem (id) {
    this.setState(({date}) => { 
      const index = date.findIndex(elem => elem.id === id );
      const before = date.slice(0, index);
      const after = date.slice(index + 1)
      
      const newArr = [...before, ...after]

      
      return {  
        date: newArr
      }
     
    });
  }
  

  addItem(body) {
    const newItem = {
      lable: body, 
      important: false,
      id: this.maxId++
    }
    this.setState(({date}) => {
      const newArr = [ ...date, newItem];
      return{
        date: newArr
      }
        
    })
  }

render(){
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
      

      </div>

      <PostList 
      posts = {this.state.date} 
      id = {this.state.date.id}
      onDelete={this.deleteItem}
      />
      <PostAddForm 
      onAdd={this.addItem}
      />
    </div>
  );
}
}

