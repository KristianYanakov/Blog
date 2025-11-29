import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const footerYear = new Date().getFullYear();
let posts = [];

app.get('/', (req, res) => {
  res.render('home.ejs', { footerYear: footerYear, posts: posts });
});

app.get('/createPost', (req, res) => {
  res.render('createPost.ejs', { footerYear: footerYear });
});

app.post('/createPost', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const post = { title: title, content: content };

  posts.push(post);
  res.redirect('/');
});

app.post('/deletePost', (req, res) => {
  const id = req.body.postId;

  posts.splice(id, 1);
  res.redirect('/');
});

app.get('/updatePost', (req, res) => {
  const id = req.query.postId;
  res.render('updatePost.ejs', { footerYear: footerYear, postId: id });
});

app.post('/updatePost', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const id = req.body.postId;

  posts[id] = { title: title, content: content };
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});


