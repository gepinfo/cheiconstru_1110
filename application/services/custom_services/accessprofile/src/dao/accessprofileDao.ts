import * as mongoose from 'mongoose';
import accessprofileModel from '../models/daomodels/accessprofile';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class accessprofileDao {
    private accessprofile = accessprofileModel;

    

    constructor() { }
    
    public async Delete(accessprofileId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: Delete');

    

    
    
    
    this.accessprofile.findByIdAndRemove(accessprofileId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(accessprofileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(accessprofileData).forEach(
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
    this.accessprofile.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(accessprofileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: SearchForUpdate');

    

    
    
    
    this.accessprofile.findOneAndUpdate({ _id: accessprofileData._id }, accessprofileData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(accessprofileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: Update');

    

    
    
    
    this.accessprofile.findOneAndUpdate({ _id: accessprofileData._id }, accessprofileData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(accessprofileId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: GetEntityById');

    

    
    
    
    this.accessprofile.findById(accessprofileId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: GetAllValues');

    

    
    
    
    this.accessprofile.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(accessprofileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: Create');

    let temp = new accessprofileModel(accessprofileData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(accessprofileData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accessprofileDao.ts: GetNounCreatedBy');

    

    
    
    
    this.accessprofile.aggregate(([
                        { $match: { $and: [{ created_by: accessprofileData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from accessprofileDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}