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
      this.setState({search:event.target.value},()=>{
      const {search, searchBy,employees} = this.state;
      let temp = this.props.employees;
      if(!searchBy.length){
        temp = temp.filter(employee => employee.first_name.toLowerCase().includes(search.toLowerCase()))
        this.props.searchEmployee(temp)
        this.setState({search:''})
      }
      else{
      temp = temp.filter(employee => employee[searchBy].toLowerCase().includes(this.state.search.toLowerCase()))
      this.props.searchEmployee(temp);

      }
    });

  }

  render(){
        return(<div className = 'container'>
                <div className = 'search-box'>
                  <input   placeholder = 'search' onChange = {this.getInputData}/>
                </div>
                <div className = 'category-box'>
                  <select id = 'employees'>
                    <option value = '' selected>Select column</option>
                    <option onClick = {() => this.searchByCategory('first_name')}>First name </option>
                    <option onClick = {() => this.searchByCategory('last_name')}> Last name </option>
                    <option onClick = {() => this.searchByCategory('email')}>Email</option>
                    <option onClick = {() => this.searchByCategory('city')}>City</option>
                    <option onClick = {() => this.searchByCategory('state')}>State</option>
                  </select>
                </div>
              </div>)
          }
}
export default Search;
