const mongoose=require('mongoose')

const connection=async()=>{
    try {
       await mongoose.connect("mongodb+srv://vicky123:vicky123@cluster0.w4o0dqf.mongodb.net/quote_crud2?retryWrites=true&w=majority&appName=Cluster0")
       console.log("db connected");
    } catch (error) {
        console.log(error)
    }
    
}
module.exports=connection;