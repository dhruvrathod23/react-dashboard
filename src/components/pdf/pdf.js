import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

//Bootstrap and jQuery libraries
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min.js';

import $ from 'jquery';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Pdf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfs: [],
            datas: [],
            cols: []
        }
    }

    componentDidMount() {
        debugger;
        //init Datatable  
        setTimeout(() => {
            $('#tblpdf').DataTable(
                {
                    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
                    "bDestroy": true
                }
            );
        }, 1000);

        fetch(BaseapiUrl + '/api/v1/web/pdf?skip=0&limit=100&search=&column=1&order=desc')
            .then((resp) => {
                resp.json()
                    .then((result) => {
                        console.warn(result.data.pdf);
                        this.setState({
                            pdfs: result.data.pdf,
                            datas: result.data.rows,
                            cols: result.data.cols
                        });
                    })
            });
    }

    deletepdf(PdfId) {
        debugger;
        const { pdfs } = this.state;
        const apiUrl = BaseapiUrl + "/api/v1/web/pdf/" + PdfId;

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
                    pdfs: pdfs.filter(pdf => pdf._id !== PdfId)
                });
                alert('Delete successful');
            })
            .catch(error => {
                alert('There was an error!');
                console.error('There was an error!', error);
            });
    }

    render() {
        var pdflist = this.state.pdfs;
        debugger;
        if (pdflist && pdflist.length > 0) {
            return (
                <div>
                    <div class="container-fluid">
                        <h2>Pdf List</h2>
                        <Link variant="primary" to="/pdf/addpdf">Add Pdf</Link>
                        {/* {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>} */}
                        <Table id="tblpdf" className="table table-striped table-bordered dt-responsive nowrap" style={{width:"100%"}} >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Link</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pdflist.map(pdf => (
                                    <tr key={pdf._id}>
                                        <td>{pdf.name}</td>
                                        <td>{pdf.link}</td>
                                        <td>
                                            <Link variant="info" to={"/pdf/editpdf/" + pdf._id}><i className="fa fa-edit"></i></Link>
                                            <Button variant="danger" style={{ border: "none" }} onClick={() => this.deletepdf(pdf._id)}><i className="fa fa-trash"></i></Button>
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
                            <Link variant="primary" to="/pdf/addpdf">Add Pdf</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Pdf;