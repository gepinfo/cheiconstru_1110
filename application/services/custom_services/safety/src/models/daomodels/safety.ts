
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const safetySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   employee: { type: String },
   project: { type: String },
   contractor: { type: String },
   violation: { type: String },
   hard_hat: { type: String },
   safety_goggles: { type: String },
   HV_clothes: { type: String },
   safety_footwear: { type: String },
   fall_protection: { type: String }
})

const safetyModel = mongoose.model('safety', safetySchema, 'safety');
export default safetyModel;
