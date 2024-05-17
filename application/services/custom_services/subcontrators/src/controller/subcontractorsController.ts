import { Request, Response } from 'express';
import { subcontractorsService } from '../service/subcontractorsService';
import { CustomLogger } from '../config/Logger'
let subcontractors = new subcontractorsService();

export class subcontractorsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    subcontractors.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subcontractorsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subcontractorsController.ts: GetNounCreatedBy');
    })}


}