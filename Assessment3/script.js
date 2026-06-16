/*
This JavaScript supports the hover interaction.

When the user hovers over an album button, the preview panel updates.
This makes the interaction feel responsive because the page immediately
shows the result of the user's action.

The code changes four things:
1. Album title
2. Album genre
3. Album description
4. Cover artwork gradient

The main action is still hover, not click. Click is only used on the
preview button to show a simple playing state.

This keeps the prototype focused on the assignment requirement:
one fundamental browser interaction.
*/

const albums = document.querySelectorAll(".album");
const player = document.querySelector("#music-player");

const title = document.querySelector("#album-title");
const genre = document.querySelector("#album-genre");
const desc = document.querySelector("#album-desc");
const cover = document.querySelector(".cover-art");
const previewButton = document.querySelector(".preview-button");

const gradients = [
  "radial-gradient(circle at top left, #ff0000, #8c0000, #101018)",
  "radial-gradient(circle at bottom right, #583405, #078800, #17111f)",
  "radial-gradient(circle at top left, #00861f, #7f3d00, #8a8a8a)",
  "radial-gradient(circle at top right, #adadad, #000ea5, #000000)",
  "radial-gradient(circle at bottom left, #1f1f1f, #3e3e3e, #111827)",
  "radial-gradient(circle at bottom right, #000000, #352a00, #aa8e00)",
];

albums.forEach(function (album, index) {
  album.addEventListener("mouseenter", function () {
    albums.forEach(function (item) {
      item.classList.remove("active");
    });

    album.classList.add("active");

    title.textContent = album.dataset.title;
    genre.textContent = album.dataset.genre;
    desc.textContent = album.dataset.desc;
    cover.style.background = gradients[index];

    player.pause();
    player.currentTime = 0;
    player.src = album.dataset.audio;

    player.play().catch(function (error) {
      console.log("Browser blocked autoplay:", error);
    });
  });
});
