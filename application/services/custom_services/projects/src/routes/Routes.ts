import { Request, Response, NextFunction } from "express";
import { projectsController } from '../controller/projectsController';


export class Routes {
    private projects: projectsController = new projectsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/projects/:id').delete(this.projects.Delete);
app.route('/projects/get/search').get(this.projects.Search);
app.route('/projects/get/update').put(this.projects.SearchForUpdate);
app.route('/projects').put(this.projects.Update);
app.route('/projects/:id').get(this.projects.GetEntityById);
app.route('/projects').get(this.projects.GetAllValues);
app.route('/projects').post(this.projects.Create);
app.route('/projects/userid/created_by').get(this.projects.GetNounCreatedBy);
     }

}