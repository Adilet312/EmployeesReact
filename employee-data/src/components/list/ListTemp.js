import React from 'react';

class List extends React.Component{
  constructor(){
    super();
    this.state = {
      sortBy:true,
      startPage:0,
      endPage:15,
    }

  }
 deleteEployee = (idx) => {
   let tempList = [];
   tempList = this.props.employees;
   tempList.splice(idx,1);
   this.props.deleteEployee(tempList);
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
       next = (start,end) =>this.setState({startPage:start},{endPage:start+15});


  render(){
    let peginationData = this.props.tempEmployees.slice(this.state.startPage,this.state.endPage);
    let next = this.state.endPage;
    let prev = this.state.startPage;
    return(<div className='list'>
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
                  <div className='row'>
                    <div className = 'cell'>{id}</div>
                    <div className = 'cell'>{first_name}</div>
                    <div className = 'cell'>{last_name}</div>
                    <div id = 'emailId' className = 'cell'>{email}</div>
                    <div className = 'cell'>{city}</div>
                    <div className = 'cell'>{state}</div>
                    <div className = 'cell'><button onClick = {() => this.deleteEployee(index)}>Delete</button></div>
                  </div>)
                })
              }
             </div>
             <Pagination next = {this.state.startPage} prev = {this.state.endPage} />
           </div>
         );
  }
}
export default List;
/*<i class="fas fa-sort-down"></i>*/
/*<i class="fas fa-sort-up"></i>*/