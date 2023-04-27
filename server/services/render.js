const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3001/api/users1')
        .then(function(response){
            console.log(response.data)
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user =(req,res) => {
    res.render('add_user');
}

exports.update_user =(req,res) =>{
    axios.get('http://localhost:3001/api/users1', { params:{id:req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}