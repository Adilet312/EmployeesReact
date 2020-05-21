import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';
import '../css/add-employee/add-employee.css';
import { v4 as uuidv4 } from 'uuid';
class AddEmployee extends React.Component{
  constructor(){
    super();
    this.state = {
      new_employee: {},
      modal:false,
    }
  }
  getEmployee = (key,value) =>{
      const{new_employee} = this.state;
      let givenId = Math.floor(Math.random() * Math.floor(200));//uuidv4();
      const temp = new_employee;
      temp[key] = value;
      temp["id"] = Number(givenId);
      this.setState({new_employee:temp});

  }

  onSave = () =>{
    this.props.addEmployee(this.state.new_employee);
    this.onCancel();
  }
  onActivate = () => this.setState({modal:true});
  onCancel   = () => this.setState({modal:false});
  render(){
    return(<div>
            <div className = 'add-new-employee'><button onClick = {this.onActivate}>Add new employee</button></div>
            <Modal isOpen={this.state.modal} >
              <ModalHeader toggle={this.onCancel}>Modal title</ModalHeader>
              <ModalBody>
                  <InputGroup style ={{padding:"5px"}}>
                      <InputGroupAddon  addonType="prepend">
                        <InputGroupText >First name</InputGroupText>
                      </InputGroupAddon>
                    <Input onChange = {(event)=> this.getEmployee('first_name',event.target.value)}/>
                  </InputGroup>
                  <InputGroup style ={{padding:"5px"}}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Last name </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange = {(event)=> this.getEmployee('last_name',event.target.value)}/>
                 </InputGroup>
                 <InputGroup style ={{padding:"5px"}}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText style={{width:'101px'}}>Email</InputGroupText>
                   </InputGroupAddon>
                   <Input onChange = {(event)=> this.getEmployee('email',event.target.value)}/>
                 </InputGroup>
                 <InputGroup style ={{padding:"5px"}}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText style={{width:'101px'}}>City</InputGroupText>
                   </InputGroupAddon>
                   <Input onChange = {(event)=> this.getEmployee('city',event.target.value)}/>
                 </InputGroup>
                 <InputGroup style ={{padding:"5px"}} >
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText style={{width:'101px'}}>State</InputGroupText>
                   </InputGroupAddon>
                 <Input onChange = {(event)=> this.getEmployee('state',event.target.value)}/>
               </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.onSave}>Save</Button>{' '}
                <Button color="secondary" onClick={this.onCancel}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>);
  }
}
export default AddEmployee;
