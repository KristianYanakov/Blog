import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const footerYear = new Date().getFullYear();
app.get('/', (req, res) => {

  //res.render('index.ejs', { c: footerYear });
});




app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});


