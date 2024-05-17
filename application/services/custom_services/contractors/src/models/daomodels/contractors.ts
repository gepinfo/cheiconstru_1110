
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const contractorsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   contractor_name: { type: String },
   company_name: { type: String },
   mobile: { type: String },
   email: { type: String },
   contractorstatus: { type: String },
   zip_code: { type: String },
   proof_of_insurance: { type: String },
   proof_of_address: { type: String },
   address_line_1: { type: String },
   address_line_2: { type: String },
   city: { type: String }
})

const contractorsModel = mongoose.model('contractors', contractorsSchema, 'contractors');
export default contractorsModel;
