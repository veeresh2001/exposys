import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {addcargo} from './addcargo';
import {updatecargo} from './updatecargo';

export class cargo extends Component {

    constructor(props){
        super(props);
        this.state ={cars:[], addModalShow : false, editModalShow : false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
       fetch('http://localhost:49902/api/cargo')
       .then(response=> response.json())
       .then(data => {
        this.setState({s:data});
       }
        );
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(depid)
    {
        if(window.confirm('Are you sure?'))
        {
            fetch('http://localhost:49902/api/cargo/'+depid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'
            }
            })
        }
    }

    render(){
        
    const {cars, carid, carname} = this.state;
    let addModalClose =() => this.setState({addModalShow:false});
    let editModalClose =() => this.setState({editModalShow:false});

        return(
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>cargoID</th>
                    <th>cargoName</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {deps.map(car=>
                   <tr key ={car.cargoID}> 
                   <td>{car.cargoID}</td>
                   <td>{car.cargoName}</td>
                   <td>
<ButtonToolbar>
<Button
className="mr-2" variant="info"
onClick= {()=> this.setState({editModalShow:true, carid:car.cargoID, carname:car.cargoName})}
>
    update
</Button>

<Button className="mr-2" 
onClick={()=> this.deleteDep(dep.cargoID)} 
variant="danger"
>Delete</Button>

<EditDepModal
show = {this.state.editModalShow}
onHide={editModalClose}
carid = {carid}
carname = {carname}
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
    >Add Cargo details</Button>

    <AddDepModal
    show={this.state.addModalShow}
    onHide={addModalClose}
    />

</ButtonToolbar>
</div>
        )
    }

}