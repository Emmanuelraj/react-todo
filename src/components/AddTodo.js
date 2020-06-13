import React,{Component}from 'react';

class AddTodo extends Component
{
    state={
        content:''
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
      
        this.props.addTodo(this.state)
    
    }
    handleChange=(e)=>{
      

        this.setState({
            content:e.target.value
        })
       
    }
  render()
   {
       return(
           <div className="addTodo container">
                 <form onSubmit={this.handleSubmit}>
                     <label>Add New todo:</label>
                     <input type="text" onChange={this.handleChange} />
                    </form>
                </div>
       )
   }

}

export default AddTodo