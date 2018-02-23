<?php
  $title = "List";
  
  if (!$_GET["username"]){
    header("location: index.php");
  }

  include 'template/header.php';
?>

<p class="d-none" id="userID"><?php echo($_GET["username"]); ?></p>
<p class="d-none" id="page">user</p>

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

<div style="margin-bottom:30px; margin-top:30px" class="row justify-content-around">
  <div class="col-4 col-md-3">
    <a href="archive.php?username=<?php echo($_GET["username"]); ?>" class="btn btn-info btn-block"><<< Archive </a>
  </div>
  <div class="col-4 col-md-3">
    <button type="button" class="btn btn-success btn-block" onclick = CompleteTodos()>Complete!</button>
  </div>
</div>


<?php include 'template/footer.php';  ?>

