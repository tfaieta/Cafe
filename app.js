var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/** 
 * BEGIN API WORK
*/
const pdf2html = require('pdf2html')
var Epub = require("epub-gen")
var htmlArray = []; 
const mercury = require('mercury-parser')('EapLnMDdyLoEBxWRYcCQOxItNxTwtEJj8I9XuN9G');
var url = false
var localHTML = []

/**
 * LOGIC BEGIN
 */
pdf2html.pages('https://www.adobe.com/be_en/active-use/pdf/Alice_in_Wonderland.pdf', (err, htmlPages) => {
  if (err) {
    console.error('Conversion error: ' + err)
  } else {
    htmlArray = htmlPages
    console.log('\t', htmlArray.length)

    /**
     *  CALLS MERCURY API
     **/
    if (url == true) {
      mercury.parse('https://www.cs.cmu.edu/~rgs/alice-table.html').then(response =>
        local = response,
        ).catch(err => {
          console.log('\tError: ', err);
        })
      }
    }
    
    var option = {
      title: "Alice in Wonderland", // *Required, title of the book.
      author: "Lewis Carroll", // *Required, name of the author.
      publisher: "Macmillan & Co.", // optional
      cover: "https://thebookwars.files.wordpress.com/2014/10/alice-1.jpg", // Url or File path, both ok.
      content: [
          {
              title: "About the author", // Optional
              author: "John Doe", // Optional
              data: "<h2>Charles Lutwidge Dodgson</h2>"
              +"<div lang=\"en\">Better known by the pen name Lewis Carroll...</div>" // pass html string
          },
      ]
    };

    // new Epub(option, "./client/src/components/new.epub");
})
  
module.exports = app;
  
  
  /**
   *  THE FOLLOWING IS THROW AWAY CODE
   */
  
  // const mercury = require('mercury-parser')('EapLnMDdyLoEBxWRYcCQOxItNxTwtEJj8I9XuN9G');
  // const EpubCreator = require('epub-creator')
  // var option = {
    //   title: "Rosen Discrete Math", // *Required, title of the book.
    //   author: "Rosen", // *Required, name of the author.
//   publisher: "Macmillan & Co.", // optional
//   cover: "http://demo.com/url-to-cover-image.jpg", // Url or File path, both ok.
//   content: [
//         {
//             title: "About the author", // Optional
//             author: "John Doe", // Optional
//             data: "<h2>Charles Lutwidge Dodgson</h2>"
//             +"<div lang=\"en\">Better known by the pen name Lewis Carroll...</div>" // pass html string
//         },
//         {
//             title: "Down the Rabbit Hole",
//             data: "<p>Alice was beginning to get very tired...</p>"
//         },
//     ]
// };

// new Epub(option, "CommunistManifesto.epub");


// Option Two
// pdf2html.pages('CommunistManifesto.pdf', (err, htmlPages) => {
//   if (err) {
//       console.error('Conversion error: ' + err)
//   } else {
//       app.use(htmlPages, (req, res, next) => {
//         // book must have `identifier`, `title` and `updated` properties
//         const book = BookService.get(req.params.book)
      
//         // each part must have `title` and `content` (HTML) properties
//         const parts = book.chapters.map(chapter => ({
//           title: chapter.title,
//           content: chapter.source
//         }))
      
//         // the base path for relative image URLs
//         const resourceRoot = path.join(__dirname, 'uploads')
      
//         const epub = new HTMLEPUB(book, {resourceRoot, stylesRoot})
      
//         // pipe the zip file to the response stream
//         epub.load(parts).then(() => epub.stream(res))
//       })
//   }
// })

// Option 3 
// pdf2html.pages('CommunistManifesto.pdf', (err, htmlPages) => {
//   if (err) {
//       console.error('Conversion error: ' + err)
//   } else {
//     let content = [
//         {
//             tag: "section", name: "frontmatter", "content": [
//             {
//                 tag: "section", name: "titlepage", "content": [
//                 {tag: "html", content: "<h1>My book title Section</h1>     <div class='aut'>Author</div>"},
//                 {
//                     tag: "div",
//                     name: "epigraph",
//                     content: "<span xml:lang=\"la\">\"Nam Sibyllam quidem Cumis ego ipse oculismeis<br />vidi in ampulla pendere, et cum illi pueri dicerent</span>: <br /> "
//                 },
//             ]
//             }
//         ]
//         },
//         {
//             tag: "section", name: "bodymatter", "content": [
//             {tag: "section", id: "ch1", navLabel: "Chapter 1", content: "sono il contenuto del body"},
//             {tag: "section", id: "ch2", navLabel: "Chapter 2", content: "sono il secondo capitolo"}
//         ]
//         }
//     ];
  
//     let epubCreator = new EpubCreator();

//     epubCreator.template("epub3");
//     epubCreator.properties.title = "Communist Manifesto";
//     epubCreator.properties.cover.file = "https://images-na.ssl-images-amazon.com/images/I/51vHCno0a4L._SX330_BO1,204,203,200_.jpg";
//     epubCreator.addSections(content);

//     epubCreator.download("mybook.epub");
//   }
// })