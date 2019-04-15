const express = require('express')
const paypal = require('paypal-rest-sdk');

const port = 9003

var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var nodemailer = require('nodemailer');
let redirectUrl;
let summarylist,userdata,docdlid;
let isPremium;
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


var multer = require('multer');

var imgName;
var imgArray =[];
var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/assets/uploads");
  },
  filename: function (req, file, callback) {
    var fileName = file.originalname.split('.');
    var newFilePath = ses.username + '_' + imgName + '_' + fileName[0]+'.' + fileName[1];
    imgArray.push(newFilePath);
    callback(null, newFilePath);
  }
});

app.post("/api/certUpload", function (req, res) {
  imgName = 'cert'
  upload(req, res, function (err) {
    if (err) {
      return res.end("Something went wrong!");
    }

    connection.query('UPDATE `doctor` SET `certificates`="'+imgArray+'" WHERE did = "'+ ses.id + '"', function (error, results, fields) {
      if (error) { 
        res.end('error');
        console.log(error);
      } else {
        imgArray = [];
        res.redirect('/profile');
      }
    });

  });
});

app.post("/api/profileUpload", function (req, res) {
  imgName = 'profile'
  let type = (ses.type) ? 'doctor' : 'users';
  let id = (ses.type) ? 'did' : 'uid';
  console.log('UPDATE `'+type+'` SET `imgurl`="'+imgArray+'" WHERE `'+id+'` = "'+ ses.id + '"');
  upload(req, res, function (err) {
    if (err) {
      return res.end("Something went wrong!");
    }
    connection.query('UPDATE `'+type+'` SET `imgurl`="'+imgArray+'" WHERE `'+id+'` = "'+ ses.id + '"', function (error, results, fields) {
      if (error) { 
        res.end('error');
        console.log(error);
      } else {
        imgArray = [];
        res.redirect('/profile');
      }
    });
  });
});

const ms = require('mysql');
let connection = ms.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ehealthcenter'
});

connection.connect((err) => {
  if(err) {console.log(err)}
  let str = '';
  str = !err ? "Database is connected": "Error connecting database";
  console.log(str);
});

app.get('/', function (req, res) {
  console.log('nadu gundu',ses);
  if (ses && ses.email) {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true   });
  } else {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false   });
  }
});

app.get('/home', function (req, res) {
  if (ses && ses.email) {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true   });
  } else {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false   });
  }
});

