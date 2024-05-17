import * as mongoose from 'mongoose';
import subcontractorsModel from '../models/daomodels/subcontractors';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class subcontractorsDao {
    private subcontractors = subcontractorsModel;

    

    constructor() { }
    
    public async Delete(subcontractorsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: Delete');

    

    
    
    
    this.subcontractors.findByIdAndRemove(subcontractorsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(subcontractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(subcontractorsData).forEach(
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
    this.subcontractors.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(subcontractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: SearchForUpdate');

    

    
    
    
    this.subcontractors.findOneAndUpdate({ _id: subcontractorsData._id }, subcontractorsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(subcontractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: Update');

    

    
    
    
    this.subcontractors.findOneAndUpdate({ _id: subcontractorsData._id }, subcontractorsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(subcontractorsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: GetEntityById');

    

    
    
    
    this.subcontractors.findById(subcontractorsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: GetAllValues');

    

    
    
    
    this.subcontractors.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(subcontractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: Create');

    let temp = new subcontractorsModel(subcontractorsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(subcontractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subcontractorsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.subcontractors.aggregate(([
                        { $match: { $and: [{ created_by: subcontractorsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from subcontractorsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}