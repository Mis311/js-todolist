let lists = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];


for (i = 0; i <= lists.length - 1; i++) {

  let displayLists = document.createElement('div');
  displayLists.innerHTML = `
    <input type="checkbox" onclick="crossLine();">${lists[i]}
  `
  displayLists.setAttribute("class", "item flex vr-center");
  

  document.getElementsByClassName("list")[0].appendChild(displayLists);
  // this was alright uwu
}


document.getElementById("add-button").addEventListener("click", function() {

  let newList = document.getElementById("type-todo").value;
  let displayLists = document.createElement('div');
  displayLists.innerHTML = `
    <input type="checkbox" onclick="crossLine();">${newList}
  `
  displayLists.setAttribute("class", "item flex vr-center");
  document.getElementsByClassName("list")[0].appendChild(displayLists);

})

// try logging data first after listening to keypresses ^^ yeh
document.getElementById("type-todo").addEventListener("keypress", function(e) {
  console.log(e);
  if (e.key == "Enter") {
    document.getElementById("add-button").click();
  }
  




let toDoList = [];
function addToDo() {
  toDoList.push("todo-text");
  console.log(toDoList);
}

///moving completed tasks to achieved list

function achieveCompleted() {
  for (i = 0; i < document.querySelectorAll(".cross-line").length; i++) {
    document.querySelectorAll(".cross-line")[i].classList.add('hidden');
  }
}
let achievedList = [];
achievedList.push(document.querySelectorAll(".cross-line")); //achieveCompleted?


// document.querySelectorAll("cross-line").forEach(function (input) {
//   input.addEventListener("click", function (event) {
//     console.log(event);
//     document.querySelectorAll(".cross-line").classList.add('hidden');
//   });
// });
// ///test function crossing line


function crossLine() {
  event.path[1].classList.toggle("cross-line");
}




//testing hide function
function hide() {
  body.classList.add("hidden");
}
// document.querySelectorAll("checkbox")[0].addEventListner("click", function() {
//   alert("hi");
  // console.log(event.path);
  // document.querySelectorAll("checkbox").classList.toggle("cross-line");
// });










// // Creates the element
// let hi = document.createElement('p');
// // adds text
// hi.innerHTML = 'Hello human!';
// // puts it on screen
// document.getElementById("list").appendChild(hi);
