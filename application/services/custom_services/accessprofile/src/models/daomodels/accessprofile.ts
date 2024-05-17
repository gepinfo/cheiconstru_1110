
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const accessprofileSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   accessProfile: { type: String },
   roleStatus: { type: String },
   noOfUsers: { type: String }
})

const accessprofileModel = mongoose.model('accessprofile', accessprofileSchema, 'accessprofile');
export default accessprofileModel;
