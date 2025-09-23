# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations, mobile responsiveness, and interactive elements.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Functional contact form, navigation, and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads

## 📁 Project Structure

```
Personal-Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/FriendlyShadowM/Personal-Website.git
   cd Personal-Website
   ```

2. **Open locally**
   - Simply open `index.html` in your web browser, or
   - Use a local server for development:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

3. **Customize the content**
   - Edit `index.html` to update your personal information
   - Modify `styles.css` to change colors, fonts, or layout
   - Update `script.js` to add new functionality

## ✏️ Customization Guide

### Personal Information
Update the following sections in `index.html`:

1. **Header & Title**: Change "Your Name" to your actual name
2. **About Section**: Update the description and skills
3. **Projects**: Replace with your actual projects
4. **Contact Links**: Update email, LinkedIn, GitHub, and social media links

### Design Customization
In `styles.css`, you can modify:

- **Colors**: Update the CSS custom properties for brand colors
- **Fonts**: Change the Google Fonts import and font-family properties
- **Layout**: Adjust grid layouts, spacing, and component sizes

### Adding New Sections
To add new sections:

1. Add the HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed
4. Add any interactive functionality in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Typography (Inter font family)

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Success/error messaging
- Form reset after submission
- Email format validation

Note: For a fully functional contact form, you'll need to implement server-side handling or use a service like Formspree, Netlify Forms, or EmailJS.

## 🌐 Deployment

### GitHub Pages (Automated via GitHub Actions)
This repo now includes a workflow (`.github/workflows/deploy.yml`) that automatically publishes `main` to GitHub Pages.

Steps:
1. Commit & push your changes to `main`.
2. In GitHub, go to: Settings → Pages.
3. Under "Build and deployment" set:
   - Source: GitHub Actions
4. Wait for the Actions tab to show the "Deploy to GitHub Pages" workflow success.
5. Your site will be available at: `https://<your-username>.github.io/<repository-name>/`.

Notes:
- A `.nojekyll` file is included to ensure assets in folders starting with underscores are served.
- Custom domain? Add a `CNAME` file at the repo root with your domain (e.g. `example.com`).

### Manual (Alternative Simple Method)
If you prefer the classic approach:

```
git checkout --orphan gh-pages
git reset
git add index.html styles.css script.js .nojekyll
git commit -m "Publish"
git push origin gh-pages --force
```
Then set Pages Source to branch: `gh-pages`, folder: `/ (root)`.

### Netlify
1. Create a new site from Git.
2. Select this repository.
3. Set build command: (leave blank) and publish directory: `/`.
4. Deploy.

### Vercel
1. Import GitHub repo.
2. No build step needed (static). Just deploy.

### Any Static Host
Upload `index.html`, `styles.css`, `script.js`, and supporting files to the document root.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

**Made with ❤️ for the developer community**