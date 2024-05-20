import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./contracter list page.scss";
import  {service}   from './contracter list page.service';

class Contracter list page extends React.Component<any, any> {
    columnDefs: any = [];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
    this.state={
    contractors : {
    contractor_name: '',
    company_name: '',
    mobile: '',
    email: '',
    contractorstatus: '',
    zip_code: '',
    proof_of_insurance: '',
    proof_of_address: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    },
    
    rowData :[]
    } }
    


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ contractors: { ...this.state.contractors, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.contractors.created_by = sessionStorage.getItem('email')||'{}';
    }
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">contracter list page</h2>
        <div>
    <div id="template-iba8">
        <div id="template-ihds">
            <div id="template-i19t">
                <div id="template-izph">
                    <div id="template-ikp5">
                        <div id="template-iquz" className="gjs-row">
                            <div id="template-iziz" className="gjs-cell">
                                <div id="template-iymc" className="gjs-row">
                                    <div id="template-irlw" className="gjs-cell">
                                        <div id="template-i3kx" className="gjs-row">
                                            <div id="template-i77l" className="gjs-cell">
                                                <div id="template-i37k3" className="gjs-row">
                                                    <div id="template-iu9pq" className="gjs-cell">
                                                        <div id="template-iqgx8">Contracters</div>
                                                    </div>
                                                    <div id="template-igrxx" className="gjs-cell">
                                                        <div type="button" id="template-io7fu" className="btn "></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="template-is8cc" className="gjs-row">
                                            <div id="template-iirsy" className="gjs-cell">
                                                <div id="template-ipj2m" className="gjs-row">
                                                    <div id="template-ixqa6" className="gjs-cell">
                                                        <div id="template-iygfz" className="ag-theme-material" style={{height:
                                                        '500px', width: '100%'}}>
                                                            <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}
                                                            paginationPageSize={5} domLayout={ "autoHeight"} animateRows={true}defaultColDef={{sortable:
                                                            true, filter: true }} rowData={this.state.rowData} rowSelection={
                                                            "single"} onRowSelected={this.onRowSelected }></AgGridReact>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Contracter list page;