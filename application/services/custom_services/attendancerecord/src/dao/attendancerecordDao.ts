import * as mongoose from 'mongoose';
import attendancerecordModel from '../models/daomodels/attendancerecord';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class attendancerecordDao {
    private attendancerecord = attendancerecordModel;

    

    constructor() { }
    
    public async Delete(attendancerecordId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: Delete');

    

    
    
    
    this.attendancerecord.findByIdAndRemove(attendancerecordId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(attendancerecordData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(attendancerecordData).forEach(
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
    this.attendancerecord.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(attendancerecordData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: SearchForUpdate');

    

    
    
    
    this.attendancerecord.findOneAndUpdate({ _id: attendancerecordData._id }, attendancerecordData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(attendancerecordData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: Update');

    

    
    
    
    this.attendancerecord.findOneAndUpdate({ _id: attendancerecordData._id }, attendancerecordData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(attendancerecordId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: GetEntityById');

    

    
    
    
    this.attendancerecord.findById(attendancerecordId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: GetAllValues');

    

    
    
    
    this.attendancerecord.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(attendancerecordData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: Create');

    let temp = new attendancerecordModel(attendancerecordData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(attendancerecordData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into attendancerecordDao.ts: GetNounCreatedBy');

    

    
    
    
    this.attendancerecord.aggregate(([
                        { $match: { $and: [{ created_by: attendancerecordData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from attendancerecordDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}