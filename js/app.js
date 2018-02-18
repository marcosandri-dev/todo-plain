function AddTodo(todo){

	var totalTodo = $(".todoItem").length;

	if (todo){

		var todoBlock ="<div class='row justify-content-center align-items-center todoItem'>" +
								"<div class='col-1 text-right'>" + 
								"<div class='icon cross'>&#10006</div>" +
								"</div>" +
								"<div class='col-8'>" +
									"<p>" + todo + " </p>" +
								"</div>" +
								"<div class='col-2 text-center'>" +
									"<input type='checkbox'/>" +
								"</div>" +
							"</div>";

		$("#list").append(todoBlock);
		$("#todoText").val("");
	}
}

//Another way to call the insertion
$('#todoText').keypress(function (e) {
	var key = e.which;
	if (key == 13)
	{
		AddTodo($("#todoText").val());
	}
});   

// Delete Function
$("#list").on('click', '.cross', function () {
	var index = $('.cross').index(this);
	$(".todoItem")[index].remove();
});


function Eprouve(){

	var totalTodo = $(".todoItem").length;
	alert(totalTodo);

}
