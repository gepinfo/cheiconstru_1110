import { Request, Response, NextFunction } from "express";
import { subcontractorsController } from '../controller/subcontractorsController';


export class Routes {
    private subcontractors: subcontractorsController = new subcontractorsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/subcontractors/:id').delete(this.subcontractors.Delete);
app.route('/subcontractors/get/search').get(this.subcontractors.Search);
app.route('/subcontractors/get/update').put(this.subcontractors.SearchForUpdate);
app.route('/subcontractors').put(this.subcontractors.Update);
app.route('/subcontractors/:id').get(this.subcontractors.GetEntityById);
app.route('/subcontractors').get(this.subcontractors.GetAllValues);
app.route('/subcontractors').post(this.subcontractors.Create);
app.route('/subcontractors/userid/created_by').get(this.subcontractors.GetNounCreatedBy);
     }

}