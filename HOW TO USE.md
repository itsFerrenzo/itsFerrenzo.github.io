
# HOW TO USE

## Adding a New Credit

All Credits located in **main.html**:
```html
<div class="grid-item [single/album]">
  <img src="images/[image name]">
  <div class="overlay">
    <div class="text"><strong>[Artists]<br>[Song Name]</strong><br>[Role(s)]</div>
    <a class="listen-btn" href="[youtube/spotify link]" target="_blank">Listen <i class="fa [fa-spotify][fa-youtube-play]"></i></a>
  </div>
</div>
```

## Changing Fonts

All aesthetic elements located in **main.css**

- Download and install the .tff file.
- Drag the .ttf file into the *fonts* folder of the repo
- Add this code to top of **main.css** file
  
```css
@font-face {
  font-family: '[The name you want to give the font]';
  src: url(fonts/[fontfile.tff]);
}
```

Replace **font-family:** field with the given name of the new font






