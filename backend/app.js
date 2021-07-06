const express = require('express');
const path = require('path');
const app = express();
const fs= require('fs');

const port = process.env.port || 8000;

//static files
app.use('/static',express.static("static"));
//encoding
app.use(express.urlencoded())


//pug templtae engine


app.set('view engine','pug')


//views directory
app.set('views',path.join(__dirname,'views'))



//end po int of pug

  app.get('/',(req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../easy.html'));
  });


  app.get('/resources',(req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../resources.html'));
  });


app.get('/team',(req, res)=> {
  res.status(200).sendFile(path.join(__dirname, '../team.html'));
});

app.get('/blogs',(req, res)=> {
  res.status(200).sendFile(path.join(__dirname, '../blogs.html'));
});




app.get("/contact",(req,res)=>{
  res.status(200).render('contact')
});

/*app.post("/contact",(req,res)=>{
  First_name =req.body.first_name
  Last_name = req.body.last_name
  Full_name = `${First_name}  ${Last_name}`
  Email_adress = req.body.email
  reaction  = req.body.comments
  var responseOfTheUser = `The name of the user is: ${Full_name} \n User's Email address: ${Email_adress}\n user's response: ${reaction} `
  fs.writeFileSync("Response_of_the_user.txt",responseOfTheUser)
  res.status(200).render('contact')

});*/

app.get("/about",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../blogs.html'));
})


//all books
app.get("/resources/all_books",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../All_books.html'));
})

//coding books

app.get("/resources/coding_books",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../coding.html'));
})
// science books

app.get("/resources/science_book",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../science_book.html'));
})
//business book
app.get("/resources/business_book",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../blogs.html'));
})
//self motivation book
app.get("/resources/selfmotivation_books",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../blogs.html'));
})
  
//all_courses 

app.get("/resources/all_courses",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../All_courses.html'));
})

// python coures
app.get("/resources/python_courses",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../blogs.html'));
})

//we courses
app.get("/resources/web_courses",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname, '../blogs.html'));
})


//server
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
// files download system!
//an_introduction_to_programming_with_bash
app.get('/an_introduction_to_programming_with_bash', function(req, res){
res.download(path.join(__dirname, './static/all books/An_introduction_to_programming_with_bash.pdf'),'An Introduction To Programming With Bash.pdf')
});
//answering_those_who_altered_the_religion_of_jesus_christ
app.get('/answering_those_who_altered_the_religion_of_jesus_christ', function(req, res){
res.download(path.join(__dirname, './static/all books/Answering Those Who Altered The Religion Of Jesus Christ.pdf'),'Answering Those Who Altered The Religion Of Jesus Christ.pdf')
});
//apache_sqoop_cookbook
app.get('/apache_sqoop_cookbook', function(req, res){
res.download(path.join(__dirname, './static/all books/Apache Sqoop Cookbook.pdf'),'Apache Sqooop Cookbook.pdf')
});
//basic_english_grammar

app.get('/basic_english_grammer', function(req, res){
res.download(path.join(__dirname, './static/all books/Basic English Grammar.pdf'),'Basic English Grammar.pdf')
});
//begining with node.js

app.get('/begining_with_node.js', function(req, res){
res.download(path.join(__dirname, './static/all books/Beginning Nodejs.pdf'),'Beginning Nodejs.pdf')
});

//c programiing hsc cracker
app.get('/c_programming_hsc_cracker', function(req, res){
res.download(path.join(__dirname, './static/all books/C Programming(HSC Cracker).pdf'),'C Programming(HSC Cracker).pdf')
});
//c programiing hsc cracker 2

app.get('/c_programming_hsc_cracker_2', function(req, res){
res.download(path.join(__dirname, './static/all books/C Programming(HSC Cracker)2.pdf'),'C Programming(HSC Cracker)2.pdf')
});

//c programming loops

app.get('/c_programming_loops', function(req, res){
res.download(path.join(__dirname, './static/all books/C Programming(loops).pdf'),'C Programming(Loops).pdf')
});

//physics chapter 4


app.get('/physics_chapter_4', function(req, res){
res.download(path.join(__dirname, './static/all books/Chapter 4 (Work, Power & Energy) .pdf'),'Chapter 4 (Work, Power & Energy) .pdf')
});

