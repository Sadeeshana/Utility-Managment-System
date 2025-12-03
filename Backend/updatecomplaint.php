<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $id          = $_POST['ComplaintID']; 
    $employeeId  = $_POST['EmployeeID'];
    $customerId  = $_POST['CustomerID'];
    $date        = $_POST['ComplaintDate'];
    $status      = $_POST['Status'];
    $desc        = $_POST['Description'];

    $sql = "UPDATE Complaint 
            SET EmployeeID = ?, 
                CustomerID = ?, 
                Complaint_date = ?, 
                Status_of_Complaint = ?, 
                Description = ? 
            WHERE ComplaintID = ?";

    $params = array($employeeId, $customerId, $date, $status, $desc, $id);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo "Error: ";
        die(print_r(sqlsrv_errors(), true)); 
    } 

    echo "Update successful";
    
    sqlsrv_free_stmt($stmt);
    sqlsrv_close($conn);
}
?>