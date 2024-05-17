import * as mongoose from 'mongoose';
import contractorsModel from '../models/daomodels/contractors';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class contractorsDao {
    private contractors = contractorsModel;

    

    constructor() { }
    
    public async Delete(contractorsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: Delete');

    

    
    
    
    this.contractors.findByIdAndRemove(contractorsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(contractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(contractorsData).forEach(
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
    this.contractors.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(contractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: SearchForUpdate');

    

    
    
    
    this.contractors.findOneAndUpdate({ _id: contractorsData._id }, contractorsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(contractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: Update');

    

    
    
    
    this.contractors.findOneAndUpdate({ _id: contractorsData._id }, contractorsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(contractorsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: GetEntityById');

    

    
    
    
    this.contractors.findById(contractorsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: GetAllValues');

    

    
    
    
    this.contractors.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(contractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: Create');

    let temp = new contractorsModel(contractorsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(contractorsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into contractorsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.contractors.aggregate(([
                        { $match: { $and: [{ created_by: contractorsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from contractorsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}