# Blog
# ✨ My Awesome Blog

A full-stack blog application built with Node.js, Express, and EJS templating engine. Create, read, update, and delete blog posts with a beautiful, responsive interface.

## 🚀 Features

- **Create Posts**: Write and publish new blog posts with title and content
- **Read Posts**: View all published blog posts on the home page
- **Update Posts**: Edit existing blog posts
- **Delete Posts**: Remove unwanted blog posts
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Vibrant UI**: Modern gradient styling with smooth animations
- **Real-time Updates**: Posts are displayed immediately after creation/modification

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS (Embedded JavaScript)
- **Middleware**: body-parser for form data parsing
- **Styling**: Custom CSS with gradients and responsive design

## 📋 Prerequisites

Before running this project, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🔧 Installation & Setup

1. **Clone or download the repository**

2. **Navigate to the project directory**
   ```bash
   cd Blog
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Open your browser and visit**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
Blog/
├── index.js                 # Main server file
├── package.json            # Project dependencies
├── .gitignore              # Git ignore file
├── public/
│   └── styles/
│       └── main.css        # Application styles
└── views/
    ├── home.ejs            # Home page (displays all posts)
    ├── createPost.ejs      # Create new post form
    ├── updatePost.ejs      # Update existing post form
    └── partials/
        ├── header.ejs      # Reusable header component
        └── footer.ejs      # Reusable footer component
```

## 🎯 How to Use

### Creating a Post
1. Click the "Create a New Blog Post" button on the home page
2. Fill in the title and content
3. Click "Create Blog Post"
4. You'll be redirected to the home page with your new post

### Updating a Post
1. Click the "Update Post" button on any blog post
2. Modify the title and/or content
3. Click "Update Blog Post"
4. The post will be updated and you'll return to the home page

### Deleting a Post
1. Click the "Delete Post" button on any blog post
2. The post will be immediately removed

## 🎨 Styling Features

- **Gradient Backgrounds**: Purple and pink gradients throughout
- **Card Design**: Blog posts displayed in elegant white cards
- **Hover Effects**: Interactive animations on buttons and cards
- **Responsive Layout**: Adapts to all screen sizes
- **Smooth Transitions**: CSS animations for better UX

## 📝 API Routes

| Method | Route          | Description                    |
|--------|----------------|--------------------------------|
| GET    | `/`            | Display all blog posts         |
| GET    | `/createPost`  | Show create post form          |
| POST   | `/createPost`  | Submit new blog post           |
| GET    | `/updatePost`  | Show update post form          |
| POST   | `/updatePost`  | Submit updated blog post       |
| POST   | `/deletePost`  | Delete a blog post             |

## ⚠️ Important Notes

- Posts are stored in-memory (in an array), so data will be lost when the server restarts
- For production use, consider implementing a database (MongoDB, PostgreSQL, etc.)
- Post IDs are based on array indices, which can shift after deletions

## 🔮 Future Enhancements

- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement user authentication
- [ ] Add timestamps to posts
- [ ] Enable rich text editing
- [ ] Add search functionality
- [ ] Implement pagination for many posts
- [ ] Add categories/tags
- [ ] Enable image uploads

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as part of the Web Development Bootcamp course.

---

**Happy Blogging! 📝✨**