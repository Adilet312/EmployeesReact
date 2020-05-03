import React from 'react';

const Pagination = (props) =>{
  const next = () => {
    let start  =  props.endPage;


  }
  const prev = () => {
    let start = this.state.startPage - 15;
    let end = this.state.endPage - 15;
    console.log("start: " +start +".end: "+end);
    this.setState({startPage:start});
    this.setState({endPage:end});
  }
  return (<div className = 'pagination'>
               <div className = 'sub-pagination'>
                 <div id = 'prev' className = {next< 16? 'prev' :''} onClick = {this.prev} >prev</div>
                 <div id = 'next' className = {next >195? 'next' :''} onClick = {this.next}>next</div>
               </div>
          </div>)
}
