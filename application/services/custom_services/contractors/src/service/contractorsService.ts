import { Request, Response } from 'express';
import {contractorsDao} from '../dao/contractorsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let contractors = new contractorsDao();

export class contractorsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: Delete')
     let  contractorsId = req.params.id;
     contractors.Delete(contractorsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: Search')
     let  contractorsData = req.query;
     contractors.Search(contractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: SearchForUpdate')
     let  contractorsData = req.body;
     contractors.SearchForUpdate(contractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: Update')
     let  contractorsData = req.body;
     contractors.Update(contractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: GetEntityById')
     let  contractorsId = req.params.id;
     contractors.GetEntityById(contractorsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: GetAllValues')
     
     contractors.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: Create')
     let  contractorsData = req.body;
     contractors.Create(contractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into contractorsService.ts: GetNounCreatedBy')
     let  contractorsData = { created_by: req.query.createdby };
     contractors.GetNounCreatedBy(contractorsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from contractorsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}