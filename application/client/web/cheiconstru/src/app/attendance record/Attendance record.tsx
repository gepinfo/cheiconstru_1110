import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./Attendance record.scss";
import  {service}   from './Attendance record.service';
import  BootstrapTable   from 'react-bootstrap-table-next';
import  paginationFactory   from 'react-bootstrap-table2-paginator';
import  'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'  ;
import  'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'  ;

class Attendance record extends React.Component<any, any> {
    columnDefs: any = [];
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    attendancerecord : {
    name: '',
    access_profile: '',
    attendancedate: '',
    attendance: '',
    inTime: '',
    outTime: '',
    fromDate: '',
    toDate: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ attendancerecord: { ...this.state.attendancerecord, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.attendancerecord.created_by = sessionStorage.getItem('email')||'{}';
    }
    rowclick ={onClick: (e: any, row: any, rowIndex: any) => 
    {this.props.history.push({ pathname: "/",state:{id:row} });
    }}

    render(){
    return(
    <>
        <h2 className="screen-align">Attendance record</h2>
        <div id="iz2p">
    <div id="iz2p-4">
        <div id="iz2p-3">
            <div id="iz2p-2">
                <div id="iz2p">
                    <div id="template-im3y" className="gjs-row">
                        <div id="template-iy2q" className="gjs-cell">
                            <div type="button" id="template-i2flh" className="btn btn-primary "></div>
                            <div id="template-i02c1">Attendance record</div>
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

    export default Attendance record;