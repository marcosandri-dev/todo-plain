<?php 

  include 'connection.php';

	$todo = $_POST["todo"];
	$giorno = $_POST["giorno"];
	$user = $_POST["user"];
	$todo = addslashes($todo);

	$query = $mysqli->query("INSERT INTO todotable VALUES (NULL, '$todo', 0, '$user','$giorno')");

	mysqli_close($conn);

	echo("Todo inserted: ".$todo);
?>