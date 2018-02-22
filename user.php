<?php include 'template/header.php'; ?>

<p class="d-none" id="userID"><?php echo($_GET["username"]); ?></p>

<div>
  <div class="row justify-content-center">
    <div class="col-8"> 
      <input type="text" id="todoText" class="form-control" placeholder="Insert a ToDo!" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-primary" onclick = AddTodo($("#todoText").val())> Add </button>
    </div> 
  </div>
  <!-- <p>Debug : {{msg}}</p> -->
</div> 

<?php include 'template/list.php'; ?>

<div style="margin-bottom:30px; margin-top:30px" class="row justify-content-center">
  <div class="col-4">
    <a href="#" class="btn btn-info"><<< Archive </a>
  </div>
  <div class="col-4">
    <button type="button" class="btn btn-success" onclick = CompleteTodos()>Complete!</button>
  </div>
</div>


<?php include 'template/footer.php';  ?>

