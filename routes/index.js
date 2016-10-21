var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Personal Infomation' });
});

router.post('/userinfo', function(req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  var gender = req.body.inlineRadioOptions;
  var occupation = req.body.occupation;
  var hometown = req.body.hometown;
  var ops = new Array();
  var op;
  ops[0] = req.body.inlineCheckbox0;
  ops[1] = req.body.inlineCheckbox1;
  ops[2] = req.body.inlineCheckbox2;
  ops[3] = req.body.inlineCheckbox3;
  ops[4] = req.body.inlineCheckbox4;
  for (op in ops)
  {
     if(!ops[op])
     {
        ops[op] = 0;
     }
  }
  console.log(ops[1]);
  //res.render('register', { title: 'Personal Infomation' });
  });

module.exports = router;
