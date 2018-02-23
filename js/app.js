/*

  //The first part is reserved to the list loead.

  //The second part to the "Add Todo" functions.

  //The third is all about delete & complete.
*/


//Loads the todos already present in the user room
$(document).ready(isListAviable);
function isListAviable() {
  if ($('#list').is(':visible')) {
    LoadTodos('all');  //Adds the todos
  } else {
    setTimeout(isListAviable, 50); //wait 50 ms, then try again
  }
}
//Function that loads the existing todos (if any) into the todo list
function LoadTodos(type){
  var todos = GetTodos($("#userID").text(), type);

  if (todos){
    for (var i=0; i < todos.length; i++){
      AddTodoInList(todos[i].daFare, todos[i].ID);
    }
    $("#noTodosP").hide();
  } else {
    $("#noTodosP").show();
  }
}
//Ajax call 
function GetTodos(user, type) {
  var dataToReturn;
  $.ajax({
    type: 'POST',
    url: 'include/getList.php',
    async: false,
    data: { user: user, type: type },
    dataType: 'json',
    success: function (data) {
      dataToReturn = data;
    }
  });
  return dataToReturn;
}






//Adds a todo into the list and the DB as well
function AddTodo(todo){
  if (todo) { //Should not insert an empty todo!
    AddTodoInDB($("#userID").text(), todo);
  }
}

//with Enter (insert todo)
$('#todoText').keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    AddTodo($("#todoText").val()); //this trip will be pretty long...
  }
});

//Adds a single todo into the list.
function AddTodoInList(todo, todoID) {

  var todoBlock = "<div class='row justify-content-center align-items-center todoItem'>" +
    "<div class='todoID d-none'>" + todoID + "</div>" +
    "<div class='col-1 text-right'>" +
    "<span class='icon cross'>&#10006</span> " +
    "</div>" +
    "<div class='col-8'>" +
    "<p>" + todo + " </p>" +
    "</div>" +
    "<div class='col-2 text-center'>" +
    "<input type='checkbox' class='checked-todo'/>" +
    "</div>" +
    "</div>";

  $("#list").append(todoBlock);
  $("#todoText").val("");
}

function AddTodoInDB(user, todo) {

  $.ajax({
    type: 'POST',
    url: 'include/addTodo.php',
    async: false,
    data: { todo: todo, giorno: moment().format('L'), user: user },
    success: function (data) {
      LoadTodos('last'); //Load the todo that has been just inserted
    }
  });

}




//Click function for todo delete
$(document).on('click', '.cross', function () {

  var index = $(".cross").index(this); // Takes the position of the todo on the list
  $.ajax({
    type: 'POST',
    url: 'include/deleteTodo.php',
    async: false,
    data: { ID: $(".todoID").eq(index).text(), user: $("#userID").text() }, // Takes the ID of the todo and the username
    success: function (data) {
      ReloadTodos(); //And reloads the page after that
    }
  });
});


function ReloadTodos(){
  $(".todoItem").remove();
  LoadTodos("all");
}



//Complete Todos
function CompleteTodos(){

  alert("Gratz! You have completed " + $(".checked-todo:checked").length + " todo(s)!");

  $(".checked-todo").each(function (i) {
    if (this.checked) {
      // This is pretty like the delete function; refactor?
      $.ajax({
        type: 'POST',
        url: 'include/editTodo.php',
        async: false,
        data: { ID: $(".todoID").eq(i).text(), user: $("#userID").text() },
        success: function (data) {
          ReloadTodos();
        }
      });
    }
  });
    
}

