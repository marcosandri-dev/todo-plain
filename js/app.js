function AddTodo(todo){

	if (todo){

		var todoBlock ="<div class='row justify-content-center align-items-center todoItem'>" +
								"<div class='col-1 text-right'>" + 
								"<div class='icon cross'>&#10006</div>" +
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


function CompleteTodos(){
	
	/* var count = 0;
	
	for (var i = 0; i <= $(".todoItem").length; i++){
		if ($(".checked-todo").eq(i).val()){
			count++;
			//$(".todoItem")[i].remove();
		}
	} */

	$(".todoItem > input:checked").length;

	alert("Gratz! You have completed " + $("input:checked").length + " todo(s)!");

	//A bit strange, but it works.
	$(".todoItem input:checked").parent().parent().remove();

}
