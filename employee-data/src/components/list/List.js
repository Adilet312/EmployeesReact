import React from 'react';

class List extends React.Component{
  constructor(){
    super();
    this.state = {
      sortBy:true,
      startPage:0,
      endPage:20,
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
   next = () => {
     let start  =  this.state.endPage;
     this.setState({startPage:start});
     this.setState({endPage:start+20});
   }
   prev = () => {
     let start = this.state.startPage - 20;
     let end = this.state.endPage - 20;
     this.setState({startPage:start});
     this.setState({endPage:end});
   }
   paginationByNumber = (given_number) => {
     this.setState({startPage:given_number});
     this.setState({endPage:given_number + 20});
   }

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
             <div className = 'pagination'>
                <div className = {next< 21? 'prev' :''} onClick = {this.prev}><i class="fas fa-angle-double-left"></i></div>
                <div onClick = {()=>this.paginationByNumber(0)} className = {this.state.startPage ===0 && this.state.endPage==20 ? "active" : ''}>1</div>
                <div onClick = {()=>this.paginationByNumber(20)} className = {this.state.startPage ===20 && this.state.endPage==40 ? "active" : ''}>2</div>
                <div onClick = {()=>this.paginationByNumber(40)} className = {this.state.startPage ===40 && this.state.endPage==60 ? "active" : ''}>3</div>
                <div onClick = {()=>this.paginationByNumber(60)} className = {this.state.startPage ===60 && this.state.endPage==80 ? "active" : ''}>4</div>
                <div onClick = {()=>this.paginationByNumber(80)} className = {this.state.startPage ===80 && this.state.endPage==100 ? "active" : ''}>5</div>
                <div onClick = {()=>this.paginationByNumber(100)} className = {this.state.startPage ===100 && this.state.endPage==120 ? "active" : ''}>6</div>
                <div onClick = {()=>this.paginationByNumber(120)} className = {this.state.startPage ===120 && this.state.endPage==140 ? "active" : ''}>7</div>
                <div onClick = {()=>this.paginationByNumber(140)} className = {this.state.startPage ===140 && this.state.endPage==160 ? "active" : ''}>8</div>
                <div onClick = {()=>this.paginationByNumber(160)} className = {this.state.startPage ===160 && this.state.endPage==180 ? "active" : ''}>9</div>
                <div onClick = {()=>this.paginationByNumber(180)} className = {this.state.startPage ===180 && this.state.endPage==200 ? "active" : ''}>10</div>
                <div className = {next >180? 'next' :''} onClick = {this.next}><i class="fas fa-angle-double-right"></i></div>
            </div>
           </div>

    );
  }
}
export default List;
/*<i class="fas fa-sort-down"></i>*/
/*<i class="fas fa-sort-up"></i>*/
// <div className = 'sub-pagination'>
//   <div id = 'prev' className = {next< 21? 'prev' :''} onClick = {this.prev} ><i class="fas fa-angle-double-left"></i></div>
//   <div id = 'next' className = {next >180? 'next' :''} onClick = {this.next}><i class="fas fa-angle-double-right"></i></div>
// </div>
