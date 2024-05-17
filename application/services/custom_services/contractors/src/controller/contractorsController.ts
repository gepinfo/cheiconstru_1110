import { Request, Response } from 'express';
import { contractorsService } from '../service/contractorsService';
import { CustomLogger } from '../config/Logger'
let contractors = new contractorsService();

export class contractorsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    contractors.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into contractorsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from contractorsController.ts: GetNounCreatedBy');
    })}


}