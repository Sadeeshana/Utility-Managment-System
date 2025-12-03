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

$complaints = array(); 
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $complaints[] = $row; 
}

header('Content-Type: application/json');
echo json_encode($complaints); 
?>