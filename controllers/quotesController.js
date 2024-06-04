const Quotes = require("../models/quotes.js");
const RespondJSON=require("../modules/respond.model.js")

const fetchQuote = async (req,res) => {
  try{
    const id = req?.query?.id
    let result;
    if(id){
      result = await Quotes.findById({_id:id})
    }else{
      result = await Quotes.find()
    }
    RespondJSON(res, 200, result, "Data fetched successfully")
  }catch(e){
    RespondJSON(res, 400, null, "", e.message)
  }
}

const createQuote = async (req, res) => {
  try{
    const { quoteText, authorName } = req.body;
    const quote = await Quotes.findOne({quoteText})
    if(quote){
      RespondJSON(res, 409, null, "", "Duplicate key exist")
      return
    }
    const result = await Quotes.create({
      quoteText,
      authorName,
    });
    RespondJSON(res, 200, result, "Data created successfully")
  }catch(e){
    RespondJSON(res, 400, null, "", e.message)
  }
};

const updateQuote = async (req, res) => {
  try{
    const { quoteText, authorName } = req.body;
    const {id} = req.params;
    if(!id){
      RespondJSON(res, 400, null, "", "id is required")
    }

    const existingQuote = await Quotes.findOne({ quoteText });
    if (existingQuote && existingQuote._id.toString() !== id) {
      RespondJSON(res, 409, null, "", "Quote text must be unique");
      return;
    }

    const result = await Quotes.findByIdAndUpdate({_id:id},{quoteText,authorName},{new:true})
    RespondJSON(res, 200, result, "Data updated successfully")
  }catch(e){
    RespondJSON(res, 400, null, "", e.message)

  }
};

const deleteQuote = async (req, res) => {
  try{
    const {id} = req.params;
    if(!id){
      RespondJSON(res, 400, null, "", "id is required")
    }
    const result = await Quotes.findByIdAndDelete({_id:id});
    RespondJSON(res, 200, result, "Data deleted successfully")
  }catch(e){
    RespondJSON(res, 400, null, "", e.message)

  }
};

module.exports = { fetchQuote, createQuote, updateQuote, deleteQuote };