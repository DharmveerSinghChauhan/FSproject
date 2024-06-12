const mongoose= require("mongoose");
const schema = mongoose.Schema;
const Review = require("./review.js");
const { number } = require("joi");

const listingSchema = new schema({
title:{
    type : String,
    required : true,
    },
description: String,

image: {
   url:String,
   filename:String,
},

price : Number,
location : String,
country : String,
reviews : [
    {
        type: schema.Types.ObjectId,
        ref:"Review",

    },
],
owner:{
    type : schema.Types.ObjectId,
    ref: "User",
},
geometry:{
    type:{
        type: String,
        enum: ['Point'],
        // required: true,
    },
    coordinates : {
        type:[Number],
        // required:true,
    }
},
// category:{
//     type:String,
//     enum: ["mountains","arctic","farms","farms","deserts"]
// }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: { $in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;