import Country from "../models/countryModel.js"
import asyncHandler from "express-async-handler";


const getAllCountry = asyncHandler(async (req, res) => {
    const countries = await Country.find({})
    res.json(countries);
})

const addNewCountry = asyncHandler(async (req, res) => {

    const country = new Country({
        name: req.body.name
    })
    
    const addedCountry = await country.save();
    res.status(201).json(addedCountry);
})

export {
    getAllCountry,
    addNewCountry,
}