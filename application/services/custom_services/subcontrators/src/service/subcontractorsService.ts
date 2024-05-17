import { Request, Response } from 'express';
import {subcontractorsDao} from '../dao/subcontractorsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let subcontractors = new subcontractorsDao();

export class subcontractorsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: Delete')
     let  subcontractorsId = req.params.id;
     subcontractors.Delete(subcontractorsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: Search')
     let  subcontractorsData = req.query;
     subcontractors.Search(subcontractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: SearchForUpdate')
     let  subcontractorsData = req.body;
     subcontractors.SearchForUpdate(subcontractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: Update')
     let  subcontractorsData = req.body;
     subcontractors.Update(subcontractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: GetEntityById')
     let  subcontractorsId = req.params.id;
     subcontractors.GetEntityById(subcontractorsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: GetAllValues')
     
     subcontractors.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: Create')
     let  subcontractorsData = req.body;
     subcontractors.Create(subcontractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subcontractorsService.ts: GetNounCreatedBy')
     let  subcontractorsData = { created_by: req.query.createdby };
     subcontractors.GetNounCreatedBy(subcontractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subcontractorsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}