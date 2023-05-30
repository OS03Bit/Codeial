const User = require('../models/user');
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

module.exports.signIn = function(req, res){
    return res.render('Signin', {
        title: 'Codeial | Sign In'
    })
}

module.exports.signUp = function(req, res){
    return res.render('Signup', {
        title: 'Codeial | Sign Up'
    })
}

module.exports.create = function(req, res){

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email}, function(err, user){
        if(err){console.log('errror in finding user in signing up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while sigining up'); return}
                return res.redirect('/users/sign-in')
            })
        }
        else{
            return res.redirect('back');
        }
    })
    
}

module.exports.createSession = function(res, req){

}
