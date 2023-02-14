const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({

  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// Static Sign-up Method
                                  // Used the regular function because of the 'this keyword
userSchema.statics.signup = async function (email, password){

  // Validation
  if(!email || !password){
    throw Error('All fields must be field')
  }

  if(!validator.isEmail(email)){
    throw Error('Not a valid email')
  }
  if(!validator.isStrongPassword(password)){
    throw Error('Password no strong enough')
  }
  // Check to see if email already exists
  const exists = await this.findOne({ email })

  if(exists){
    throw Error('Email already in use')
  }

  // Generate salt using bcrypt
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)


  const user = await this.create({email, password: hash})

  return user
}


// Static Log in Method
userSchema.statics.login = async function(email, password){

  // Validation
  if(!email || !password){
    throw Error('All fields must be field')
  }


  // Check to see if email already exists
  const user = await this.findOne({ email })

  if(!user){
    throw Error('Incorrect Email')
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)