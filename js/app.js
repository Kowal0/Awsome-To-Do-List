document.addEventListener("DOMContentLoaded", function() {

var list = document.querySelector(".list ul");
var showForm = document.querySelector(".form-button button");
var submit = document.querySelector("form input[type='submit']");
var filtersDone = document.querySelector(".filters-done");
var filtersPriorities = document.querySelector(".filters-priorities");

// filtrowanie po zadaniach wykonanych

filtersDone.addEventListener("click", function() {
  filtersDone.classList.toggle("filters-done-active");
  if (filtersDone.className === "filters-done filters-done-active") {
    filtersDone.style.backgroundColor = "#d6b98c";
    for (var i = 0; i < list.children.length; i++) {
      if (list.children[i].firstElementChild.firstElementChild.className !== "ion-ios-checkmark-outline") {
        list.children[i].style.display = "none";
      }
    }
  } else if (filtersDone.className !== "filters-done filters-done-active") {
    filtersDone.style.backgroundColor = "#FEDDA7";
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].style.display = "flex";
      }
  }
});

//filtrowanie po priorytetach
filtersPriorities.addEventListener("click", function() {
  filtersPriorities.classList.toggle("filters-priorities-active");
  if (filtersPriorities.className === "filters-priorities filters-priorities-active") {
    filtersPriorities.style.backgroundColor = "#d6b98c";
    for (var i = 0; i < list.children.length; i++) {
      if (list.children[i].firstElementChild.lastElementChild.className !== "ion-android-star") {
        list.children[i].style.display = "none";
      }
    }
  } else if (filtersPriorities.className !== "filters-priorities filters-priorities-active") {
    filtersPriorities.style.backgroundColor = "#FEDDA7";
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].style.display = "flex";
      }
  }
});


list.addEventListener("click", function(e) {
  // oznaczanie elementów jako ukończone
  if (e.target && e.target.matches("i.ion-ios-circle-outline")) {
    e.target.classList.remove("ion-ios-circle-outline");
    e.target.classList.add("ion-ios-checkmark-outline");
    e.target.parentElement.parentElement.children[1].classList.add("done");
  }
  // oznaczanie elementów jako nieukończone
  else if (e.target && e.target.matches("i.ion-ios-checkmark-outline")) {
    e.target.classList.remove("ion-ios-checkmark-outline");
    e.target.classList.add("ion-ios-circle-outline");
    e.target.parentElement.parentElement.children[1].classList.remove("done");
  }
  // oznaczanie elementów jako priorytet
  else if (e.target && e.target.matches("i.ion-android-star-outline")) {
    e.target.classList.remove("ion-android-star-outline");
    e.target.classList.add("ion-android-star");
  }
  // oznaczanie elementów jako nie-priorytet ;)
  else if (e.target && e.target.matches("i.ion-android-star")) {
    e.target.classList.remove("ion-android-star");
    e.target.classList.add("ion-android-star-outline");
  }
  // usuwanie elementów
  else if (e.target && e.target.matches("span.list-delete-button")) {
    var deleteLi = e.target.parentElement.parentElement;
    deleteLi.parentElement.removeChild(deleteLi);
  }
});

showForm.addEventListener("click", function() {
  var form = document.querySelector(".form form");
    form.style.visibility = "visible";
    form.style.opacity = "1";

    //schowaj button showForm
    showForm.style.visibility = "hidden";
    showForm.style.opacity = "0";
});

submit.addEventListener("click", function(e) {
  e.preventDefault();

  var inputText = document.querySelector("form input[type='text']");
  var inputDate = document.querySelector("form input[type='date']");
  var inputTime = document.querySelector("form input[type='time']");

  if (inputText.value.length === 0 || inputDate.value.length === 0 || inputTime.value.length === 0) {
    console.log("Ya hafta write sth m8");
  } else {
    //schowaj formularz
    var form = document.querySelector(".form form");
    form.style.visibility = "hidden";
    form.style.opacity = "0";

    //stworzenie wszystkich elementów
    var newLi = document.createElement("li");

    var newCheckboxes = document.createElement("div");
    var newCheckboxesDone = document.createElement("i");
    var newCheckboxesPriority = document.createElement("i");

    var newContent = document.createElement("div");
    var newContentText = document.createElement("div");
    var newContentDate = document.createElement("div");

    var newDelete = document.createElement("div");
    var newDeleteButton = document.createElement("span");


    list.appendChild(newLi);
    //dodanie ikon i ich klas
    newLi.appendChild(newCheckboxes);
    newCheckboxes.classList.add("list-checkboxes");
    newCheckboxes.appendChild(newCheckboxesDone);
    newCheckboxesDone.classList.add("ion-ios-circle-outline");
    newCheckboxes.appendChild(newCheckboxesPriority);
    newCheckboxesPriority.classList.add("ion-android-star-outline");
    //dodanie treści i daty
    newLi.appendChild(newContent);
    newContent.classList.add("list-content");
    newContent.appendChild(newContentText);
    newContentText.classList.add("list-content-text");
    newContentText.innerText = inputText.value;
    newContent.appendChild(newContentDate);
    newContentDate.classList.add("list-content-date");
    newContentDate.innerText = inputDate.value.split("-").reverse().join("-") + " " + inputTime.value;
    //dodanie delete button
    newLi.appendChild(newDelete);
    newDelete.classList.add("list-delete");
    newDelete.appendChild(newDeleteButton);
    newDeleteButton.classList.add("list-delete-button");
    newDeleteButton.innerText = "X";

    // pokaż button showForm
    showForm.style.visibility = "visible";
    showForm.style.opacity = "1";

    // zresetuj pola formularza
    inputText.value = "";
    inputDate.value = "";
    inputTime.value = "";
  }
});




});
