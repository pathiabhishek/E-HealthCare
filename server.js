const express = require('express')

const port = 9003

var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var nodemailer = require('nodemailer');
let redirectUrl;
let summarylist,userdata;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require('path');

app.set('views', __dirname + '/views/pages');
app.use(express.static(__dirname + '/static'));
app.engine('html', require('ejs').renderFile);

app.use(session({ secret: 'madmax' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var ses;

const ms = require('mysql');
let connection = ms.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e-health-care'
});

connection.connect((err) => {
  if(err) {console.log(err)}
  let str = '';
  str = !err ? "Database is connected": "Error connecting database";
  console.log(str);
});

app.get('/', function (req, res) {
  
    if (ses) {
      res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true });
    } else {
      res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false });
    }
});

app.get('/home', function (req, res) {

  if (ses) {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true });
  } else {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false });
  }
});

app.get('/profile', function(req, res) {
  let type = (ses.type) ? 'doctor' : 'users';
  if(ses) {
    connection.query('SELECT * FROM `queries` WHERE `uid` = "'+ses.id+'"', function (error, results, fields) {
      if (error) { 
        res.end('error');
        console.log(error);
      } else {
        summarylist = results;
      }
    });
    connection.query('SELECT * FROM `'+type+'`  WHERE `uid` = "'+ses.id+'"', function (error, results, fields) {
      if (error) { 
        res.end('error');
        console.log(error);
      } else {
        userdata = results;
      }
    });
  }
  // if (ses) {
  //   connection.query('SELECT * FROM `queries` WHERE `uid` = "'+ses.id+'"', function (error, results, fields) {
  //     if (error) { 
  //       res.end('error');
  //       console.log(error);
  //     } else {
  //       if (ses.type) {
  //       res.render('docprofile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true , list: results});
  //       } else {
  //         res.render('profile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true , list: results });
  //       }
  //     }
  //   });
  // } else {
  //   res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false });
  // }
setTimeout(function(){
  if(ses) {
    if (ses.type) {
      res.render('docprofile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true , list: summarylist, data: userdata});
      } else {
        console.log(userdata[0].username)
        res.render('profile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true ,list: summarylist, data: userdata});
      }
  }
  else {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false });
  }
},2000);
  

})

app.get('/userProfile', function(req, res) {

})


