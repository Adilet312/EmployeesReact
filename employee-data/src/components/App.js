import React from 'react';
import List from './list/List'
import Search from './search/Search';

import './css/list/list.css';
import './css/search/search.css';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      employees:[],
      tempEmployees:[],
      isLoading:false,

    }
  }
  callApi = () => {
    this.setState({isLoading:true});
    fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
    .then(result => result.json())
    .then((data) => {
      console.log(data)
      this.setState({employees:data})
      this.setState({tempEmployees:data})
    })
  }
  componentDidMount = ( ) => this.callApi();
  deleteEployee     = (updatedList)  =>      this.setState({tempEmployees:updatedList});
  searchEmployee   = (updatedList)   =>      this.setState({tempEmployees:updatedList});
  sortByColumn     = (updatedList)   =>      this.setState({tempEmployees:updatedList})
  render(){
    const {employees,isLoading, search} = this.state;
    return(<div>
              <Search  searchEmployee = {this.searchEmployee} employees = {this.state.employees}/>
              <List  sortByColumn = {this.sortByColumn}  tempEmployees = {this.state.tempEmployees} employees = {employees} deleteEployee = {this.deleteEployee} />
            </div>);
  }
}
export default App;
