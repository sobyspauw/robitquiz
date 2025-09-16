# RobitQuiz Images Directory

This directory contains all custom images for the RobitQuiz application.

## Directory Structure

### /icons/
Contains UI icons and interface elements:
- `star.png` - Star icon for the currency system (replaces 💰 emoji)
- `diamond.png` - Diamond icon for premium currency 
- `settings.png` - Settings gear icon
- `play.png` - Play button icon
- `pause.png` - Pause button icon
- `50-50.png` - 50/50 power-up icon
- `skip.png` - Skip question power-up icon

### /backgrounds/
Contains background images for different screens:
- `home-bg.jpg` - Main menu background
- `quiz-bg.jpg` - Quiz screen background
- `shop-bg.jpg` - Shop screen background

### /subjects/
Contains subject-specific imagery:
- `animals.jpg` - Animals subject thumbnail
- `science.jpg` - Science subject thumbnail
- `history.jpg` - History subject thumbnail
- (Additional subject thumbnails as needed)

### /tutorial/
Contains tutorial system graphics:
- `arrow-pointer.png` - Pointer arrow for highlighting elements
- `highlight-overlay.png` - Overlay for highlighting UI elements
- `tutorial-bg.png` - Background for tutorial strip

## Image Specifications

### Icons
- Format: PNG with transparency
- Size: 48x48px to 64x64px for optimal quality
- Style: Consistent with the app's modern, colorful design

### Backgrounds
- Format: JPG or PNG
- Size: 1920x1080px (or appropriate aspect ratio)
- Compression: Optimized for web without losing quality

### Subject Thumbnails
- Format: JPG or PNG
- Size: 400x300px
- Style: Colorful, engaging imagery that represents the subject

## Usage

To use custom images in the HTML/CSS:

```html
<img src="images/icons/star.png" alt="Star" class="currency-icon">
```

```css
.home-screen {
    background-image: url('images/backgrounds/home-bg.jpg');
}
```

## Notes

- All images should be optimized for web use
- Maintain consistent visual style across all imagery
- Consider creating @2x versions for high-DPI displays
- Use appropriate alt text for accessibility