<?php
include 'database.php'; 

// Select data
$sql = "SELECT 
            ComplaintID, 
            CustomerID, 
            EmployeeID, 
            FORMAT(Complaint_date, 'yyyy/MM/dd') as Complaint_date, -- Format date
            Description,
            Status_of_Complaint
        FROM Complaint
        ORDER BY ComplaintID DESC";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

$complaints = array(); // FIXED: Use a consistent name
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $complaints[] = $row; // FIXED: Add to the correct array
}

header('Content-Type: application/json');
echo json_encode($complaints); // FIXED: Output the correct array
?>