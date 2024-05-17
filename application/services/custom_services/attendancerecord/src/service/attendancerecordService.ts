import { Request, Response } from 'express';
import {attendancerecordDao} from '../dao/attendancerecordDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let attendancerecord = new attendancerecordDao();

export class attendancerecordService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: Delete')
     let  attendancerecordId = req.params.id;
     attendancerecord.Delete(attendancerecordId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: Search')
     let  attendancerecordData = req.query;
     attendancerecord.Search(attendancerecordData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: SearchForUpdate')
     let  attendancerecordData = req.body;
     attendancerecord.SearchForUpdate(attendancerecordData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: Update')
     let  attendancerecordData = req.body;
     attendancerecord.Update(attendancerecordData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: GetEntityById')
     let  attendancerecordId = req.params.id;
     attendancerecord.GetEntityById(attendancerecordId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: GetAllValues')
     
     attendancerecord.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: Create')
     let  attendancerecordData = req.body;
     attendancerecord.Create(attendancerecordData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into attendancerecordService.ts: GetNounCreatedBy')
     let  attendancerecordData = { created_by: req.query.createdby };
     attendancerecord.GetNounCreatedBy(attendancerecordData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from attendancerecordService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}