import * as mongoose from 'mongoose';
import projectsModel from '../models/daomodels/projects';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class projectsDao {
    private projects = projectsModel;

    

    constructor() { }
    
    public async Delete(projectsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: Delete');

    

    
    
    
    this.projects.findByIdAndRemove(projectsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(projectsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(projectsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.projects.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(projectsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: SearchForUpdate');

    

    
    
    
    this.projects.findOneAndUpdate({ _id: projectsData._id }, projectsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(projectsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: Update');

    

    
    
    
    this.projects.findOneAndUpdate({ _id: projectsData._id }, projectsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(projectsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: GetEntityById');

    

    
    
    
    this.projects.findById(projectsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: GetAllValues');

    

    
    
    
    this.projects.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(projectsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: Create');

    let temp = new projectsModel(projectsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(projectsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into projectsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.projects.aggregate(([
                        { $match: { $and: [{ created_by: projectsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from projectsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}