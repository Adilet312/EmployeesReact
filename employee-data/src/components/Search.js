import React from 'react';

class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      search: '',
      searchBy:'',
    }
  }
  searchByCategory  = (given_search)  =>  this.setState({searchBy:given_search});
  getInputData      = (event) =>  {
      const {search, searchBy} = this.state;
      this.setState({search:event.target.value},()=>{
      let temp = this.props.employees;
      if(!searchBy){
        temp = temp.filter(employee => employee.first_name.toLowerCase().includes(search.toLowerCase()))
        this.props.searchEmployee(temp)
      }
      else{
      temp = temp.filter(employee => employee[searchBy].toLowerCase().includes(search.toLowerCase()))
      this.props.searchEmployee(temp)
      }
    });
  }

  render(){
        return(<div>
                <div className = 'search-box'>
                  <input value ={this.state.search}  placeholder = 'search' onChange = {this.getInputData}/>
                </div>
                <div className = 'category-box'>
                  <select id = 'employees'>
                    <option value = '' selected>Select column</option>
                    <option onClick = {() => this.searchByCategory('first_name')}>First name </option>
                    <option onClick = {() => this.searchByCategory('last_name')}> Last name </option>
                    <option onClick = {() => this.searchByCategory('email_name')}>Email</option>
                    <option onClick = {() => this.searchByCategory('city_name')}>City</option>
                    <option onClick = {() => this.searchByCategory('state_name')}>State</option>
                  </select>
                </div>

              </div>
            );
          }
}
export default Search;
