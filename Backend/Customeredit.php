<?php
include 'database.php'; 

// =========================================================
// PART 1: HANDLE UPDATES (When you click "Create/Update")
// =========================================================
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // 1. Get data from the HTML Form (based on 'name' attributes)
    // BOSS: Make sure your HTML <input> has name="id", name="firstName", etc.
    $id      = $_POST['CustomerID'];           // matches <input name="id">
    $name    = $_POST['CustomerName'];    // matches <input name="firstName">
    $type    = $_POST['CustomerType']; // matches <select name="customerType">
    $email   = $_POST['Email'];        // matches <input name="email">
    $address = $_POST['Address'];      // matches <input name="address">

    // 2. The Update Query
    $sql = "UPDATE Customer SET 
                Customer_Name = ?, 
                Customer_Type = ?, 
                Email = ?, 
                Address = ? 
            WHERE CustomerID = ?";
            
    $params = array($name, $type, $email, $address, $id);

    // 3. Execute
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        // Send error so JS alert shows it
        echo "Error: " . print_r(sqlsrv_errors(), true);
    } else {
        // Send the magic word your JS is looking for
        echo "Update Successful";
    }
    
    // Stop here so we don't run the fetch logic below
    exit; 
}

// =========================================================
// PART 2: HANDLE FETCHING (When page loads)
// =========================================================
if (isset($_GET['id'])) {
    
    $id = $_GET['id'];

    $sql = "SELECT * FROM Customer WHERE CustomerID = ?";
    $params = array($id);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(json_encode(["error" => "SQL Error"]));
    }

    if (sqlsrv_has_rows($stmt)) {
        $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
        
        // Clean data just in case
        $clean_row = array_map(function($val) {
            return is_string($val) ? utf8_encode($val) : $val;
        }, $row);

        echo json_encode($clean_row);
    } else {
        echo json_encode(["error" => "No data found"]);
    }
}
?>