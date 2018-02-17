function AddTodo(todo){

	var todoApp = "<div class='col-8'> <p> " + todo + " </p> </div>";
	var line = "<div class='row justify-content-center align-items-center'><div class='col-1 text-right'><p class='icon'>&#10006</p></div>" + todoApp + "<div class='col-2 text-center'><input type='checkbox'/></div></div>";

	$("#list").append(line);
}