import { Request, Response, NextFunction } from "express";
import { accessprofileController } from '../controller/accessprofileController';


export class Routes {
    private accessprofile: accessprofileController = new accessprofileController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/accessprofile/:id').delete(this.accessprofile.Delete);
app.route('/accessprofile/get/search').get(this.accessprofile.Search);
app.route('/accessprofile/get/update').put(this.accessprofile.SearchForUpdate);
app.route('/accessprofile').put(this.accessprofile.Update);
app.route('/accessprofile/:id').get(this.accessprofile.GetEntityById);
app.route('/accessprofile').get(this.accessprofile.GetAllValues);
app.route('/accessprofile').post(this.accessprofile.Create);
app.route('/accessprofile/userid/created_by').get(this.accessprofile.GetNounCreatedBy);
     }

}