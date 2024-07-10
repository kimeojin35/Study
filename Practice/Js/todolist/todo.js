let todos = [];
let number = 0;

//체크리스트 생성
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#plus");
  const checkboxContainer = document.querySelector("#checkbox");
  const addlist = document.querySelector("#addlist");
  //리스트박스 생성
  function createList() {
    const listElement = document.createElement("div");
    listElement.id = "listbox";
    //리스트박스 생성
    const content = document.createElement("div");
    content.id = "content";
    //체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkicon";
    //내용 생성
    const text = document.createElement("span");
    text.id = "text";
    text.textContent = addlist.value;
    //삭제버튼 생성
    const removeButton = document.createElement("button");
    const image = document.createElement("img");
    image.src = "image/ic_round-close.png";
    removeButton.innerHTML = "";
    removeButton.appendChild(image);
    removeButton.id = "del";
    //삭제버튼 기능, 리스트 수세기
    removeButton.addEventListener("click", (event) => {
      event.currentTarget.parentNode.parentNode.removeChild(
        event.currentTarget.parentNode
      );
      number--;
      document.getElementById("listnum").innerHTML = number;
    });
    //체크시 폰트변환
    checkbox.addEventListener("change", (event) => {
      if (checkbox.checked) {
        text.style.textDecorationLine = "line-through";
      } else {
        text.style.textDecorationLine = "none";
      }
      createtaglist();
    });

    content.appendChild(checkbox);
    content.appendChild(text);
    listElement.appendChild(removeButton);
    listElement.appendChild(content);
    checkboxContainer.appendChild(listElement);

    addlist.value = "";
    //리스트 수세기
    number++;
    document.getElementById("listnum").innerHTML = number;
  }

  function handleEnterKey(event) {
    if (event.key === "Enter" && addlist.value !== "") {
      createList();
      keywordaddbox = "";
    }
  }
  addlist.addEventListener("keyup", handleEnterKey);
  addButton.addEventListener("click", () => {
    if (addlist.value !== "") {
      createList();
    }
  });
});
//태그리스트 만들기
function createtaglist() {
  const todotext = addtag.value;
  if (todotext) {
    // 배열에 투두리스트 아이템 추가
    console.log("추가시킴! : " + todotext);
    // 리스트에 아이템 추가
    const listItem = document.createElement("div");
    listItem.textContent = todotext;
    listItem.classList.add("taglist");
    taglisttextbox.appendChild(listItem);
    addtag.value = "";
    listItem.addEventListener("click", function (event) {
      createaddTag(event);
    });
  }
}
//모달 보이기/숨기기
const open = document.getElementById("addkey");
const modal = document.getElementById("addtagbox");
let content = document.createElement("div");
open.addEventListener("click", function () {
  if (modal.style.display === "none") {
    modal.style.display = "flex";
    content = document.createElement("div");
  } else {
    modal.style.display = "none";
  }
});

const searchIdx = (text) => {
  const child = document.querySelectorAll("#taglisttextbox .taglist");
  for (let i = 0; i < child.length; i++) {
    if (child[i].innerText === text) return i;
  }
  return -1;
};

const addkeywordicon = document.querySelector("#addkeywordicon");
const keyword = document.querySelector("#keyword");
const addtag = document.querySelector("#addtag");
const addlist = document.querySelector("#addlist");
const addtagclose = document.querySelector("#addtagclose");
//키워드 생성
function createTag() {
  const content = document.createElement("div");
  content.classList.add("key");

  const keytext = document.createElement("p");
  keytext.classList.add("keytext");
  keytext.textContent = "#" + addtag.value;

  todos.push(addtag.value);
  console.log(todos);

  const close = document.createElement("button");
  close.classList.add("close");
  close.textContent = "×";

  close.addEventListener("click", (event) => {
    event.currentTarget.parentNode.parentNode.removeChild(
      event.currentTarget.parentNode
    );
    const taglisttextbox = document.querySelector("#taglisttextbox");
    const text =
      event.currentTarget.parentNode.childNodes[0].innerText.slice(1);
    const idx = searchIdx(text);
    todos = todos.filter((v) => v !== text);
    const delNode = document.querySelectorAll("#taglisttextbox .taglist")[idx];
    taglisttextbox.removeChild(delNode);
    console.log(delNode);
  });

  // keytext.addEventListener('click', (event) => {
  //   addlist.value = keytext.innerText.slice(1);
  // });

  keyword.appendChild(content);
  content.appendChild(keytext);
  content.appendChild(close);
}

function handleEnterKey(event) {
  if (event.key === "Enter" && addtag.value !== "") {
    createTag();
    createtaglist();
    modal.style.display = "none";
  }
}
addkeywordicon.addEventListener("click", function () {
  if (addtag.value !== "") {
    createTag();
    createtaglist();
    modal.style.display = "none";
  }
});
addtagclose.addEventListener("click", function () {
  modal.style.display = "none";
});
addtag.addEventListener("keyup", handleEnterKey);

