import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./contractor form Sanjeev.scss";
import  {service}   from './contractor form Sanjeev.service';

class Contractor form Sanjeev extends React.Component<any, any> {
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
        <h2 className="screen-align">contractor form Sanjeev</h2>
        <div>
    <div id="template-i53k">
        <div id="template-in9k">
            <div id="template-ir86" className="gjs-row">
                <div id="template-izwv" className="gjs-cell">
                    <div id="template-ipgy">Onboard a contractor</div>
                    <div id="template-i73g" className="gjs-row">
                        <div id="template-i22c" className="gjs-cell">
                            <div id="template-ih5pd" className="gjs-row">
                                <div id="template-ih8l3" className="gjs-cell">
                                    <input type="text" id="template-ictlx" placeholder="Contractor Name" required="true"
                                    onChange={this.handlechange} name="contractor_name" value={this.state.contractors.contractor_name}className="form-control "
                                    />
                                </div>
                                <div id="template-ioudg" className="gjs-cell">
                                    <input type="text" id="template-idst2" placeholder="Company Name" required="true"
                                    onChange={this.handlechange} name="company_name" value={this.state.contractors.company_name}className="form-control "
                                    />
                                </div>
                                <div id="template-ipp7x" className="gjs-cell">
                                    <input type="text" id="template-icega" placeholder="Mobile " required="true"
                                    onChange={this.handlechange} name="mobile" value={this.state.contractors.mobile}className="form-control "
                                    />
                                </div>
                            </div>
                            <div id="template-isv7w" className="gjs-row">
                                <div id="template-i44vj" className="gjs-cell">
                                    <input type="text" id="template-ikwz6" placeholder="E-mail" required="true"
                                    onChange={this.handlechange} name="email" value={this.state.contractors.email}className="form-control "
                                    />
                                </div>
                                <div id="template-iw3fb" className="gjs-cell">
                                    <input type="text" id="template-ilqp5" placeholder="Address Line 1" required="true"
                                    onChange={this.handlechange} name="address_line_1" value={this.state.contractors.address_line_1}className="form-control "
                                    />
                                </div>
                                <div id="template-ir7eu" className="gjs-cell">
                                    <input type="text" id="template-i58ec" placeholder="Address Line 2" required="true"
                                    onChange={this.handlechange} name="address_line_2" value={this.state.contractors.address_line_2}className="form-control "
                                    />
                                </div>
                            </div>
                            <div id="template-i14tt" className="gjs-row">
                                <div id="template-iawp5" className="gjs-cell">
                                    <input type="text" id="template-iro3i" placeholder="City" required="true"
                                    onChange={this.handlechange} name="city" value={this.state.contractors.city}className="form-control "
                                    />
                                </div>
                                <div id="template-i4ap4" className="gjs-cell">
                                    <input type="text" id="template-iep1k" placeholder="Zip Code" required="true"
                                    onChange={this.handlechange} name="zip_code" value={this.state.contractors.zip_code}className="form-control "
                                    />
                                </div>
                                <div id="template-ihppj" className="gjs-cell">
                                    <div id="template-i8jo1" className="gjs-row">
                                        <div id="template-ij8o6" className="gjs-cell">
                                            <label id="template-ixjoe">Proof Of Insurance</label>
                                            <div id="template-iu1mp">
                                                <input type='file' />
                                                <button id="template-ij5st" className="btn btn-primary ">
<i aria-hidden="true" id="template-i9qk8" className="fa fa-paperclip ">
</i>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="template-ikbdj" className="gjs-row">
                                <div id="template-inhp1" className="gjs-cell">
                                    <div id="template-iee9g" className="gjs-row">
                                        <div id="template-i1l2n" className="gjs-cell">
                                            <label id="template-ib6gh">Address Proof</label>
                                            <div id="template-io9qf">
                                                <input type='file' />
                                                <button id="template-i7mfp" className="btn btn-primary ">
<i aria-hidden="true" id="template-i7j4p" className="fa fa-paperclip ">
</i>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="template-i1zvs" className="gjs-row">
                        <div id="template-iq8zg" className="gjs-cell">
                            <div id="template-iufwi" className="gjs-row">
                                <div id="template-ipzef" className="gjs-cell">
                                    <div type="button" id="template-ifhmh" className="btn btn-primary "></div>
                                </div>
                                <div id="template-i1nbl" className="gjs-cell">
                                    <div type="button" id="template-idb36" className="btn btn-primary "></div>
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

    export default Contractor form Sanjeev;