import React from 'react';

class List extends React.Component{
  constructor(){
    super();
    this.state = {
      sortByOption: '',
      sortBy:'' ,
    }

  }
 deleteEployee = (idx) => {
   let tempList = [];
   tempList = this.props.employees;
   tempList.splice(idx,1);
   this.props.deleteEployee(tempList);
 }
 sortByColumn = (given_column) => {
     this.setState({sortByOption:given_column},()=>{
     const {sortBy} = this.state;
     let tempList = [];
     tempList = this.props.employees;
     if(sortBy=='ascending' || sortBy=='descending'){
         for (let idx =0; idx< tempList.length-1; idx++){
           for(let index = idx +1; index < tempList.length; index++){
             if(sortBy=='ascending'){
               if(tempList[idx][given_column]>tempList[index][given_column]){
                 let temp = tempList[index][given_column];
                     tempList[index][given_column] = tempList[idx][given_column];
                     tempList[idx][given_column] = temp;
                   }
                 }
             else if(sortBy=='descending'){
               if(tempList[idx][given_column]< tempList[index][given_column]){
                 let temp = tempList[index][given_column];
                     tempList[index][given_column] = tempList[idx][given_column];
                     tempList[idx][given_column] = temp;
                   }
                 }
               }
             }
           }
        else if(sortBy=='default'){
          for( let outIdx = 0; outIdx<tempList.length -1; outIdx++){
            for(let inIdx = outIdx + 1; inIdx<tempList.length; inIdx++){
              if(tempList[outIdx][given_column] > tempList[inIdx][given_column]){
                let temp = tempList[inIdx][given_column];
                tempList[inIdx][given_column] = tempList[outIdx][given_column];
                tempList[outIdx][given_column] = temp;
              }
            }
          }
        }
           this.props.sortByColumn(tempList);
         });
       }




 sortByOption = (sort_by_option) => this.setState({sortBy:sort_by_option});
  render(){
    return(<div className='list'>
              <div className='row-header'>
                <div  id = 'id'onClick = {() => this.sortByColumn('id')} className = 'cell'>ID
                  <select>
                    <option onClick = {() => this.sortByOption('default')} selected>sort</option>
                    <option onClick = {() => this.sortByOption('ascending')}>sortByA</option>
                    <option onClick =  {() => this.sortByOption('descending')}>sortByD</option>
                  </select>
                </div>
                <div onClick = {() => this.sortByColumn('first_name')} className = 'cell'>First name
                  <select>
                    <option onClick = {() => this.sortByOption('default')} selected>sort</option>
                    <option onClick = {() => this.sortByOption('ascending')}>sortByA</option>
                    <option onClick =  {() => this.sortByOption('descending')}>sortByD</option>
                  </select>
                </div>
                <div onClick = {() => this.sortByColumn('last_name')} className = 'cell'>Last name
                  <select>
                    <option onClick = {() => this.sortByOption('default')} selected>sort</option>
                    <option onClick = {() => this.sortByOption('ascending')}>sortByA</option>
                    <option onClick =  {() => this.sortByOption('descending')}>sortByD</option>
                  </select>
                </div>
                <div onClick = {() => this.sortByColumn('email')} className = 'cell'>Email
                  <select>
                    <option onClick = {() => this.sortByOption('default')} selected>sort</option>
                    <option onClick = {() => this.sortByOption('ascending')}>sortByA</option>
                    <option onClick =  {() => this.sortByOption('descending')}>sortByD</option>
                  </select>
                </div>
                <div onClick = {() => this.sortByColumn('city')} id = 'cityId'className = 'cell'>City
                  <select>
                    <option onClick = {() => this.sortByOption('default')} selected>sort</option>
                    <option onClick = {() => this.sortByOption('ascending')}>sortByA</option>
                    <option onClick =  {() => this.sortByOption('descending')}>sortByD</option>
                  </select>
                </div>
                <div onClick = {() => this.sortByColumn('state')} id = 'stateId' className = 'cell'>State
                  <select>
                    <option onClick = {() => this.sortByOption('default')} selected>sort</option>
                    <option onClick = {() => this.sortByOption('ascending')}>sortByA</option>
                    <option onClick =  {() => this.sortByOption('descending')}>sortByD</option>
                  </select>
                </div>
                <div  id = 'deleteId'className = 'cell'>Delete</div>
              </div>

              <div className = "content">
              {
                this.props.tempEmployees.map((employee,index) =>{
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
           </div>

    );
  }
}
export default List;


// else if(sortBy=='reverse'){
//   for(let idx = 0; idx<tempList.length/2; idx++){
//      let temp = tempList[idx][given_column]
//      tempList[idx][given_column] = tempList[tempList.length -1-idx][given_column];
//      tempList[tempList.length -1-idx][given_column] = temp;
//   }
// }
