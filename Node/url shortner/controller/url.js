const shortid = require('shortid');


const URL = require( '../models/url' );

async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(404).json({error:"url is required"})
const shortID=shortid();
await URL.create({
    shortId:shortID,
    redirectUrl:body.url,
    visitHistory:[],
})
return res.status(200).json({id:shortID})
}

module.exports = {handleGenerateNewShortURL};