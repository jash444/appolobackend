const express= require("express")
const mongoose=require("mongoose")


const app=express()
app.use(express.json())

const connect=()=>{
    return mongoose.connect("mongodb+srv://flipkartproject:flipkart@cluster0.fo2l4.mongodb.net/appolo?retryWrites=true&w=majority")
}
app.use(express.urlencoded({extended:false}));





const doctor= new mongoose.Schema({
    Name:{type:String,required:false},
    designation:{type:String,required:false},
    specaltion:{type:String,required:false},
    exprence:{type:String,required:false},
    image:{type:String,required:false},
    rating:{type:String,required:false},
    time:{type:String,required:false},
    cost:{type:String,required:false},
    age:{type:String,required:false},
    slot:{type:Array,required:false},
    Comment:{type:Array,required:false}

})
const Doctor=mongoose.model("doctor",doctor)















app.get("/appo",async(req,res)=>{
    const doctor = await Doctor.find({})
    res.send(doctor)
   })
   app.get("/appo/:id",async(req,res)=>{
    var id = req.params.id;
    console.log(id)
    const doctor = await Doctor.findById(id)
    res.send(doctor)
   })
    
app.post("/appo",async(req,res)=>{ 
    const doctor = await Doctor.create(req.body)
    res.send(doctor)
    })
app.delete("",async(req,res)=>{
    const doctor = await Doctor.find({})
    res.send(doctor)
})






const port =process.env.PORT||2233




app.listen(port,async()=>{
    //http://localhost:2233/home
    await connect()
    console.log("appolo backend is responce"+port)
})