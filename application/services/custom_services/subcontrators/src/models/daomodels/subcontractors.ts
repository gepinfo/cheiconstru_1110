
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const subcontractorsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   contractor_name: { type: String },
   company_name: { type: String },
   mobile: { type: String },
   email: { type: String },
   city: { type: String },
   address: { type: String },
   zip_code: { type: String },
   subcontractorstatus: { type: String },
   proof_of_insurance: { type: String },
   proof_of_address: { type: String }
})

const subcontractorsModel = mongoose.model('subcontractors', subcontractorsSchema, 'subcontractors');
export default subcontractorsModel;
