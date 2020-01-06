import React ,{ Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import TodoList from './components/AddItem/AddItem';
import AddItem from './components/AddItem/AddItem';
class App extends Component {
  state = {  
    items : [
      {id: 1 , name: 'Doaa',age:22},
      {id: 2 , name: 'Nor',age:24},
      {id: 3 , name: 'Salwa',age:26}
    ]
  }
  deleteItem=(id)=>{  //function for delete (pass param id)
    /*first:

    let items = this.state.items; //get items that in state
    //for sure if the id function took(clicked) is same of delete
    //know from index 
    //pass on all array (item by item)
    //do this id === id  what you send
    let i = items.findIndex(item => item.id === id ) 
    items.splice(i,1) //delete one item you catch it have same id
    //this.setState({items:items}) //update state
    //if id ===value write it once
    this.setState({items}) 
    */
   let items = this.state.items.filter(item =>{  //catch item item
     return item.id !== id 
     // return !(item.id === id)
     //if return false 1!==1 delete item else 2!==1 return true not delete 
   }); 
   this.setState({items}) 
    }
    addItem = (item)=>{ //take item from add item page(state) and add it to items
      item.id = Math.random();
      let items = this.state.items; //get all items
      items.push(item); 
      this.setState({items})
    }
  render() { 
    return ( 
      <div className='App container'>
        <h1 className='text-center'>TodoList App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/> 
        {/* send add item function */}
      </div>
     );
  }
}
 
export default App;