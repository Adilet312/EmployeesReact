import React from 'react';
import List from './list/List'
import Search from './search/Search';
import EmployeeInfo from './employeeInfo/EmployeeInfo';
import AddEmployee from './addEmployee/AddEmployee';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import './css/list/list.css';
import './css/search/search.css';
import './css/pagination/pagination.css';
import './css/employeeInfo/employeeInfo.css';
import './css/add-employee/add-employee.css'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      employees:[],
      tempEmployees:[],
      isLoading:false,
      editEmployee: {}

    }
  }
  callApi = () => {
    this.setState({isLoading:true});
    fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
    .then(result => result.json())
    .then((data) => {
      this.setState({employees:data})
      this.setState({tempEmployees:data})
    })
  }
  componentDidMount = ( ) => this.callApi();
  deleteEployee     = (givenId)      =>   {
    const employees = this.state.tempEmployees;
     employees.splice(givenId,1);
     this.setState({tempEmployees:employees});
     }
  searchEmployee   = (updatedList)   =>      this.setState({tempEmployees:updatedList});
  sortByColumn     = (updatedList)   =>      this.setState({tempEmployees:updatedList});
  addEmployee      = (newEmployee)   =>   {
     const employees = this.state.tempEmployees;
     employees.unshift(newEmployee);
     this.setState({tempEmployees:employees});
  }
  updatedEmployee = (updated_employee) =>{this.setState({editEmployee:updated_employee}); console.log("updated employee from App",this.state.editEmployee)}
  render(){
    const {employees,isLoading, search} = this.state;
    return(<Router>
              <Switch>
                <Route path = '/' exact>
                  <Search  searchEmployee = {this.searchEmployee} employees = {this.state.employees}/>

                  <AddEmployee addEmployee = { this.addEmployee}/>
                  <List updatedEmployee = {this.updatedEmployee} sortByColumn = {this.sortByColumn}  tempEmployees = {this.state.tempEmployees} employees = {employees} deleteEployee = {this.deleteEployee} />
                </Route>
                <Route path = '/page/:page' exact>
                  <Search addNewEmployee = {this.addNewEmployee} searchEmployee = {this.searchEmployee} employees = {this.state.employees}/>
                  <List  sortByColumn = {this.sortByColumn}  tempEmployees = {this.state.tempEmployees} employees = {employees} deleteEployee = {this.deleteEployee} />
                </Route>
                <Route path = '/employee/:id'>
                  <EmployeeInfo  employees = {this.state.tempEmployees} />
                </Route>
              </Switch>
            </Router>);
  }
}
export default App;
//https://raw.githubusercontent.com/maratgaip/json/master/people.json
