import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
class List extends React.Component{
  constructor(){
    super();
    this.state = {
      sortBy:true,
      employeeInfo:{},
      limit:20,
      currentPage:1,
    }

  }

 sortByColumn = (given_column) => {
     const {sortBy} = this.state;
     let tempList = [];
     tempList = this.props.employees;
     if(sortBy==true){
         for (let idx =0; idx< tempList.length-1; idx++){
           for(let index = idx +1; index < tempList.length; index++){
             if(tempList[idx][given_column]>tempList[index][given_column]){
                 let temp = tempList[index][given_column];
                     tempList[index][given_column] = tempList[idx][given_column];
                     tempList[idx][given_column] = temp;
                   }
                 }
               }
          this.setState({sortBy:false});
        }
        else {
          for (let idx =0; idx< tempList.length-1; idx++){
            for(let index = idx +1; index < tempList.length; index++){
               if(tempList[idx][given_column]< tempList[index][given_column]){
                 let temp = tempList[index][given_column];
                     tempList[index][given_column] = tempList[idx][given_column];
                     tempList[idx][given_column] = temp;
                   }
                 }
             }
             this.setState({sortBy:true});
           }
           this.props.sortByColumn(tempList);

       }



  next = () => {
    let countUp = this.state.currentPage;
    countUp++;
    if(countUp<=(this.props.employees.length/this.state.limit)){
      this.setState({currentPage:countUp});
    }
  }
  prev = () => {
    let countDown = this.state.currentPage;
    if(countDown>1 && countDown<=(this.props.employees.length/this.state.limit)){
      countDown--;
      this.setState({currentPage:countDown});
    }
  }
  setPage = (givenPageNumber) => this.setState({currentPage:givenPageNumber});
  deleteEployee = (givenId,event) =>{
    event.preventDefault();
    this.props.deleteEployee(givenId);
  }
  updatedEmployee = (givenId,event) =>{

    console.log("givenid: ",givenId)
    const {tempEmployees} = this.props;
        let updatedemployee = {...tempEmployees[givenId]} ;

    this.props.updatedEmployee(updatedemployee);
    event.preventDefault();
  }
  render(){
    const {limit,currentPage} = this.state;
    let start = limit * (currentPage -1);
    let end  = limit * (currentPage);
    let pages = [];
    for (let idx =1; idx<=this.props.tempEmployees.length/limit; idx++){
      pages.push(idx);
    }
    let peginationData = this.props.tempEmployees.slice(start,end);
    return(<div className = 'main-box'>
            <div className='list'>
                <div className='row-header'>
                    <div  id = 'id'onClick = {() => this.sortByColumn('id')} className = 'cell'>ID</div>
                    <div onClick = {() => this.sortByColumn('first_name')} className = 'cell'>First name </div>
                    <div onClick = {() => this.sortByColumn('last_name')} className = 'cell'>Last name</div>
                    <div onClick = {() => this.sortByColumn('email')} className = 'cell'>Email</div>
                    <div onClick = {() => this.sortByColumn('city')} id = 'cityId'className = 'cell'>City</div>
                    <div onClick = {() => this.sortByColumn('state')} id = 'stateId' className = 'cell'>State</div>
                    <div  id = 'deleteId'className = 'cell'>Delete</div>
                    <div  id = 'deleteId'className = 'cell'>Update</div>
              </div>
              <div className = "content">
                {
                  peginationData.map((employee,index) =>{
                    const {id,first_name,last_name,city,state,email} = employee;
                    return(
                    <Link style = {{display:'flex',marginLeft:'0px',marginRight:'0px'}} to={`/employee/${id}`} className='row'>
                      <div className = 'cell'>{id}</div>
                      <div className = 'cell'>{first_name}</div>
                      <div className = 'cell'>{last_name}</div>
                      <div id = 'emailId' className = 'cell'>{email}</div>
                      <div className = 'cell'>{city}</div>
                      <div className = 'cell'>{state}</div>
                      <div className = 'cell' onClick = {(event) => this.deleteEployee(index,event)}>Delete</div>
                      <div className = 'cell' onClick = {(event) => this.updatedEmployee(index,event)}>Update</div>
                    </Link>)
                  })
                }
                <div class = 'pagination'>
                  <div class='box'>
                    <Link to={`/page/${this.state.currentPage-1}`}><div class = 'prev'  onClick = {()=> this.prev()}>prev</div></Link>
                      {
                        pages.map(element => {
                          return (<Link  to={`/page/${element}`}><div onClick = {()=> this.setPage(element)} className = {this.state.currentPage==element ? 'active' : ''}>{element}</div></Link>)
                        })
                      }
                    <Link to={`/page/${this.state.currentPage+1}`}><div  className = 'next' onClick = {()=> this.next()} >next</div></Link>
                  </div>
                </div>
            </div>
          </div>
      </div>

    );
  }
}
export default withRouter(List);
