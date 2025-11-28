<?php
include 'database.php';

// 1. Check if ID is in the URL
if (isset($_GET['id'])) {
    
    $id = $_GET['id'];

    // 2. Fetch the specific complaint
    $sql = "SELECT * FROM Customer WHERE CustomerID = ?";
    $params = array($id);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    // 3. Send data back as JSON
    if (sqlsrv_has_rows($stmt)) {
        $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
        
        // Fix Date Format (SQL Server dates are objects in PHP)
        

        echo json_encode($row);
    } else {
        echo json_encode(["error" => "No data found"]);
    }
}
?>