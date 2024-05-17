import { Request, Response } from 'express';
import { safetyService } from '../service/safetyService';
import { CustomLogger } from '../config/Logger'
let safety = new safetyService();

export class safetyController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    safety.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into safetyController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from safetyController.ts: GetNounCreatedBy');
    })}


}