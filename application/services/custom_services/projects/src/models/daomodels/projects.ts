
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const projectsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   project_name: { type: String },
   city: { type: String },
   address: { type: String },
   contractor: { type: String },
   sub_contractor: { type: String },
   owner: { type: String },
   project_manager: { type: String },
   project_type: { type: String },
   timeline_months: { type: String },
   construction_type: { type: String }
})

const projectsModel = mongoose.model('projects', projectsSchema, 'projects');
export default projectsModel;
