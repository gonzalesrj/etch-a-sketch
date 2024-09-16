const container = document.querySelector(".container");

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

for (i = 0; i < 256; i++) {

    container.appendChild(gridItem.cloneNode(true));

}