//physics chapter 5
app.get('/physics_chapter_5', function(req, res){
res.download(path.join(__dirname, './static/all books/Chapter-5.pdf'),'PHYSICS 1ST PAPER মহাকষ􀆳 ও অিভকষ.pdf')
});
//computer programming by subin
app.get('/computer_programming_subin', function(req, res){
res.download(path.join(__dirname, './static/all books/Computer Programming By Tamim Shariar Shubin.pdf'),'Computer Programming By Tamim Shariar Shubin.pdf')
});
//css begineer guide
app.get('/css_beginner_guide', function(req, res){
res.download(path.join(__dirname, './static/all books/CSS.pdf'),'CSS Beginner Guide.pdf')
});
//rest api with node js
app.get('/rest_api_nodejs', function(req, res){
res.download(path.join(__dirname, './static/all books/Developing Rest Api with Nodejs.pdf'),'Developing Rest Api with Nodejs.pdf')
});

//dynamics in phycics
app.get('/dynamics', function(req, res){
res.download(path.join(__dirname, './static/all books/Dynamics(গতিবিদ্যা).pdf'),'Dynamics.pdf')
});

//earn money bt freelancing 10 min school

app.get('/earn_money_10min', function(req, res){
res.download(path.join(__dirname, './static/all books/Earn Money by Freelancing(Bangla).pdf'),'Earn Money by Freelancing(Bangla).pdf')
});
//hacking and security
app.get('/hacking_security', function(req, res){
res.download(path.join(__dirname, './static/all books/Hacking & Security (Bangla).pdf'),'Hacking & Security (Bangla).pdf')
});
//html beginner guide

app.get('/html_beginner', function(req, res){
res.download(path.join(__dirname, './static/all books/HTML.pdf'),'HTML Beginner Guide.pdf')
});


//hunt python 

app.get('/hunt_python', function(req, res){
res.download(path.join(__dirname, './static/all books/Hunt Python-Yeasir Arafat Ratul.pdf'),'Hunt Python-Yeasir Arafat Ratul.pdf')
});

//javascript beginner
app.get('/javascript_beginner_guide', function(req, res){
res.download(path.join(__dirname, './static/all books/JAVASCRIPT.pdf'),'JAVASCRIPT.pdf')
});

//ml cheatsheet

app.get('/ml_cheatsheet', function(req, res){
res.download(path.join(__dirname, './static/all books/Machine Learning Cheatsheet.pdf'),'Machine Learning Cheatsheet.pdf')
});

//mastering python data analysis

app.get('/mastering_python', function(req, res){
res.download(path.join(__dirname, './static/all books/Mastering Python Data Analysis.pdf'),'Mastering Python Data Analysis.pdf')
});

// ml cheatsheet2

app.get('/ml_cheatsheet_two', function(req, res){
res.download(path.join(__dirname, './static/all books/MLCheatSeet.pdf'),'MLCheatSeet.pdf')
});


// mysql beginner guide

app.get('/mysql_beginner_guide', function(req, res){
res.download(path.join(__dirname, './static/all books/MYSQL.pdf'),'MYSQL Beginner Guide.pdf')
});

//linear algebra notesw

app.get('/linear_algebra_notes', function(req, res){
res.download(path.join(__dirname, './static/all books/notes of linear algebra.pdf'),'Linear Algebra Notes.pdf')
});


//organic chemistry notes

app.get('/organic_chemistry_notes', function(req, res){
res.download(path.join(__dirname, './static/all books/organic chemistry.pdf'),'Organic Chemistry Notes.pdf')
});

//php cookbook
app.get('/php_cookbook', function(req, res){
res.download(path.join(__dirname, './static/all books/PHPCookBook.pdf'),'PHP Cookbook.pdf')
});


//physics beat and intensity
 
 app.get('/physics_beat_intensity', function(req, res){
res.download(path.join(__dirname, './static/all books/Physics Beat And Intensity.pdf'),'Physics Beat And Intensity.pdf')
});

// statistics notes

 app.get('/statistics_note', function(req, res){
res.download(path.join(__dirname, './static/all books/Statistics.pdf'),'Statistics Notes.pdf')
});
 


 // think like a monk
 app.get('/think_like_a_monk', function(req, res){
res.download(path.join(__dirname, './static/all books/Think Like a Monk - Joy Shetty.pdf'),'Think Like a Monk - Jay Shetty.pdf')
});


//web roadmap
app.get('/web_roadmap', function(req, res){
res.download(path.join(__dirname, './static/all books/Web_Development_Roadmap_Programmingworld_dev.pdf'),'Web_Development_Roadmap_Programmingworld_dev.pdf')
});






































































