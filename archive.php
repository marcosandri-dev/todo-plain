<?php
  $title = "Archive";

  if (!$_GET["username"]){
    header("location: index.php");
  }

  include 'template/header.php'; 
?>

<p class="d-none" id="userID"><?php echo($_GET["username"]); ?></p>
<p class="d-none" id="page">archive</p>

<?php include 'template/list.php'; ?>

<div style="margin-bottom:30px; margin-top:30px" class="row justify-content-center">
  <div class="col-4">
    <a href="user.php?username=<?php echo($_GET["username"]); ?>" class="btn btn-info btn-block">List >>></a>
  </div>
</div>

<?php include 'template/footer.php'; ?> 