app.get('/feedback', function(req, res) {

  if (ses) {
    res.render('feedback.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true });
  } else {
    res.render('feedback.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false });
  }
})

sendRegisterMail = (email, userid) => {
  redirectUrl = "/home?"+userid;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'jazzzpal@gmail.com',
    to: email,
    subject: 'Please verify email address',
    html: '<p><a href="http://localhost:9003' + redirectUrl + '">click here</a>  to verify email</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.post('/registeruser',function(req,res){
  ses = req.body;
  connection.query('INSERT INTO `users`(`username`, `contact`, `email`, `password`) VALUES ("'+ses.username+'","'+ses.contact+'","'+ses.email+'","'+ses.password+'")', function (error, results, fields) {
		if (error) { 
      res.end('error');
      console.log(error);
		} else {
      userId = 'uid'+results.insertId; // auto incremental id
       sendRegisterMail(ses.email, userId);
      res.end('done');
		}
  });
});

app.post('/registerdoctor',function(req,res){
  ses = req.body;
  console.log('doc',ses);
  connection.query('INSERT INTO `doctor`(`username`, `contact`, `email`, `password`) VALUES ("'+ses.username+'","'+ses.contact+'","'+ses.email+'","'+ses.password+'")', function (error, results, fields) {
		if (error) { 
      res.end('error');
      console.log(error);
		} else {
      userId = 'did'+results.insertId; // auto incremental id
      sendRegisterMail(ses.email, userId);
      res.end('done');
		}
  });
});

app.post('/loginuser',function(req,res){
  ses = req.body;
  let url = ses.url;
  let userid = url.split('?')[1];
  let username = ses.username;
  let password = ses.password;
  if(userid == undefined) {
    connection.query("SELECT * FROM `users` WHERE `username` = '"+ username +"' and `password` = '"+ password +"' ", function (error, results, fields) {
      if(error) {
        res.end('error');
      }
      else {
        if(results.length > 0) {
          if(results[0].active == 1) {
            ses = {
              ...ses,
              id: results[0].uid,
              email:results[0].email,
              type: 0
            }
            res.end('done');
            console.log('user already');
          }
          else {
            res.end('erroe');
            console.log('user un verifed')
          }
        }
        else {
          res.end('error');
        }
      }
    });
  }
  else {
    connection.query("SELECT * FROM `users` WHERE `username` = '"+ username +"' and `password` = '"+ password +"' ", function (error, results, fields) {
      if(error) {
        res.end('error');
      }
      else {
        connection.query("UPDATE `users` SET `active` = '"+1+"' WHERE `username` = '"+username+"' ", function(error, results, fields){
          if(error) {
            res.end('error');
          }
          else {
            res.end('done');
            console.log('user validated')
          }
        });
      }
    });
  }

});

app.post('/logindoctor',function(req,res){
  ses = req.body;
  let url = ses.url;
  let userid = url.split('?')[1];
  let username = ses.username;
  let password = ses.password;
  if(userid == undefined) {
    connection.query("SELECT * FROM `doctor` WHERE `username` = '"+ username +"' and `password` = '"+ password +"' ", function (error, results, fields) {
      if(error) {
        res.end('error');
      }
      else {
        if(results.length > 0) {
          if(results[0].active == 1) {
            ses = {
              ...ses,
              id: results[0].did,
              email:results[0].email,
              type: 1
            }
            res.end('done');
            console.log('user already');
          }
          else {
            res.end('error');
            console.log('user uncverifed')
          }
        }
        else {
          res.end('error');
        }
      }
    });
  }
  else {
    connection.query("SELECT * FROM `doctor` WHERE `username` = '"+ username +"' and `password` = '"+ password +"' ", function (error, results, fields) {
      if(error) {
        res.end('error');
      }
      else {
        connection.query("UPDATE `doctor` SET `active` = '"+1+"' WHERE `username` = '"+username+"' ", function(error, results, fields){
          if(error) {
            res.end('error');
          }
          else {
            res.end('done');
            console.log('user validated')
          }
        });
      }
    });
  }
});

app.get('/listing', function (req, res) {
  connection.query("SELECT * FROM `doctorcategory`", function (error, results, fields) {
    let data = results;
    if(error) {
      console.log(error)
    }
    if(results) {
      if (ses) {
        res.render('listing.ejs', { title: 'Listing', isLoggedIn: true, data: data });
      } else {
        res.render('index.ejs', { title: 'Listing', isLoggedIn: false });
      }
    }
  });
});

  app.post('/doctorListing', function (req, res) {
      
    connection.query('SELECT * FROM doctor WHERE dlid='+req.body.id+' ORDER BY `rating`', function (error, results, fields) {
    if(error) {
      console.log(error)
    }
    console.log(results)
    if(results) {
      if (ses) {
        res.render('doctorListing.ejs', { title: 'Doctor Listing', isLoggedIn: true, data: results });
      } else {
        res.render('index.ejs', { title: 'Doctor Listing', isLoggedIn: false});
      }
    }
  });
});

app.get('/logout', function(req,res){
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      ses = null;
      res.redirect('/');
    }
  });
});

  app.post('/askQuestion', function (req, res) {
    console.log('this is id', req.body.id)
    connection.query('SELECT * FROM doctor WHERE did="'+req.body.id+'"', function (error, results, fields) {
      if(error) {
        console.log(error)
      }
      if(results) {
        console.log('this is results', results)
        if (ses) {
          res.render('askQuestion.ejs', { title: 'Doctor Listing', isLoggedIn: true, doc: results[0]});
        } else {
          res.render('index.ejs', { title: 'Doctor Listing', isLoggedIn: false });
        }
      }
    });

  });

  app.post('/generateQuestion', function (req, res) {
    console.log('session=============',ses)
    const data = req.body.data
    const senderId = ses.id,
          userEmail = (ses.email).trim(),
          receiverId = data.id,
          docEmail = (data.to).trim(),
          message = data.message,
          time = data.time,
          from = ses.username,
          to = data.name;

    connection.query('INSERT INTO `queries`(`uid`, `did`, `question`, `username`, `doctorname`, `time`, `userEmail`, `docEmail`) VALUES ("'+senderId + '", "'+ receiverId + '", "'+ message  +'", "'+from  + '", "'+ to + '", "'+ time + '", "'+ userEmail + '", "'+ docEmail + '")', function (error, results, fields) {
      if (error) {
        state = {
          "code": 400,
          "flag": false,
          "reason": "error occurred"
        };
        res.end('error');
      }
      if(results) {
        state = {
          "code": 200,
          "flag": true,
          "reason": "sucessfully add"
        };
        res.end('done');
      }
    });
  });

  app.post('/updateuser',function(req,res){
    if(ses) {
      let data = req.body;
      console.log(ses);
      connection.query("UPDATE `users` SET `username`='"+data.name+"',`contact`='"+data.contact+"',`email`='"+data.email+"',`bloodgroup`='"+data.bloodgroup+"',`age`='"+data.age+"',`gender`='"+data.gender+"', `medicalhistory`= '"+data.history+"' WHERE uid='"+ses.id+"'" ,function(error, results,feilds){
        if(error) {
          res.end('error');
        }
        else {
          res.end('done');
        }
      })
    }
  });

  app.post('/updateuser',function(req,res){
    if(ses) {
      let data = req.body;
      connection.query("UPDATE `doctor` SET `username`='"+data.name+"',`education`='"+data.education+"',`experience`='"+data.experience+"',`currentwork`='"+data.current+"',`treatements`='"+data.treatments+"',`email`='"+data.email+"',`contact`='"+data.contact+"' WHERE did='"+ses.id+"'" ,function(error, results,feilds){
        if(error) {
          res.end('error');
        }
        else {
          res.end('done');
        }
      })
    }
  });
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
