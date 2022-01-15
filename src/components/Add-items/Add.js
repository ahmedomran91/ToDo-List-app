import React ,{Component}  from 'react';
import './Add.css'

  class AddItem extends Component{
      state={
          task:'',
          day:'',
          
      }
      handleChange=(e)=>{
          this.setState({[e.target.id]:e.target.value})
      }
      handleSubmit = (e) =>{
          e.preventDefault();
          if(e.target.task.value==='')
          {return false}
            else {this.props.addItems(this.state)
            this.setState({ task:'',
            day:''})}
      }
      render(){
          return (
              <div>
                 <form onSubmit={this.handleSubmit}>
                     <input type="text" placeholder="Enter task.." id="task" onChange={this.handleChange} value={this.state.task}/> 
                     <input type="time"   id="day" onChange={this.handleChange} value={this.state.day}/>  
                     <input type="submit" value="Add "/> 
                 </form>
              </div>
          )
      }
  } 
  export default AddItem  