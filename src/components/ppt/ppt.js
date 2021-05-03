import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

//Bootstrap and jQuery libraries
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min.js';

import $ from 'jquery';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Ppt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ppts: [],
            datas: [],
            cols: []
        }
    }

    componentDidMount() {
        debugger;
        //init Datatable  
        setTimeout(() => {
            $('#tblppt').DataTable(
                {
                    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
                    "bDestroy": true
                }
            );
        }, 1000);

        fetch(BaseapiUrl + '/api/v1/web/ppt?skip=0&limit=100&search=&column=1&order=desc')
            .then((resp) => {
                resp.json()
                    .then((result) => {
                        console.warn(result.data.Ppt);
                        this.setState({
                            ppts: result.data.Ppt,
                            datas: result.data.rows,
                            cols: result.data.cols
                        });
                    })
            });
    }

    deleteppt(PptId) {
        debugger;
        const { ppts } = this.state;
        const apiUrl = BaseapiUrl + "/api/v1/web/ppt/" + PptId;

        fetch(apiUrl, { method: 'DELETE' })
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({
                    ppts: ppts.filter(ppt => ppt._id !== PptId)
                });
                alert('Delete successful');
            })
            .catch(error => {
                alert('There was an error!');
                console.error('There was an error!', error);
            });
    }

    render() {
        var pptslist = this.state.ppts;
        debugger;
        if (pptslist && pptslist.length > 0) {
            return (
                <div>
                    <div class="container-fluid">
                        <h2>Ppt List</h2>
                        <Link variant="primary" to="/ppt/addppt">Add Ppt</Link>
                        {/* {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>} */}
                        <Table id="tblppt" className="table table-striped table-bordered dt-responsive nowrap" style={{ width: "100%" }} >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Link</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pptslist.map(ppt => (
                                    <tr key={ppt._id}>
                                        <td>{ppt.name}</td>
                                        <td>{ppt.link}</td>
                                        <td>
                                            <Link variant="info" to={"/ppt/editppt/" + ppt._id}><i className="fa fa-edit"></i></Link>
                                            <Button variant="danger" style={{ border: "none" }} onClick={() => this.deleteppt(ppt._id)}><i className="fa fa-trash"></i></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div class="cardd">
                        <div class="card-body">
                            <div id="table" class="table-editable"></div>
                            <h2>No Record Found</h2>
                            <Link variant="primary" to="/ppt/addppt">Add PPT</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Ppt;