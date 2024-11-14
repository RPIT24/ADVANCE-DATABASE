<?php
// Connect to the database
$servername = "localhost"; // Adjust as necessary
$username = "root"; // Adjust as necessary
$password = ""; // Adjust as necessary
$dbname = "inventory_db"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$user = $_POST['username'];
$pass = $_POST['password'];

// Hash the password before saving it for security
$hashed_password = password_hash($pass, PASSWORD_BCRYPT);

// Insert the user into the database
$sql = "INSERT INTO users (username, password) VALUES ('$user', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
