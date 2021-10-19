const express=require("express")
const router=express.Router()
const User = require ('../models/user')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const {loginRules,registerRules,validation} = require("../middleware/validator")
const isAuth = require ('../middleware/passport')



//register
router.post("/register",registerRules(),validation,async (req,res)=>{
   const {name,lastName,email,password,isAdmin}=req.body;
   try {
    const newUser = new User ({name,lastName,email,password,isAdmin })
    //check if the email exist
    const searchusedUser = await User.findOne({email});

    if(searchusedUser){
       return res.status(400).send({msg:"email is already exist"});
    }
    
    
    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt) ;
    const hashedPassword = await bcrypt.hash(password,genSalt);
     console.log(hashedPassword)
    newUser.password = hashedPassword
    //generate a token
    const newUserToken = await newUser.save();
    const payload = {
       _id:newUserToken._id,
       name:newUserToken.name,
    }
    const token = await   jwt.sign(payload,process.env.secretOrKey,{expiresIn:3600});
    
    
    res.status(200).send({user:newUserToken,msg:"user is saved",token :`Bearer ${token}`});
   } catch (error) {
     res.status(500).send('cannot save the user'); 
   }
})
// login
router.post("/login",loginRules(),validation,  async (req,res)=>{
   const {email,password} = req.body;
   try {
      const searchedUser = await User.findOne({email});

      if(!searchedUser){
         res.status(400).send({msg:"bad credential"})
      }  const match = await bcrypt.compare(password,searchedUser.password)

      if(!match){
       res.status(400).send({msg:"bad credential"})
    
      }
        // create token
       const payload = {
          _id:searchedUser._id,
          }
         const token = await   jwt.sign(payload,process.env.secretOrKey,{expiresIn:3600});
      
      res.status(200).send({user:searchedUser,msg:"success",token :`Bearer ${token}`})
   
   
   } catch (error) {
      res.status(500).send({msg : "cannot get the user"})
      
   }
})


router.get("/",async(req,res)=>{
   try {
      let result=await User.find()
      res.send(result)
   } catch (error) {
      res.send(error)
   }
})

router.get("/current",isAuth(),async(req,res)=>{
   res.status(200).send({user:req.user});
})

module.exports=router