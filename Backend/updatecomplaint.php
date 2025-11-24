<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. GET DATA
    $id          = $_POST['ComplaintID']; 
    $employeeId  = $_POST['EmployeeID'];
    $customerId  = $_POST['CustomerID'];
    $date        = $_POST['ComplaintDate'];
    $status      = $_POST['Status'];
    $desc        = $_POST['Description'];

    // 2. UPDATE QUERY
    $sql = "UPDATE Complaint 
            SET EmployeeID = ?, 
                CustomerID = ?, 
                Complaint_date = ?, 
                Status_of_Complaint = ?, 
                Description = ? 
            WHERE ComplaintID = ?";

    $params = array($employeeId, $customerId, $date, $status, $desc, $id);

    // 3. EXECUTE
    $stmt = sqlsrv_query($conn, $sql, $params);

    // --- FIX IS HERE ---
    if ($stmt === false) {
        // If query fails, SHOW THE ERROR and STOP immediately
        echo "Error: ";
        die(print_r(sqlsrv_errors(), true)); 
    } 

    // If we get here, it succeeded
    echo "Update successful";
    
    // Only free the statement if it actually exists!
    sqlsrv_free_stmt($stmt);
    sqlsrv_close($conn);
}
?>