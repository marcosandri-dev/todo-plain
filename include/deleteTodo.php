<?php

  include 'connection.php';
  
	$ID = $_POST["ID"];
	$user = $_POST["user"];

	$query = $mysqli->query("DELETE FROM todotable WHERE ID = $ID AND user = '$user';");

	mysqli_close($conn);

	echo("Todo deleted: ".$ID);
?>