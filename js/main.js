window.onload = () => {
  const listTitles = document.getElementsByClassName("list-title");
  const arrows = document.getElementsByClassName("arrow");
  const contents = document.getElementsByClassName("list-content");
  console.log(listTitles);
  console.log(arrows);
  console.log(contents);

  for (let i = 0; i < listTitles.length; i++) {
    listTitles[i].addEventListener("click", (e) => {
      const sibling = e.target.nextElementSibling;
      const parentSibling = e.target.parentElement.nextElementSibling;
      if (sibling.classList.contains("arrow-up")) {
        sibling.classList.remove("arrow-up");
        parentSibling.style.maxHeight = 0;
      } else {
        for (let j = 0; j < listTitles.length; j++) {
          arrows[j].classList.remove("arrow-up");
          contents[j].style.maxHeight = 0;
        }
        sibling.classList.add("arrow-up");
        parentSibling.style.maxHeight = parentSibling.scrollHeight + "px";
      }
    });
  }
}