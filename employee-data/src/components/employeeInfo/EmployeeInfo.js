import React from 'react';
import moment from 'moment';
import {withRouter} from 'react-router';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class EmployeeInfo extends React.Component{


  render(){
    let givenId = this.props.match.params.id;
    const{employees} = this.props;
    let employeeInfo = {};
    let employee = {logins:[]};
    for(let idx=0; idx<employees.length; idx++){
      if(employees[idx].id==Number(givenId)){
        employeeInfo = employees[idx];
        employee = employees[idx];
        break;
      }
    }


    let months = {};
    employee.logins.forEach((login) => {
    const {date} = login;
    const month = moment(date).format('MMM');
    if(months[month]){
      months[month]++;
    }
    else{
      months[month] = 1;
    }
  });
  const data = Object.keys(months).map(month =>{
    return {month,login:months[month]}
  })

    const {id,first_name,last_name,email,city,state} = employeeInfo;
    return(<div>
              <div className = 'detailInfo'>
                <ul>
                  <li>ID:{id}</li>
                  <li>First name: {first_name}</li>
                  <li>Last name: {last_name}</li>
                  <li>Email: {email}</li>
                  <li>City: {city}</li>
                  <li>State: {state}</li>
                </ul>
                <div style= {{width:'200px',height:'20px', background:'lightgrey',border:'2px solid black',marginLeft:'25%',padding:'10px'}}> Click to See the dates</div>
             </div>
              <BarChart style ={{margin:'0 auto'}} width={600} height={300} data={data}
                   margin={{top: 20, right: 30, left: 20, bottom: 5}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="month"/>
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
              <Tooltip/>
              <Legend />
              <Bar yAxisId="left" dataKey="login" fill="#8884d8" />
              </BarChart>
          </div>)
  }
}

export default withRouter(EmployeeInfo);
