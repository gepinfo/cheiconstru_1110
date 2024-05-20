import { Request, Response } from 'express';
import {projectsDao} from '../dao/projectsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let projects = new projectsDao();

export class projectsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: Delete')
     let  projectsId = req.params.id;
     projects.Delete(projectsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: Search')
     let  projectsData = req.query;
     projects.Search(projectsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: SearchForUpdate')
     let  projectsData = req.body;
     projects.SearchForUpdate(projectsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: Update')
     let  projectsData = req.body;
     projects.Update(projectsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: GetEntityById')
     let  projectsId = req.params.id;
     projects.GetEntityById(projectsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: GetAllValues')
     
     projects.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: Create')
     let  projectsData = req.body;
     projects.Create(projectsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectsService.ts: GetNounCreatedBy')
     let  projectsData = { created_by: req.query.createdby };
     projects.GetNounCreatedBy(projectsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}