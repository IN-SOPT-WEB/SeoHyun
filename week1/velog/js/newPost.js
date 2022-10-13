function createTagButton() {
  //버튼 생성
  const newTagButton = document.createElement("button");
  newTagButton.innerText = tagInput.value;
  newTagButton.classList.add("tagButton");

  //버튼 클릭 시 삭제 기능
  newTagButton.addEventListener("click", () => {
    newTagButton.remove();
  });

  tagForm.before(newTagButton);

  tagInput.value = "";
}

function newPost() {
  const tagForm = document.querySelector("#tagForm");
  const tagInput = document.querySelector("#tagInput");

  tagForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const tagButton = document.querySelectorAll(".tagButton");
    let count = 0;
    tagButton.forEach((item) => {
      if (tagInput.value === item.innerText) {
        count++;
      }
    });
    if (count == 0) {
      createTagButton();
    } else {
      count--;
      tagInput.value = "";
    }
  });
}

newPost();
