 import React,{Component} from 'react';
import TodoItems from './components/Todoitems/Todoitems'
import AddItem from './components/Add-items/Add'

class App extends Component  { 
  state={
    items:[ {id:1,task:'Pray',day:5},
      {id:2,task:'study',day:8},
      {id:3,task:'Read',day:15}]
  }
   // deletItem = (id) => {
  //   let item = this.state.items;
  //   let i= item.findIndex(item => {item.id === id})
  //   item.splice(i,1)
  //   this.setState({items})
  
  deletItem=(id)=>{
    let items = this.state.items.filter(item =>{
      return item.id !==id
    })
    this.setState({items:items})
  }
  addItems = (item) =>{
    item.id= Math.random();
    let items =this.state.items
    items.push(item);
    this.setState({items:items});
  }
  render (){ 
  return (
    <section className="App container">
     <h1 className="text-center">Daily Todo list </h1>
 {/* pass App state to Todoitems component as aprops */}
     <TodoItems items={this.state.items}  deletItem={this.deletItem}/>  
     <AddItem addItems={this.addItems}/>
      <span> Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 </span> 
      <br></br>
      <span>Made by Ahmed Omran. </span>
    </section>
    
  ); }
}

export default App;
   