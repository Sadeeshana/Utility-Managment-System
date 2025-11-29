<?php
session_start();
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_SESSION['logged_in_id'])) {
        $EmployeeID = $_SESSION['logged_in_id'];
    } else {
        die("Error: Session expired. Please log in again.");
    }

    $CustomerID  = $_POST['CustomerID'];
    $Date        = $_POST['ComplaintDate'];
    $Status      = $_POST['Status'];
    $Description = $_POST['Description'];

    $sql = "{CALL ComplaintProcedure(?, ?, ?, ?, ?)}";
    
    $params = [
         $CustomerID,
        $EmployeeID,  
       
        $Date,
        $Description,
        $Status
    ];

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt) {
        echo "Complaint added successfully";
    } else {
        echo "Can't add complaint. ";
        die(print_r(sqlsrv_errors(), true));
    }
    
    sqlsrv_free_stmt($stmt);
}
?>