import mongoose from 'mongoose'

const countrySchema =  new mongoose.Schema({
    
    name: {
        type:String,
        enum:['Bangladesh', 'India','USA','UK','Pakistan'],
        required:true,
        unique:true,
    }
},{
    timestamp:true
})

const Country = mongoose.model('Country',countrySchema);
export default Country;

