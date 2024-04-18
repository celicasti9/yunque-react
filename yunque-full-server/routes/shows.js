var express = require('express');
var router = express.Router();

const Show = require("../models/Show");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Book.find()
  .populate("show")
  .then((foundShows) => {
    console.log("Found Shows ===>", foundShows);
    res.json(foundShows)
  })
    .catch((err) => {
        console.log("Error creating Show ===>", err)
        res.json(err);
    })
  });
  router.get('/details/:showId', (req, res, next) => {
    Book.findById(req.params.showId)
    .populate("show")
    .then((foundShows) => {
      console.log("Found Show ===>", foundShows);
      res.json(foundShows)
    })
  } )

router.post('/', (req, res, next) => {
    const {picture, title, hour, description} = req.body

    Book.create(req.body)
        .then((createdShow) => {
            console.log("Created Show ===>", createdShow);
        res.json(createdShow);
    })
        .catch((err) => {
            console.log("Error creating show ===>", err);
            res.json(err);
        });
});

router.post('/update/:showId', (req, res, next) => {

    Book.findByIdAndUpdate(
        req.params.showId,
        req.body, 
        {
        new: true
        }
    )

    .then((updatedShow) => {
        console.log("Updated Show ===>", updatedShow);
        res.json(updatedShow);
    })
    .catch((err) => {
        console.log("Error updating show ===>", err);
        res.json(err);
    })
});

router.get('/delete/:showId', (req, res, next) => {
    Book.findByIdAndDelete(req.params.showId)
      .then((deletedShow) => {
        console.log("Deleted Show ===>", deletedShow);
        res.json(deletedShow);
      })
      .catch((err) => {
        console.log("Error updating show ===>", err);
        res.json(err);
    });
});

module.exports = router;
