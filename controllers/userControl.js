const User = require("../models/user.js").User
const addUser = async (req, res, next) => {
    let userEmail = req.body.email;
    let userAge = req.body.age;
    let userInst = req.body.inst;
    let userSex = req.body.sex;
    let userComment = req.body.comment;
    console.log(userEmail)
    console.log(userAge)
    console.log(userInst)
    console.log(userSex)
    console.log(userComment)
    User.create({
        userEmail : userEmail,
        userAge : userAge,
        userInst : userInst,
        userSex : userSex,
        comment : userComment
    }).then(message =>{
        if (message) {
            return res.status(200).json('users successfully added to Friends table');
        }
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = addUser