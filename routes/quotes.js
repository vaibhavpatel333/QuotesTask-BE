const {Router}=require('express');
const rout=Router();
const { createQuote, updateQuote, deleteQuote, fetchQuote } = require('../controllers/quotesController');
const { validate } = require("express-validation");
const { QuotesRequestValidator } = require('../modules/quote.model');


rout.get("/", fetchQuote);
rout.post("/", validate({ body: QuotesRequestValidator }), createQuote)
rout.patch("/:id", validate({ body: QuotesRequestValidator }), updateQuote);
rout.delete("/:id",deleteQuote);



// //get blog in details by help of blog id which was pass into query params
// rout.get("/edit",getblogBYId)

// rout.post("/delete",comment_controller)

module.exports=rout