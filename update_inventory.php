<?php
// Include the database connection
include('db.php');

// Get the data from the AJAX request
$item_name = $_POST['item_name'];
$quantity_before = $_POST['quantity_before'];
$quantity_after = $_POST['quantity_after'];
$description = $_POST['description'];

// Update the inventory data in the database
$sql = "UPDATE inventory SET quantity_before = '$quantity_before', quantity_after = '$quantity_after', description = '$description' WHERE item_name = '$item_name'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>

<script src="dashboard.js"></script>
