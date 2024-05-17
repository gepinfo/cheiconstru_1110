import { Request, Response, NextFunction } from "express";
import { attendancerecordController } from '../controller/attendancerecordController';


export class Routes {
    private attendancerecord: attendancerecordController = new attendancerecordController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/attendancerecord/:id').delete(this.attendancerecord.Delete);
app.route('/attendancerecord/get/search').get(this.attendancerecord.Search);
app.route('/attendancerecord/get/update').put(this.attendancerecord.SearchForUpdate);
app.route('/attendancerecord').put(this.attendancerecord.Update);
app.route('/attendancerecord/:id').get(this.attendancerecord.GetEntityById);
app.route('/attendancerecord').get(this.attendancerecord.GetAllValues);
app.route('/attendancerecord').post(this.attendancerecord.Create);
app.route('/attendancerecord/userid/created_by').get(this.attendancerecord.GetNounCreatedBy);
     }

}