import React from 'react';

class List extends React.Component{
  constructor(){
    super();

  }
 deleteEployee = (idx) => {
   let tempList = [];
   tempList = this.props.employees;
   tempList.splice(idx,1);
   this.props.deleteEployee(tempList);
 }

  render(){
    return(<div className='list'>
              <div className='row-header'>
                <div className = 'cell'>ID</div>
                <div className = 'cell'>First name</div>
                <div className = 'cell'>Last name</div>
                <div className = 'cell'>Email</div>
                <div id = 'cityId'className = 'cell'>City</div>
                <div id = 'stateId' className = 'cell'>State</div>
                <div id = 'deleteId'className = 'cell'>Delete</div>
              </div>

              <div className = "content">
              {
                this.props.employees.map((employee,index) =>{
                  const {id,first_name,last_name,city,state,email} = employee;
                  return(
                  <div className='row'>
                    <div className = 'cell'>{id}</div>
                    <div className = 'cell'>{first_name}</div>
                    <div className = 'cell'>{last_name}</div>
                    <div id = 'emailId' className = 'cell'>{email}</div>
                    <div className = 'cell'>{city}</div>
                    <div className = 'cell'>{state}</div>
                    <div className = 'cell'><button onClick = {() => this.deleteEployee(index)}>Delete</button></div>

                  </div>)
                })
              }
              </div>
           </div>

    );
  }
}
export default List;
