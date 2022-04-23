import States from "../models/statesModel.js"
import asyncHandler from "express-async-handler";


const getAllByCountry = asyncHandler(async (req, res) => {
    
    let states = await States.find({countryName:req.body.countryName})
    if(!states.length){
        res.json("No record found");
        return;
    }

    states={
        ...states,
        date: states.date
    }
    res.json(states);
})

const addNewStates = asyncHandler(async (req, res) => {
    const country = new States({
        date:new Date(req.body.date),
        countryName: req.body.countryName,
        infected:req.body.infected,
        recovered:req.body.recovered,
        death:req.body.death
    })

    const addedCountry = await country.save();
    res.status(201).json(addedCountry);
})

const updateStateById = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const state = await States.findById(id);
    if(!state){
        res.status(401);
        throw new Error('State not found');
    }
    
    const updatedState = await States.findByIdAndUpdate(id,req.body,{new:true});
    res.status(201).json(updatedState);
})
const deleteStateById = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const state = await States.findById(id);
    if(!state){
        res.status(401);
        throw new Error('State not found');
    }
    await state.deleteOne();
    res.status(201).json("Record deleted");
})


export {
    addNewStates,
    getAllByCountry,
    updateStateById,
    deleteStateById
}