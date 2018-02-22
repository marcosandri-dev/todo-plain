<?php
  include 'connection.php';

	//$postdata = file_get_contents("php://input");
	//$request = json_decode($postdata);
  $user = $_POST["user"];
  $type = $_POST["type"];

  switch ($type) {
    case 'last':      $query = $mysqli->query("SELECT * FROM todotable WHERE user = '$user' ORDER BY id DESC LIMIT 1");
      break;
    case 'all':       $query = $mysqli->query("SELECT * FROM todotable WHERE user = '$user' AND checkin = 0");
      break;
    case 'archived': 	$query = $mysqli->query("SELECT * FROM todotable WHERE user = '$user' AND checkin = 1");

  }

	if(mysqli_num_rows($query) > 0){
		while($row = mysqli_fetch_assoc($query)){
			$data[] = $row;
		}
		print json_encode($data);
	}
	
	mysqli_close($conn); 
?>