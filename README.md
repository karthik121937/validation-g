# validation-g
npm package for gmail validation and profiling

# Code Usage

# require package
const validation = require('validation-g');

# getProfile
validation.getProfile('xxxxx@gmail.com',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})

# isValid
validation.isValid('xxxxx@gmail.com',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})
