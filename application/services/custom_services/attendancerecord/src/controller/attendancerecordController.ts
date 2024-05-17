import { Request, Response } from 'express';
import { attendancerecordService } from '../service/attendancerecordService';
import { CustomLogger } from '../config/Logger'
let attendancerecord = new attendancerecordService();

export class attendancerecordController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    attendancerecord.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into attendancerecordController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from attendancerecordController.ts: GetNounCreatedBy');
    })}


}