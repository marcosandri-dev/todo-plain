<?php
  
	include 'connection.php';

	$ID = $_POST["ID"];
  $user = $_POST["user"];
  $type = "checkbox";

	switch ($type){
		case "checkbox":
			$query = $mysqli->query("UPDATE todotable SET checkin=1 WHERE ID = $ID AND user = '$user';");
			break;
		
		/* case "todo":
			$query = $mysqli->query("UPDATE todotable SET daFare='$toDo' WHERE ID = $ID AND user = '$user';");
			break; */
	}

	mysqli_close($conn);

?>