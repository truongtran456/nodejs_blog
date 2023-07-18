const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const { extname } = require("path");
const methodOverride = require('method-override'); 

const route = require("./routes");
const db = require('./config/db');

//Connect to db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public"))); // ảnh trong public

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
// app.use(morgan('combined'))

//tempalte engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers:{
        sum:(a,b) => a+b, //cho phep thuc hien phep + trong view
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources','views'));

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


