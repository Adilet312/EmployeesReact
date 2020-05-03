import React from 'react';

const Pagination = (props) =>{
  const paginationByNumber = (given_number) => { props.paginationByNumber(given_number,given_number+20);}
  return (
    <div className = 'pagination'>

        <div className = {props.endPage< 21? 'prev' :''} onClick = {()=>props.prev()}><i class="fas fa-angle-double-left"></i></div>

        <div onClick = {()=>paginationByNumber(0)} className =   {props.startPage ===0 &&   props.endPage==20 ? "active" : ''}>1</div>

        <div onClick = {()=>paginationByNumber(20)} className =  {props.startPage ===20 &&  props.endPage==40 ? "active" : ''}>2</div>

        <div onClick = {()=>paginationByNumber(40)} className =  {props.startPage ===40 &&  props.endPage==60 ? "active" : ''}>3</div>

        <div onClick = {()=>paginationByNumber(60)} className =  {props.startPage ===60 &&  props.endPage==80 ? "active" : ''}>4</div>

        <div onClick = {()=>paginationByNumber(80)} className =  {props.startPage ===80 &&  props.endPage==100 ? "active" : ''}>5</div>

        <div onClick = {()=>paginationByNumber(100)} className = {props.startPage ===100 && props.endPage==120 ? "active" : ''}>6</div>

        <div onClick = {()=>paginationByNumber(120)} className = {props.startPage ===120 && props.endPage==140 ? "active" : ''}>7</div>

        <div onClick = {()=>paginationByNumber(140)} className = {props.startPage ===140 && props.endPage==160 ? "active" : ''}>8</div>

        <div onClick = {()=>paginationByNumber(160)} className = {props.startPage ===160 && props.endPage==180 ? "active" : ''}>9</div>

        <div onClick = {()=>paginationByNumber(180)} className = {props.startPage ===180 && props.endPage==200 ? "active" : ''}>10</div>

        <div className = {props.endPage >180? 'next' :''} onClick = {()=>props.next()}><i class="fas fa-angle-double-right"></i></div>

    </div>)
}
export default Pagination;
