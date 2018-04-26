var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');

router.get('/getrevenuebymovie', (req, res) => {
    payload = {
        action: "admin",
        type: "get_revenue_by_movie"
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.get('/getrevenuebymoviehall', (req, res) => {
    payload = {
        action: "admin",
        type: "get_revenue_by_movie_hall"
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.get('/getmoviehallinfo', (req, res) => {
    payload = {
        action: "admin",
        type: "get_movie_hall_info"
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.post('/addmoviehall', (req, res) => {
    payload = {
        action: "admin",
        type: "add_movie_hall",
        movie_hall_name: req.body.movie_hall_name,
        ticket_price: req.body.ticket_price,
        city: req.body.city,
        max_seats: req.body.max_seats
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.post('/editmoviehall', (req, res) => {
    payload = {
        action: "admin",
        type: "edit_movie_hall",
        movie_hall_id: req.body.movie_hall_id,
        movie_hall_name: req.body.movie_hall_name,
        ticket_price: req.body.ticket_price,
        city: req.body.city,
        max_seats: req.body.max_seats
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.get('/getuserbilldetails', (req, res) => {
    payload = {
        action: "admin",
        type: "get_user_bill_details"
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.get('/getmoviesinhall', (req, res) => {
    payload = {
        action: "admin",
        type: "get_movies_in_hall",
        movie_hall_id: req.param("movie_hall_id")
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

router.post('/addmovie', (req, res) => {
    payload = {
        action: "admin",
        type: "add_movie",
        title: req.body.title,
        trailer_link: req.body.trailer_link,
        movie_characters: req.body.movie_characters,
        release_date: req.body.release_date,
        rating: req.body.rating,
        photos: req.body.photos,
        movie_length: req.body.movie_length,
        see_it_in: req.body.see_it_in
    };
    kafka.make_request('requestTopic',payload, function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results);
            res.send(results);
        }
    });
});

module.exports = router;