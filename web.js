// web.js
require('newrelic');
var Q = require('q')
var express = require("express");
var logfmt = require("logfmt");
var app = express();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var Vote = mongoose.model('Vote', {
	username: String,
	thing: String,
	score: Number
});

app.use(logfmt.requestLogger());

app.get('/insert', function(req, res) {
	var vote = mongoose.model('Vote');
	vote.update({ username:req.query.username, thing:req.query.thing}, { score: req.query.score }, { upsert: true }, function (err, numberAffected, raw) {
		if (err) return handleError(err);
		res.send(JSON.stringify({'updated':numberAffected}));
	});
});

// app.get('/getAll', function(req, res) {
// 	var vote = mongoose.model('Vote');
// 	vote.find({},function(err, docs) {
// 	    res.send(JSON.stringify(docs))
// 	});
// });

// //No Batch
// app.get('/get', function(req, res) {
// 	var vote = mongoose.model('Vote');

// 	vote.find({ thing:req.query.thing },function (err, votes) {
// 		if (err) return console.error(err);
// 		totalUpvotes = 0;
// 		totalDownvotes = 0
// 		votes.forEach(function(myVote){
// 			if(myVote.score==1) {
// 				totalUpvotes++;
// 			}
// 			else if(myVote.score==-1) {
// 				totalDownvotes++;
// 			}
// 		});
// 	  	res.send(JSON.stringify({'up':totalUpvotes,'down':totalDownvotes}));
// 	})

// });

//Batch
app.get('/get', function(req, res) {
	var vote = mongoose.model('Vote');
	var things = JSON.parse(req.query.data)['things']

	var promises = []
	var results = {}

	things.forEach(function(thingId){
		promises.push((function(){
			var deferred = Q.defer()

			vote.find({ thing:thingId },function (err, votes) {
				if (err) return console.error(err);
				totalUpvotes = 0;
				totalDownvotes = 0

				votes.forEach(function(myVote){
					if(myVote.score==1) {
						totalUpvotes++;
					}
					else if(myVote.score==-1) {
						totalDownvotes++;
					}
				});
				console.log("adding")
				results[thingId] = {'ups':totalUpvotes,'downs':totalDownvotes}
				deferred.resolve()
			})

			return deferred.promise
		})())
	})

	Q.allSettled(promises).done(function(){
		console.log('sent')
		res.send(JSON.stringify(results))
	});
	
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});