import React from 'react';
import List from './List'
import Search from './Search';
import './css/employee.css'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      employees:[],
      isLoading:false,

    }
  }
  callApi = () => {
    this.setState({isLoading:true});
    fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
    .then(result => result.json())
    .then((data) => {
      this.setState({employees:data})
    })
  }
  componentDidMount(){ this.callApi();}
  deleteEployee  = (updatedList)  =>     this.setState({employees:updatedList});
  searchByName   = (updatedList)  =>     this.setState({employees:updatedList});
  

  render(){
    const {employees,isLoading, search} = this.state;
    return(<div>
              <Search   employees = {this.state.employees} searchByName = {this.searchByName}/>
              <List    employees = {employees} deleteEployee = {this.deleteEployee} />
            </div>);
  }
}
export default App;
