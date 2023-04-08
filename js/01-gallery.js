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

    li.classList.add("gallery__item");
    a.classList.add("gallery__link");
    img.classList.add("gallery__image");

    a.setAttribute("href", original);
    img.setAttribute("src", preview);
    img.setAttribute("data-source", original);
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

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );

  instance.show();

  const visible = basicLightbox.visible();
  if (visible) {
    document.addEventListener("keyup", ({ key }) => {
      if (key === "Escape") {
        instance.close();
      }
    });
  }
});

galleryRender();
// console.log(instance);
console.log(galleryItems);
console.log(galleryList);
