import React  from 'react';
import './Todoitems.css'
 const TodoItems =(props)=>{
     const {items, deletItem} = props;
     let length=items.length

     const listItems = length?(items.map( (item) => {
        return(
        <div key={item.id}>
            <span className="task" >{item.task}</span>
            <span className="day">{item.day}</span> 
            {/* make arrow function with no name  (()=>)to make deletitem work onlu at press on X not automatic  */}
            <span className="action icon" onClick={()=>deletItem(item.id)}>Finish</span> 

       </div>
    )
   })):(
      <p>  No tasks to do!</p>
   )

return (
    <div className="listItems">
        <div>
            <span className="task title">Task</span>
            <span className="day title">Time </span>
            <span className="action title ">Action</span>

        </div>
        {listItems}
    </div>)
 }
 export default TodoItems;  