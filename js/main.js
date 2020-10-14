window.onload = () => {
  const listTitles = document.getElementsByClassName("list-title");
  const arrows = document.getElementsByClassName("arrow");
  const contents = document.getElementsByClassName("list-content");
  console.log(listTitles);
  console.log(arrows);
  console.log(contents);

  for (let i = 0; i < listTitles.length; i++) {
    listTitles[i].addEventListener("click", (e) => {
      
      if (e.target.nextElementSibling.classList.contains("arrow-up")) {
        e.target.nextElementSibling.classList.remove("arrow-up");
        e.target.parentElement.nextElementSibling.classList.add("hide");
      } else {
        for (let j = 0; j < listTitles.length; j++) {
          arrows[j].classList.remove("arrow-up");
          contents[j].classList.add("hide");
        }
        e.target.nextElementSibling.classList.add("arrow-up");
        e.target.parentElement.nextElementSibling.classList.remove("hide");
      }

    });
  }
}