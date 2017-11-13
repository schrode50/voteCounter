'use strict';

require(process.cwd() + '/app/model/job.js');

function clickHandler(db) {
  let clicks = db.model('ClickCounter', 'ClickCountModel');

  this.getClicks = function(req, res) {

    clicks.find({}, function(err, result) {
      if(err) {
        throw err;
      } if(result) {
        res.json(result);
      } else {
        clicks.insert({'clicks': 0}, function(err) {
          if(err) {
            throw err;
          }

          clicks.findOne({}, clickProjection, function(err, doc) {
            if(err) {
              throw err;
            }
            res.json(result);
          });
        });
      }
    });
  };
}

module.exports = clickHandler;
