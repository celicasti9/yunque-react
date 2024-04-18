var express = require('express');
var router = express.Router();

const Talento = require("../models/Talento");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Book.find()
  .populate("talento")
  .then((foundTalentos) => {
    console.log("Found Talent ===>", foundTalentos);
    res.json(foundTalentos)
  })
    .catch((err) => {
        console.log("Error creating Talent ===>", err)
        res.json(err);
    })
  });
  router.get('/details/:talentosId', (req, res, next) => {
    Book.findById(req.params.talentoId)
    .populate("talento")
    .then((foundTalentos) => {
      console.log("Found Talent ===>", foundTalentos);
      res.json(foundTalentos)
    })
  } )

router.post('/', (req, res, next) => {
    const {picture, title, hour, description} = req.body

    Book.create(req.body)
        .then((createdTalento) => {
            console.log("Created Talento ===>", createdTalento);
        res.json(createdTalento);
    })
        .catch((err) => {
            console.log("Error creating talento ===>", err);
            res.json(err);
        });
});

router.post('/update/:talentoId', (req, res, next) => {

    Book.findByIdAndUpdate(
        req.params.talentoId,
        req.body, 
        {
        new: true
        }
    )

    .then((updatedTalento) => {
        console.log("Updated Talent ===>", updatedTalento);
        res.json(updatedTalento);
    })
    .catch((err) => {
        console.log("Error updating talent ===>", err);
        res.json(err);
    })
});

router.get('/delete/:talentoId', (req, res, next) => {
    Book.findByIdAndDelete(req.params.showId)
      .then((deletedTalento) => {
        console.log("Deleted Talent ===>", deletedTalento);
        res.json(deletedTalento);
      })
      .catch((err) => {
        console.log("Error updating talent ===>", err);
        res.json(err);
    });
});

module.exports = router;
