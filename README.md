# 🔴 INTELLIGENT SEXUALITY | Complete Guide

A complete, professional and responsive sales page for selling the "Intelligent Sexuality" eBook.

---

## 📁 Project Structure

```
/
├── index.html          # Complete HTML page
├── style.css           # CSS3 styles (black, red and white theme)
├── script.js           # JavaScript (menu, accordion, CTA, animations)
├── assets/             # Image folder
│   ├── capa-ebook.png  # eBook cover (YOU MUST ADD)
│   └── README.md       # Instructions for adding cover
```

---

## 🚀 How to Use

### 1. Open the Page

Simply open the `index.html` file in any browser:

- **Windows:** Double-click `index.html`
- **Mac/Linux:** Drag to browser or use `open index.html`
- **Web:** Upload files to a web server

### 2. Add the Cover Image

1. Prepare your eBook cover image (PNG or JPG)
2. Place in the `assets/` folder with the exact name: **`capa-ebook.png`**
3. The image will appear automatically in two sections of the page

See `assets/README.md` for technical specifications.

### 3. Configure Price

Edit the `script.js` file:

```javascript
const ebookPrice = "$47.00";  // CHANGE TO YOUR PRICE
```

The page updates automatically everywhere.

### 4. Configure Checkout URL

Edit the `script.js` file:

```javascript
const checkoutUrl = "#";  // CHANGE TO YOUR PAYMENT LINK
```

Examples:
- Stripe: `https://checkout.stripe.com/...`
- Gumroad: `https://gumroad.com/l/...`
- Your checkout: `https://yourdomain.com/checkout`

All "BUY" buttons will use this link.

---

## 🎨 Visual Identity

### Colors

- **Background:** Deep black (`#0a0a0a`)
- **Red Highlight:** Intense red (`#dc143c`)
- **Dark Red:** Dark red (`#8b0000`)
- **Text:** White (`#ffffff`)
- **Accents:** Light gray (`#f0f0f0`)

### Fonts

- **Titles:** Bebas Neue (impactful, cinematic)
- **Subtitles:** Montserrat (professional, modern)
- **Body:** Inter (readable, clear)

All loaded via Google Fonts (CDN).

### Theme

- Cinematic and sophisticated aesthetics
- High contrast for easy reading
- Subtle gradients
- Discrete red light effects
- Premium and adult design

---

## 📋 Page Sections

1. **HERO** - Impactful initial section with main CTA
2. **PROBLEM** - 4 cards: Myths, Insecurity, Lack of Knowledge, Lack of Communication
3. **EBOOK PRESENTATION** - Mockup + description with resource list
4. **WHAT YOU'LL LEARN** - 10 interactive cards with covered topics
5. **EBOOK CONTENT** - 10 main topics numbered
6. **BENEFITS** - 6 real benefits, without false promises
7. **WHO THIS IS FOR** - 5 personas/use cases
8. **WHAT YOU GET** - 4 offer items (eBook, Digital, Compatibility, Immediacy)
9. **OFFER** - Price section and purchase CTA
10. **FAQ** - 7 expandable questions (accordion)
11. **FINAL CTA** - Impactful final call
12. **FOOTER** - Links and legal information

---

## 📱 Responsiveness

The page is fully responsive and works perfectly on:

- ✅ Desktop (1200px+)
- ✅ Laptop (1024px - 1199px)
- ✅ Tablet (768px - 1023px)
- ✅ Smartphone (360px - 767px)

### Mobile Features

- Automatic hamburger menu
- Large buttons (easy to click)
- Auto-resized text
- Optimized spacing
- No horizontal scrolling

---

## ⚡ JavaScript Features

### Responsive Menu
- Hamburger menu on smaller devices
- Closes when clicking a link
- Closes when clicking outside

### Expandable FAQ
- Click to expand/collapse questions
- Only one question open at a time
- Animated icon (+/✕)

### Smart Mobile CTA
- Appears/disappears when scrolling
- Fixed at bottom on mobile
- Doesn't interfere with navigation

### Smooth Scroll
- Internal links scroll smoothly
- Animations on viewport entry

