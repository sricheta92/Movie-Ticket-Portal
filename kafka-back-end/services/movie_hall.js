var mongoose = require('mongoose');
var MovieHall= require('../schemas/movie_halls');

function handle_request(msg, callback){

    var res = {
        statusCode:200,
        message:""
    };

    if(msg.type=='store_movie_hall'){
    console.log(msg);
    var movie_hall = msg.movie_hall;
    var result = new MovieHall(movie_hall);
            result.save(function (err) {
                if (err) throw err;
            });
            console.log(result);
            res.success = true;
            res.message = result;
    callback(null, res);
    } 
    if(msg.type=='update_movie_hall'){
        console.log(msg);
        MovieHall.findByIdAndUpdate(msg.hall_id,msg.movie_hall,{new:true},(err,newHall)=>{
            if(err){
                res.success = false;
                res.message = err;
                callback(null, res);
            } else {
                res.success = true;
                res.message = newHall;
                callback(null, res);
            }
        }); 
    }
}

exports.handle_request = handle_request;