//태그리스트 열기, 닫기
const plus = document.getElementById("plus");
const taglistbox = document.getElementById("taglistbox");
const taglistclose = document.getElementById("taglistclose");
//태그리스트 열기, 닫기
plus.addEventListener("click", function () {
  if (taglistbox.style.display === "none") {
    taglistbox.style.display = "flex";
  } else {
    taglistbox.style.display = "none";
  }
});
//닫기버튼 기능
taglistclose.addEventListener("click", function () {
  taglistbox.style.display = "none";
});

//으아아아악
const taglisttextbox = document.querySelector("#taglisttextbox");
const keywordaddbox = document.querySelector("#keywordaddbox");
const clickedItems = new Set();

function createaddTag(event) {
  const clickedListItem = event.currentTarget;

  // 이미 클릭된 항목이면 복사 안하기
  if (clickedItems.has(clickedListItem)) {
    return;
  }

  const key = document.createElement("div");
  key.classList.add("key");

  const keytext = document.createElement("p");
  keytext.classList.add("keytext");

  const close = document.createElement("button");
  close.classList.add("close");
  close.textContent = "×";
  close.addEventListener("click", (event) => {
    const clickedKey = event.currentTarget.parentNode;
    keywordaddbox.removeChild(clickedKey);
    clickedItems.delete(clickedListItem);
  });

  keytext.textContent = "#" + clickedListItem.textContent;

  keywordaddbox.appendChild(key);
  key.appendChild(keytext);
  key.appendChild(close);

  clickedItems.add(clickedListItem);
}
const taglist = document.querySelectorAll(".taglist");
taglist.forEach((item) => {
  item.addEventListener("click", createaddTag);
});
const addTagButton = document.querySelector("#addtag");
addTagButton.addEventListener("click", () => {
  const input = document.querySelector("#addtag");
  const tagName = input.value.trim();
  if (tagName !== "") {
    const newTag = document.createElement("div");
    newTag.classList.add("taglist");
    newTag.textContent = tagName;
    taglisttextbox.appendChild(newTag);
    input.value = "";
    newTag.addEventListener("click", createaddTag);
  }
});

//전체 태그리스트 보이기, 숨기기
function tagHide() {
  $(document).ready(function () {
    $("#all").click(function () {
      $("#checkbox").slideToggle(400);
    });
  });
}

// 모두 지우기 창 띄우기
const delall = document.querySelector(".delall");
const screen = document.querySelector("#screen");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const checkbox = document.querySelector("#checkbox");

delall.addEventListener("click", () => {
  screen.style.display = "flex";
});

no.addEventListener("click", () => {
  screen.style.display = "none";
});

yes.addEventListener("click", (event) => {
  screen.style.display = "none";
  checkbox.innerHTML = "";
  number = 0;
  document.getElementById("listnum").innerHTML = number;
});

// 모두 지우기
// const delall = document.querySelector('#delall');
// const checkboxContainer = document.querySelector('#checkbox');

// delall.addEventListener('click', function() {
//   deleteAllLists();
// });

// const deleteAllLists = () => {
//   checkboxContainer.innerHTML = '';
// };

//태그 복사

//태그 리스트 보이기
// addButton.addEventListener('click', function () {
//   todos.push();
// });

//색변경
// const blue = document.getElementById('color1');
// const black = document.getElementById('color2');
// const white = document.getElementById('color3');
// var isClicked = false;
// document.getElementById('color1').addEventListener('click', function() {
//   blue.style.outlineColor = "#e2e2e2";
//   content.style.backgroundColor = "#0075ff";
//   content.style.border = "none";
//   content.style.color = "#fff";
//   closebutton.style.color = "#fff";
//   if (isClicked) {
//     document.getElementById('color2').style.outlineColor = 'transparent';
//     isClicked = false;
//   } else {
//     document.getElementById('color3').style.outlineColor = 'transparent';
//     isClicked = true;
//   }

// document.getElementById('color2').addEventListener('click', function() {
//   black.style.outlineColor = "#e2e2e2";
//   content.style.backgroundColor = "#4d4d4d";
//   content.style.border = "none";
//   content.style.color = "#fff";
//   closebutton.style.color = "#fff";
//   if (isClicked) {
//     document.getElementById('color1').style.outlineColor = 'transparent';
//     isClicked = false;
//   } else {
//     document.getElementById('color3').style.outlineColor = 'transparent';
//     isClicked = true;
//   }
// });
// document.getElementById('color3').addEventListener('click', function() {
//   white.style.outlineColor = "#e2e2e2";
//   content.style.backgroundColor = "#fff";
//   content.style.border = "2px solid #4d4d4d";
//   content.style.color = "#4d4d4d";
//   closebutton.style.color = "#4d4d4d";
//   if (isClicked) {
//     document.getElementById('color1').style.outlineColor = 'transparent';
//     isClicked = false;
//   } else {
//     document.getElementById('color2').style.outlineColor = 'transparent';
//     isClicked = true;
//   }
// });
