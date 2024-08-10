const quoteSpace = document.getElementById("quote");
const authorSpace = document.getElementById("author");
const categorySpace = document.getElementById("category");
const getButton = document.getElementById("get");

getButton.onclick = async function () {
  quoteSpace.textContent = authorSpace.textContent = categorySpace.textContent = "";
  getButton.setAttribute("aria-busy", true);
  try {
    var content = (await (await fetch("http://localhost:3002/quote")).json()).data;
    [
      quoteSpace.textContent,
      authorSpace.textContent,
      categorySpace.textContent,
    ] = [
      content.quote,
      content.author,
      content.category
    ];

  } catch (error) {
    console.error(error.message);
  }

  getButton.setAttribute("aria-busy", false);
};
