<?php
// Database connection details
$servername = "localhost";
$username = "root";  // default XAMPP MySQL username
$password = "";      // default XAMPP MySQL password is empty
$dbname = "inventory_system";  // Ensure this matches the name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
