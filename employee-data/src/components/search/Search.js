import React from 'react';

/*Search with Class*/


export default class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      category: '',
      note:''

    }

  }
  getInputData = (event) => {
    this.setState({input:event.target.value},()=> {
      let temp = this.props.employees;
      switch(this.state.category){
        case 'first_name':
              this.setState({note:""})
              temp = temp.filter(element => element.first_name.toLowerCase().includes(this.state.input.toLowerCase()));
              this.props.searchByName(temp);
        break;
        case 'last_name':
        this.setState({note:""})
              temp = temp.filter(element => element.last_name.toLowerCase().includes(this.state.input.toLowerCase()));
              this.props.searchByName(temp);
        break;
        case 'email':
              this.setState({note:""})
              temp = temp.filter(element => element.last_name.toLowerCase().includes(this.state.input.toLowerCase()));
              this.props.searchByName(temp);
        break;
        case 'city':
              this.setState({note:""})
              temp = temp.filter(element => element.last_name.toLowerCase().includes(this.state.input.toLowerCase()));
              this.props.searchByName(temp);
        break;
        case 'state':
              this.setState({note:""})
              temp = temp.filter(element => element.last_name.toLowerCase().includes(this.state.input.toLowerCase()));
              this.props.searchByName(temp);
        break;
        default:
              this.setState({note:"PLease choose category to do searching!"})
      }

    });


  }
  selectCategory = (chosen_category) => this.setState({category:chosen_category});
  render(){
    return(<div>
            <div className = 'search-box'>
              <input value ={this.state.input}  placeholder = 'search' onChange = {this.getInputData}/>
            </div>
            <div className = 'category-box'>
              <select id = 'employees'>
                <option value = '' selected>Select column</option>
                <option onClick = {() => this.selectCategory('first_name')}>First name </option>
                <option onClick = {() => this.selectCategory('last_name')}> Last name </option>
                <option onClick = {() => this.selectCategory('email')}>Email</option>
                <option onClick = {() => this.selectCategory('city')}>City</option>
                <option onClick = {() => this.selectCategory('state')}>State</option>
              </select>
            </div>
            <h3 id='noteId'>{this.state.note}</h3>
          </div>

    )
  }
}


// const Search = (props) => {
// const getInputData = (event) => props.setSearch(event.target.value);
//
// const searchByName = (event) => {
//   let tempList = props.employees;
//       tempList = tempList.filter((element) => element.first_name.toLowerCase().includes(props.search.toLowerCase());
//       props.searchByName(tempList);
//
// }
// return (<div className = 'search-box'>
//           <input value={props.search} placeholder = 'search' onChange = {getInputData}/>
//           <button onClick = {()=>searchByName()}>Search </button>
//        </div>)
// }
// export default Search;
