import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./Nandhabalan onboard a contractor.scss";
import  {service}   from './Nandhabalan onboard a contractor.service';

class Nandhabalan onboard a contractor extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
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

    render(){
    return(
    <>
        <h2 className="screen-align">Nandhabalan onboard a contractor</h2>
        <div>
    <div id="template-iv8l">
        <div id="template-i8p5">
            <div id="template-ipbg">
                <div id="template-ip3w">
                    <div id="template-i0q3">
                        <div id="template-iuzf">
                            <div id="template-its6">
                                <div id="template-icyr">
                                    <div id="template-iio3">
                                        <div id="template-itqj">
                                            <div id="template-ihtq">
                                                <div id="template-ii86">
                                                    <div id="i083-4">
                                                        <div id="i083-3">
                                                            <div id="i083-2">
                                                                <div id="i083">
                                                                    <div id="template-i5kf" className="gjs-row">
                                                                        <div id="template-ikbf" className="gjs-cell">
                                                                            <div id="template-i21l" className="gjs-row"></div>
                                                                            <div id="template-izmy" className="gjs-row">
                                                                                <div id="template-icsqw" className="gjs-cell"></div>
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
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Nandhabalan onboard a contractor;