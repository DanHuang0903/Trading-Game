<?php

$servername = "us-cdbr-east-06.cleardb.net";
$username = "be2a1b689d026a";
$password = "09c33246";
$dbname = "heroku_84033afa304cc4e";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$user = mysqli_real_escape_string($conn, $_POST['user_id']); //sanitize value
$sql = "INSERT INTO table_name (user_id) VALUES ('$user')";

if (mysqli_query($conn, $sql)) {
    echo "Record created successfully";
} else {
    echo "Error creating record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>