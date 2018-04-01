document.addEventListener("DOMContentLoaded", function() {

var list = document.querySelector(".list ul");
var showForm = document.querySelector(".form-button button");
var submit = document.querySelector("form input[type='submit']");

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
    //schowaj formularz
    // form.style.visibility = "hidden";
    // form.style.opacity = "0";
});

submit.addEventListener("click", function(e) {
  e.preventDefault();
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

  //dodanie wszystkich elementów
  list.appendChild(newLi);
  newLi.appendChild(newCheckboxes);
  newCheckboxes.classList.add("list-checkboxes");

  newLi.appendChild(newContent);

  newLi.appendChild(newDelete);



});




});
