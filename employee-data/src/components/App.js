import React from 'react';
import List from './list/List'
//import Search from './search/Search';
import Search from './Search';
import './css/list/list.css';
import './css/search/search.css';
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
  componentDidMount = ( )             => this.callApi();
  deleteEployee     = (updatedList)   =>     this.setState({employees:updatedList});
  searchEmployee   = (updatedList)   =>     this.setState({employees:updatedList});

  render(){
    const {employees,isLoading, search} = this.state;
    return(<div>
              <Search  searchEmployee = {this.searchEmployee} employees = {this.state.employees}/>
              <List   employees = {employees} deleteEployee = {this.deleteEployee} />
            </div>);
  }
}
export default App;
