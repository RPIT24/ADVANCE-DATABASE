// Save changes to the database via AJAX
function saveChanges(button) {
    var row = button.closest('tr');
    var item_name = row.cells[0].textContent;
    var quantity_before = row.cells[1].textContent;
    var quantity_after = row.cells[2].textContent;
    var description = row.cells[3].textContent;

    // Send the data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "update_inventory.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Changes saved successfully!");
        }
    };
    xhr.send("item_name=" + item_name + "&quantity_before=" + quantity_before + "&quantity_after=" + quantity_after + "&description=" + description);
}

// Logout function to redirect to login page
function logout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "loginpage.html"; // Redirect to the login page
}
