import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

function galleryRender() {
  // Add by Array
  let galleryArrayItems = [];
  // Add by HTML
  // let galleryHtmlItems = "";

  galleryItems.forEach((e, idx) => {
    const { description, original, preview } = galleryItems[idx];

    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.classList.add("gallery__item");
    img.classList.add("gallery__image");

    a.setAttribute("href", original);
    img.setAttribute("src", preview);
    img.setAttribute("alt", description);

    li.append(a);
    a.append(img);

    // Add by Array
    galleryArrayItems.push(li);
    // Add by HTML
    // galleryHtmlItems += li.outerHTML;
  });

  // Add by Array
  galleryList.append(...galleryArrayItems);
  // Add by HTML
  // galleryList.insertAdjacentHTML("beforeend", galleryHtmlItems);
}
galleryRender();

var lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "outside",
  captionDelay: 250,
  disableScroll: true,
});

function desktopScrollLockOff() {
  let desktopBreakpoint = innerWidth > 1015 && window.scrollY === 0;

  if (desktopBreakpoint) {
    lightbox.options.disableScroll = false;
    document.body.style.paddingRight = 0;
  }
  lightbox.options.disableScroll = true;
}

function openLightbox(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  desktopScrollLockOff();

  lightbox.open(event.target);
}

// galleryList.addEventListener("click", desktopScrollLockOff);
galleryList.addEventListener("click", openLightbox);

console.log(galleryItems);
console.log(galleryList);
