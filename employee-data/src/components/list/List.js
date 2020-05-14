import React from 'react';
//import '../css/pagination/pagination.css';
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





  render(){
    const {limit,currentPage} = this.state;
    let start = limit * (currentPage -1);
    let end  = limit * (currentPage);
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
              </div>
              <div className = "content">
                {
                  peginationData.map((employee,index) =>{
                    const {id,first_name,last_name,city,state,email} = employee;
                    return(
                    <Link to={`/employee/${id}`} className='row'>
                      <div className = 'cell'>{id}</div>
                      <div className = 'cell'>{first_name}</div>
                      <div className = 'cell'>{last_name}</div>
                      <div id = 'emailId' className = 'cell'>{email}</div>
                      <div className = 'cell'>{city}</div>
                      <div className = 'cell'>{state}</div>
                      <div className = 'cell' onClick = {() => this.props.deleteEployee(index)}>Delete</div>
                    </Link>)
                  })
                }
                <div class = 'pagination'>
                  <div class='box'>
                    <div class = 'prev'  onClick = {()=> this.prev()}>prev</div>
                    <div onClick = {()=> this.setPage(1)} className = {this.state.currentPage==1 ? 'active' : ''}>1</div>
                    <div onClick = {()=> this.setPage(2)} className = {this.state.currentPage==2 ? 'active' : ''}>2</div>
                    <div onClick = {()=> this.setPage(3)} className = {this.state.currentPage==3 ? 'active' : ''}>3</div>
                    <div onClick = {()=> this.setPage(4)} className = {this.state.currentPage==4 ? 'active' : ''}>4</div>
                    <div onClick = {()=> this.setPage(5)} className = {this.state.currentPage==5 ? 'active' : ''}>5</div>
                    <div onClick = {()=> this.setPage(6)} className = {this.state.currentPage==6 ? 'active' : ''}>6</div>
                    <div onClick = {()=> this.setPage(7)} className = {this.state.currentPage==7 ? 'active' : ''}>7</div>
                    <div onClick = {()=> this.setPage(8)} className = {this.state.currentPage==8 ? 'active' : ''}>8</div>
                    <div onClick = {()=> this.setPage(9)} className = {this.state.currentPage==9 ? 'active' : ''}>9</div>
                    <div onClick = {()=> this.setPage(10)} className = {this.state.currentPage==10 ? 'active' : ''}>10</div>
                    <div className = 'next' onClick = {()=> this.next()}>next</div>
                  </div>
                </div>
            </div>
          </div>
      </div>

    );
  }
}
export default List;
