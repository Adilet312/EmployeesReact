import React from 'react';
import {withRouter} from 'react-router';
class EmployeeInfo extends React.Component{
  render(){
    let givenId = this.props.match.params.id;
    const{employees} = this.props;
    let employeeInfo = {};
    for(let idx=0; idx<employees.length; idx++){
      if(employees[idx].id==Number(givenId)){
        employeeInfo=employees[idx];
        console.log("single object:",employeeInfo);
      }
    }

    const {id,first_name,last_name,email,city,state} = employeeInfo
    return(<div className = 'detailInfo'>
              <ul>
                <li>ID:{id}</li>
                <li>First name: {first_name}</li>
                <li>Last name: {last_name}</li>
                <li>Email: {email}</li>
                <li>City: {city}</li>
                <li>State: {state}</li>
              </ul>
            </div>)
  }
}

export default withRouter(EmployeeInfo);
