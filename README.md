# Auto Direction in GPT Composer

This Chrome Extension automatically detects whether the user is typing in an **RTL (right-to-left)** language like **Hebrew or Arabic** inside the GPT Composer (e.g., ChatGPT input field), and sets the text direction and alignment accordingly.

---

## ✨ Features

- Monitors the `#prompt-textarea` inside `#composer-background`
- Detects **RTL languages**:
  - Hebrew (`\u0590–\u05FF`)
  - Arabic (`\u0600–\u06FF`, `\u0750–\u077F`, `\u08A0–\u08FF`)
- Automatically sets:
  - `direction: rtl` and `text-align: right` for RTL text
  - `direction: ltr` and `text-align: left` otherwise
- Reacts to dynamically rendered UI with MutationObserver
- Lightweight: No permissions, no background scripts
- Can run in Incognito (once enabled manually)
- Designed for use on specific domains only

---

## 🛠 Installation

1. Download or clone this repository
2. Open `chrome://extensions/` in your browser
3. Enable **Developer Mode** (top right toggle)
4. Click **"Load unpacked"** and select this folder
5. (Optional) Click **"Details"** and enable **"Allow in Incognito"**

---

## 🎯 Target Use Case

This extension is built specifically for environments like the ChatGPT web interface where:

```html
<div id="composer-background">
  <div id="prompt-textarea" contenteditable="true"></div>
</div>
```

---

## 📁 Project Structure

```
auto-direction-extension/
├── content.js         # Core logic for detecting and applying direction
├── manifest.json      # Chrome extension manifest (v3)
├── LICENSE            # MIT License
├── README.md          # This file
├── icon16.png         # Toolbar and badge icons
├── icon48.png
├── icon64.png
└── icon128.png
```

---

## 📄 License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.
