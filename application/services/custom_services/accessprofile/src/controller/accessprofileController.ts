import { Request, Response } from 'express';
import { accessprofileService } from '../service/accessprofileService';
import { CustomLogger } from '../config/Logger'
let accessprofile = new accessprofileService();

export class accessprofileController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accessprofile.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accessprofileController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accessprofileController.ts: GetNounCreatedBy');
    })}


}