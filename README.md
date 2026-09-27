# Aurelia — Fine Gold & Haute Joaillerie Static Website

Welcome to the **Aurelia** static website codebase. This website is built using pure HTML, CSS, and vanilla JavaScript without any dependencies, build tools, or frameworks. It features a bilingual experience (English LTR and Arabic RTL) and a hero background video.

---

## 📁 File Structure

```text
aurelia-website/
├── index.html           # Main semantic HTML file
├── css/
│   └── style.css        # Core stylesheet (Design tokens, layout, typography, LTR/RTL)
├── js/
│   └── script.js        # JavaScript controller & bilingual translation dictionary
├── assets/              # Media files directory
│   ├── hero-video.mp4   # Hero background video (MP4 format)
│   ├── hero-poster.jpg  # Hero video poster / image fallback
│   ├── rings.jpg        # Category image: Rings & Bands
│   ├── necklaces.jpg    # Category image: Necklaces & Chains
│   ├── bracelets.jpg    # Category image: Bracelets & Bangles
│   ├── earrings.jpg     # Category image: Earrings & Drops
│   └── bullion.jpg      # Category image: Investment Bullion & Bars
└── README.md            # Client customization guide
```

---

## 🛠️ Customization Guide for the Owner

### 1. Replacing the Hero Background Video
To swap the hero background video:
1. Place your new MP4 video file inside the `/assets/` folder (e.g., named `hero-video.mp4`).
2. If you use a different file name or external link, open `index.html` and update the `<source>` tag under the hero section:
   ```html
   <source src="assets/your-new-video.mp4" type="video/mp4">
   ```
3. Update `assets/hero-poster.jpg` with a still image from your video to serve as the poster frame and low-bandwidth/reduced-motion fallback.

### 2. Updating Collection Images & Category Titles
- Place new JPG or PNG images inside the `/assets/` directory.
- Open `index.html` and update the `src="..."` attribute on the corresponding `<img>` inside the `.collection-card` elements.
- Text strings for titles, descriptions, and badges in both English and Arabic can be modified in `js/script.js` under `translations.en` and `translations.ar`.

### 3. Editing English & Arabic Website Copy
All text content for both languages is stored in a structured translation object inside `js/script.js`:
- To edit English copy, locate `en: { ... }`.
- To edit Arabic copy, locate `ar: { ... }`.

Example:
```javascript
categories: {
  rings: {
    title: "Rings & Bands",
    desc: "Hand-finished solitaire rings...",
    badge: "21K & 18K Gold"
  }
}
```

### 4. Updating Social Media Links
To connect your social media profiles (Instagram, WhatsApp, Facebook, TikTok, Snapchat):
1. Open `index.html`.
2. Locate the `<section class="connect-section">` area.
3. Replace `href="#"` with your official URL or WhatsApp link (e.g. `href="https://wa.me/1234567890"`).

---

## 🌐 Running the Website
Because this is a pure static site:
- Simply double-click `index.html` or open it with any browser.
- No local web server, Node.js, or npm installation is required.

---

## ✒️ Credits
- **Brand**: Aurelia Fine Gold & Haute Joaillerie
- **Design & Web Development**: Mahmoud Web
