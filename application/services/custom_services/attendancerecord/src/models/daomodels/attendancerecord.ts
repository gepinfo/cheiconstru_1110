
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const attendancerecordSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   access_profile: { type: String },
   attendancedate: { type: String },
   attendance: { type: String },
   inTime: { type: String },
   outTime: { type: String },
   fromDate: { type: String },
   toDate: { type: String }
})

const attendancerecordModel = mongoose.model('attendancerecord', attendancerecordSchema, 'attendancerecord');
export default attendancerecordModel;
