# Create README.md file for GitHub deployment
readme_content = '''# Atelier by Minnakshi - Luxury Soft Skills Training Website

A sophisticated, luxury-themed website for Atelier by Minnakshi, offering premium soft skills training and coaching services.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices
- **Luxury Animations**: Smooth GSAP animations and AOS effects
- **Modern Tech Stack**: Built with Tailwind CSS and vanilla JavaScript
- **Interactive Gallery**: Photo lightbox with navigation
- **Contact Forms**: Integrated contact and subscription forms
- **Professional UI**: Elegant design with luxury color scheme

## 🚀 Technologies Used

- HTML5
- CSS3 (via Tailwind CSS)
- JavaScript
- GSAP (GreenSock Animation Platform)
- AOS (Animate On Scroll)
- Feather Icons
- Vanta.js (3D Globe effect)
- Three.js

## 📋 Deployment Instructions

### GitHub Pages Deployment

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/atelier-by-minnakshi.git
   cd atelier-by-minnakshi
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/atelier-by-minnakshi`

### Netlify Deployment

1. **Drag and Drop Method**
   - Visit [netlify.com](https://netlify.com)
   - Drag the project folder to the deploy area
   - Your site will be live instantly with a random URL

2. **Git Integration**
   - Connect your GitHub repository to Netlify
   - Set build command: `# (leave empty)`
   - Set publish directory: `./`
   - Deploy automatically on every push

### Vercel Deployment

1. **Import Project**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from your GitHub repository
   - Deploy with default settings

### Custom Domain Setup

After deployment, you can add a custom domain:
- Add a `CNAME` file with your domain name
- Configure DNS settings with your domain provider
- Update GitHub Pages/Netlify/Vercel settings

## 🎨 Customization

### Colors
The website uses a luxury color scheme defined in Tailwind config:
- `rolex`: #004D25 (Primary green)
- `rolexGold`: #B38B59 (Accent gold)
- `rolexCream`: #F8F5F0 (Light background)
- `rolexDark`: #002E1C (Dark green)

### Images
Images are currently hosted on external CDN. For production:
1. Download all images from the current URLs
2. Place them in an `images/` folder
3. Update all image paths in `index.html`

### Content
All content can be edited directly in the HTML file:
- Update text content in the respective sections
- Modify contact information
- Add or remove service offerings
- Update social media links

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Local Development

To run locally:
1. Clone the repository
2. Open `index.html` in a web browser
3. For live reload, use a local server like:
   ```bash
   python -m http.server 8000
   # or
   npx live-server
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email Atelierbyminnakshi@gmail.com or contact through the website form.

## 🙏 Acknowledgments

- Design inspiration from luxury brand websites
- GSAP for smooth animations
- Tailwind CSS for rapid styling
- All the open-source libraries used

---

Made with ❤️ for Atelier by Minnakshi
'''

# Save the README file
with open('README.md', 'w', encoding='utf-8') as f:
    f.write(readme_content)

print("✅ README.md file created successfully!")