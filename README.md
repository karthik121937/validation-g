# validation-gmail
npm package for gmail validation and profiling

# Code Usage

# require package
```ruby
const validation = require('validation-gmail');
```

# getProfile
```ruby
validation.getProfile('xxxxx@gmail.com',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})
```
# isValid
```ruby
validation.isValid('xxxxx@gmail.com',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})
```
