import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {Addcomp} from './addcomp';
import {updatecomp} from './updatecomp';

export class company extends Component {

    constructor(props){
        super(props);
        this.state ={emps:[], addModalShow : false, editModalShow : false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('http://localhost:49902/api/company')
        .then(response=> response.json())
        .then(data => {
         this.setState({emps:data});
        }
         );
     }

     componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(empid)
    {
        if(window.confirm('Are you sure?'))
        {
            fetch('http://localhost:49902/api/company/'+compid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'
            }
            })
        }
    }

    render(){

     const {comp, compid, compname,cargoid, mailid, DOd} = this.state;

    let addModalClose =() => this.setState({addModalShow:false});
    let editModalClose =() => this.setState({editModalShow:false});

        return(
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>companyID</th>
                    <th>compa nyName</th>
                    <th>cargoid</th>
                    <th>MailID</th>
                    <th>DOd</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                
                {emps.map(comp=>
                   <tr key ={comp.compid}> 
                   <td>{comp.compid}</td>
                   <td>{comp.compname}</td>
                   <td>{comp.cargoid}</td>
                   <td>{comp.mailid}</td>
                   <td>{comp.DOd}</td>
                   <td>
<ButtonToolbar>
<Button
className="mr-2" variant="info"
onClick= {()=> this.setState({editModalShow:true, 
compid:comp.companyID, compname:comp.companyName, 
cargoid:comp.cargoid, mailid:emp.MailID,
DOd:emp.DOd})}
>
    Edit
</Button>

<Button className="mr-2" 
onClick={()=> this.deleteEmp(comp.companyID)} 
variant="danger"
>Delete</Button>

<EditEmpModal
show = {this.state.editModalShow}
onHide={editModalClose}
compid = {compid}
compname = {compname}
cargoid={cargoid}
mailid={mailid}
DOd={DOd}
/>

</ButtonToolbar>

                   </td>
                   </tr>
                   )}
            </tbody>
            </Table>
<ButtonToolbar>
    <Button
    variant='primary'
    onClick={()=> this.setState({addModalShow: true})} 
    >Add company</Button>

    <AddEmpModal
    show={this.state.addModalShow}
    onHide={addModalClose}
    />

</ButtonToolbar>
</div>
        )
    }

}