### URL Management
- Single variable for price: `ebookPrice`
- Single variable for checkout: `checkoutUrl`
- Change once, affects whole page

---

## 🔍 Basic SEO

The page includes:

- ✅ Optimized `<title>`
- ✅ Meta description
- ✅ Open Graph (social media sharing)
- ✅ Viewport meta (responsiveness)
- ✅ UTF-8 charset

---

## 📝 Content

All text is in professional English:

- ✅ Clear and accessible language
- ✅ No vulgarity
- ✅ No false medical promises
- ✅ No fake testimonials
- ✅ No absolute statements
- ✅ Based on conscious education

---

## 🎯 Copywriting & Conversion

### Implemented Techniques

- **Visual hierarchy:** Large titles, highlighted subtitles
- **CTA throughout:** Multiple conversion points
- **Soft urgency:** "Instant Digital Access"
- **Clear benefits:** Focus on what customer gains
- **Personalization:** "This is for you if..." shows relevance

### Buttons

- All CTA buttons point to `checkoutUrl`
- Consistent design throughout
- Hover effects draw attention
- Clear and imperative text

---

## 🛠️ Customization

### Change Colors

Edit `style.css`, at the top:

```css
:root {
    --color-red-intense: #dc143c;  /* Change to your color */
    --color-red-dark: #8b0000;     /* Dark red */
    /* ... other colors */
}
```

### Change Fonts

Edit `style.css`:

```css
--font-display: 'Your Display Font';
--font-heading: 'Your Heading Font';
--font-body: 'Your Body Font';
```

Or remove/change the link in `<head>` of `index.html`.

### Add More Sections

The structure is modular. Just copy a section and adapt the content.

### Remove Sections

You can remove any section without breaking the page (except `<header>` and `<footer>`).

---

## 📞 Payment Integration

### Stripe

```javascript
const checkoutUrl = "https://checkout.stripe.com/pay/cs_live_...";
```

### Gumroad

```javascript
const checkoutUrl = "https://gumroad.com/l/your-ebook-slug";
```

### Your Own System

```javascript
const checkoutUrl = "https://yourdomain.com/checkout?product=intelligent-sexuality";
```

---

## ✅ Final Checklist

Before publishing, verify:

- [ ] Cover image added to `assets/capa-ebook.png`
- [ ] Price configured in `script.js`
- [ ] Checkout URL configured in `script.js`
- [ ] Tested on desktop, tablet and mobile
- [ ] FAQ responding correctly
- [ ] Responsive menu working
- [ ] All buttons pointing to checkout
- [ ] Footer links working
- [ ] No console errors
- [ ] Page loads quickly

---

## 🎬 Performance

The page is optimized for:

- ✅ Fast loading
- ✅ CSS/JS compression
- ✅ Fonts via CDN
- ✅ Optimized images
- ✅ No heavy scripts
- ✅ No unnecessary dependencies

---

## 🐛 Troubleshooting

### "Cover image doesn't appear"
- Make sure it's in `assets/capa-ebook.png`
- Check the extension (.png or .jpg)
- Open browser console (F12) to see errors

### "Buttons don't work"
- Check if `checkoutUrl` is configured in `script.js`
- Don't leave it as `"#"`, set a real link

### "Responsive menu doesn't work"
- Check if `script.js` is loaded
- Open console (F12) to see JavaScript errors

### "Page doesn't respond well on mobile"
- Clear browser cache
- Test in incognito mode
- Check viewport meta in `<head>`

---

## 📄 License

This code is provided for commercial use of the "Intelligent Sexuality" landing page.

You can:
- ✅ Modify the content
- ✅ Use in production
- ✅ Integrate with your payment systems
- ✅ Clone for multiple landing pages

---

## 🎉 Ready!

Your landing page is complete and ready to use. Just:

1. Add the eBook cover
2. Configure price and checkout URL
3. Open `index.html`
4. Start selling!

Good luck! 🚀

---

**Last updated:** 2026-10-06
**Version:** 1.0
**Status:** ✅ Ready for production
