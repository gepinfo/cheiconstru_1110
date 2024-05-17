import { Request, Response, NextFunction } from "express";
import { safetyController } from '../controller/safetyController';


export class Routes {
    private safety: safetyController = new safetyController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/safety/:id').delete(this.safety.Delete);
app.route('/safety/get/search').get(this.safety.Search);
app.route('/safety/get/update').put(this.safety.SearchForUpdate);
app.route('/safety').put(this.safety.Update);
app.route('/safety/:id').get(this.safety.GetEntityById);
app.route('/safety').get(this.safety.GetAllValues);
app.route('/safety').post(this.safety.Create);
app.route('/safety/userid/created_by').get(this.safety.GetNounCreatedBy);
     }

}