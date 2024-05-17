import { Request, Response, NextFunction } from "express";
import { contractorsController } from '../controller/contractorsController';


export class Routes {
    private contractors: contractorsController = new contractorsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/contractors/:id').delete(this.contractors.Delete);
app.route('/contractors/get/search').get(this.contractors.Search);
app.route('/contractors/get/update').put(this.contractors.SearchForUpdate);
app.route('/contractors').put(this.contractors.Update);
app.route('/contractors/:id').get(this.contractors.GetEntityById);
app.route('/contractors').get(this.contractors.GetAllValues);
app.route('/contractors').post(this.contractors.Create);
app.route('/contractors/userid/created_by').get(this.contractors.GetNounCreatedBy);
     }

}