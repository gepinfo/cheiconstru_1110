import { Request, Response } from 'express';
import { projectsService } from '../service/projectsService';
import { CustomLogger } from '../config/Logger'
let projects = new projectsService();

export class projectsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    projects.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectsController.ts: GetNounCreatedBy');
    })}


}