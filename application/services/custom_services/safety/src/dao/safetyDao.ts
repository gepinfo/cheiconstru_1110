import * as mongoose from 'mongoose';
import safetyModel from '../models/daomodels/safety';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class safetyDao {
    private safety = safetyModel;

    

    constructor() { }
    
    public async Delete(safetyId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: Delete');

    

    
    
    
    this.safety.findByIdAndRemove(safetyId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(safetyData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(safetyData).forEach(
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
    this.safety.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(safetyData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: SearchForUpdate');

    

    
    
    
    this.safety.findOneAndUpdate({ _id: safetyData._id }, safetyData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(safetyData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: Update');

    

    
    
    
    this.safety.findOneAndUpdate({ _id: safetyData._id }, safetyData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(safetyId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: GetEntityById');

    

    
    
    
    this.safety.findById(safetyId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: GetAllValues');

    

    
    
    
    this.safety.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(safetyData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: Create');

    let temp = new safetyModel(safetyData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(safetyData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into safetyDao.ts: GetNounCreatedBy');

    

    
    
    
    this.safety.aggregate(([
                        { $match: { $and: [{ created_by: safetyData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from safetyDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}