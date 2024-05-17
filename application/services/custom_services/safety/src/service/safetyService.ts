import { Request, Response } from 'express';
import {safetyDao} from '../dao/safetyDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let safety = new safetyDao();

export class safetyService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: Delete')
     let  safetyId = req.params.id;
     safety.Delete(safetyId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: Search')
     let  safetyData = req.query;
     safety.Search(safetyData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: SearchForUpdate')
     let  safetyData = req.body;
     safety.SearchForUpdate(safetyData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: Update')
     let  safetyData = req.body;
     safety.Update(safetyData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: GetEntityById')
     let  safetyId = req.params.id;
     safety.GetEntityById(safetyId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: GetAllValues')
     
     safety.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: Create')
     let  safetyData = req.body;
     safety.Create(safetyData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into safetyService.ts: GetNounCreatedBy')
     let  safetyData = { created_by: req.query.createdby };
     safety.GetNounCreatedBy(safetyData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from safetyService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}