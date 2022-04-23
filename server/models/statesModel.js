import mongoose from 'mongoose'

const statesSchema =  new mongoose.Schema({
    date:{
        type:Date,
        required:true,
        min: '2019-01-01',
        max: Date.now(),
    },
    countryName:{
        type:String,
        enum:['Bangladesh', 'India','USA','UK','Pakistan','West Indies'],
        required:true
    },
    infected:{
        type:Number,
        required:true
    },
    recovered:{
        type:Number,
        required:true
    },
    death:{
        type:Number,
        required:true
    },
},{
    timestamps: true
})

const States = mongoose.model('States',statesSchema);
export default States;