app.get('/premium', function (req, res) {
  if(ses) {
    connection.query('SELECT `premium` FROM `users` WHERE `uid` = "'+ses.id+'"', function (error, results, fields) {
      if (error) { 
        res.end('error');
        console.log(error);
      } else {
        if(results[0].premium == 1) {
          res.render('buypremium.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true, isPremium : true });
        }
        else {
          res.render('buypremium.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true, isPremium: false });
        }        
      }
    });
  }
  else {
    res.render('buypremium.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false, isPremium: false });
  }
});

app.get('/profile', function(req, res) {
  let type = (ses.type) ? 'doctor' : 'users';
  let id = (ses.type)? 'did': 'uid';
  let queriesId = (ses.type)? docdlid : ses.id
  if(ses) {
    if(ses.type) {
      connection.query('SELECT `dlid` FROM `doctor` WHERE `did` = "'+ses.id+'"', function (error, results, fields) {
        if (error) { 
          res.end('error');
          console.log(error);
        } else {
          docdlid = results[0].dlid;
        }
      });
    }
    connection.query('SELECT * FROM `queries` WHERE `'+id+'` = "'+queriesId+'"', function (error, results, fields) {
      if (error) { 
        res.end('error');
        console.log(error);
      } else {
        summarylist = results;
      }
    });
    connection.query('SELECT * FROM `'+type+'`  WHERE `'+id+'` = "'+ses.id+'"', function (error, results, fields) {
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
  // let summarylist = [{  // #TODO: REFER and DELETE this for summary and UNCOMMENT ABOVE CODE
  //   tid: 0,
  //   username: 'username',
  //   email: 'email',
  //   contact: 'contact',
  //   education: 'education',
  //   experience: 'experience',
  //   question: 'aasdf adfs afds afds afds',
  //   time: '13 dec 1995',
  //   doctorname: 'abc',
  //   answer: 'abc abc abc abc'
  // }]
  // let userdata = [{  // #TODO: REFER and DELETE this for doc table and UNCOMMENT BELOW CODE
  //   profile: 'assets/uploads/banner.jpg',
  //   treatments: 'treatments',
  //   currentwork: 'current work',
  //   cert:['assets/uploads/banner.jpg'],
  //   queriesanswered: 5
  // }]
  // res.render('docprofile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true , list: summarylist, data: userdata});

setTimeout(function(){
  if(ses) {
    if (ses.type) {
      res.render('docprofile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true , list: summarylist, data: userdata  });
      } else {
        res.render('profile.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true ,list: summarylist, data: userdata  });
      }
  }
  else {
    res.render('index.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false   });
  }
},2000);
  

})


app.post('/answerQuery', function(req, res) {
  connection.query("UPDATE `queries` SET `queries` = '"+req.answer+"' WHERE `id` = '"+req.id+"' ", function(error, results, fields){
    if(error) {
      res.end('error');
    }
    else {
      res.end('done');
    }
  });
})
app.get('/userProfile', function(req, res) {

})


app.get('/feedback', function(req, res) {

  if (ses && ses.email) {
    res.render('feedback.ejs', { title: 'E HEALTH CENTER', isLoggedIn: true   });
  } else {
    res.render('feedback.ejs', { title: 'E HEALTH CENTER', isLoggedIn: false   });
  }
})

sendRegisterMail = (email, userid) => {
  redirectUrl = "/home?"+userid;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jazzzpal@gmail.com',
      pass: 'jaspal28696roxxx'
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
          console.log('users data',results);
          if(results[0].active == 1) {
            ses = {
              ...ses,
              id: results[0].uid,
              email:results[0].email,
              type: 0
            }
            console.log(ses);
            res.end('done');
            console.log('user already');
          }
          else {
            res.end('error');
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
        res.render('listing.ejs', { title: 'Listing', isLoggedIn: true, data: data   });
      } else {
        res.render('index.ejs', { title: 'Listing', isLoggedIn: false   });
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
        res.render('doctorListing.ejs', { title: 'Doctor Listing', isLoggedIn: true, data: results   });
      } else {
        res.render('index.ejs', { title: 'Doctor Listing', isLoggedIn: false  });
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

app.get('/aboutus', function(req,res){
  if(ses) {
    res.render('aboutus.ejs', { title: 'AboutUs ', isLoggedIn: true   });
  }
  else {
    res.render('aboutus.ejs', { title: 'AboutUs ', isLoggedIn: false   });
  }
});

var upload = multer({
  storage: Storage
}).array("imgUploader", 2);

app.post('/askQuestion', function (req, res) {
  console.log('this is id', req.body.id)
  connection.query('SELECT * FROM doctor WHERE did="'+req.body.id+'"', function (error, results, fields) {
    if(error) {
      console.log(error)
    }
    if(results) {
      console.log('this is results', results)
      if (ses) {
        res.render('askQuestion.ejs', { title: 'Doctor Listing'  , isLoggedIn: true, doc: results[0]});
      } else {
        res.render('index.ejs', { title: 'Doctor Listing', isLoggedIn: false   });
      }
    }
  });

});

app.post('/generateQuestion', function (req, res) {
  const data = req.body.data;
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

app.post('/updatedoctor',function(req,res){
  if(ses) {
    let data = req.body;
    connection.query("UPDATE `doctor` SET `username`='"+data.name+"',`education`='"+data.education+"',`experience`='"+data.experience+"',`currentwork`='"+data.current+"',`treatments`='"+data.treatments+"',`email`='"+data.email+"',`contact`='"+data.contact+"' WHERE did='"+ses.id+"'" ,function(error, results,feilds){
      if(error) {
        console.log(error)
        res.end('error');
      }
      else {
        res.end('done');
      }
    })
  }
});

app.post('/addfeed',function(req,res){
    let data = req.body;
    console.log(data,'bye bye')
    connection.query("INSERT INTO `feedback`(`name`, `email`, `contact`, `feed`) VALUES ('"+ data.name+"','"+ data.email+"','"+ data.contact+"','"+ data.feed+"')" ,function(error, results,feilds){
      if(error) {
        console.log(error)
        res.end('error');
      }
      else {
        res.end('done');
      }
    })
});

//--------------paypal----------------//

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ATzEjay0F0Wts8GDPvYLuCNHaY5lQRSFLl6CeBNaHUks7UlvJTXHxcEbC_v_3VO4GSi4AshfpP5bXkVz',
    'client_secret': 'EORyvQnrK1RZ_BHWi2siVBqBav5cDVz0OLTYaG7KcJWeSGhW7Q_Re2T6LHwWsTslal0VeTExkqADANQg'
});


app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:9003/success",
        "cancel_url": "http://localhost:9003/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Helath Now Premium Account",
                "sku": "001",
                "price": "65.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "65.00"
        },
        "description": "Helath Now Premium Account"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "65.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        connection.query("UPDATE `users` SET `premium` = '"+1+"' WHERE `uid` = '"+ses.id+"' ", function(error, results, fields){
          if(error) {
            res.end('error');
          }
          else {
            res.redirect('/');
          }
        });

    }
});
});

app.get('/cancel', (req, res) => res.send('Cancelled'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
