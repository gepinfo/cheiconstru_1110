import { Request, Response } from 'express';
import {accessprofileDao} from '../dao/accessprofileDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let accessprofile = new accessprofileDao();

export class accessprofileService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: Delete')
     let  accessprofileId = req.params.id;
     accessprofile.Delete(accessprofileId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: Search')
     let  accessprofileData = req.query;
     accessprofile.Search(accessprofileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: SearchForUpdate')
     let  accessprofileData = req.body;
     accessprofile.SearchForUpdate(accessprofileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: Update')
     let  accessprofileData = req.body;
     accessprofile.Update(accessprofileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: GetEntityById')
     let  accessprofileId = req.params.id;
     accessprofile.GetEntityById(accessprofileId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: GetAllValues')
     
     accessprofile.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: Create')
     let  accessprofileData = req.body;
     accessprofile.Create(accessprofileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accessprofileService.ts: GetNounCreatedBy')
     let  accessprofileData = { created_by: req.query.createdby };
     accessprofile.GetNounCreatedBy(accessprofileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accessprofileService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}