<?php
include 'database.php'; 

// This code SHOWS data. 
$sql = "SELECT 
            BillID, 
            CustomerID, 
            MeterID, 
            FORMAT(BillingDate, 'yyyy/MM/dd') as BillingDate, 
            FORMAT(DueDate, 'yyyy/MM/dd') as DueDate, 
            Payment_Status  
        FROM Bills
        ORDER BY BillID DESC";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

$bills = array();
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $bills[] = $row;
}

header('Content-Type: application/json');
echo json_encode($bills);
?>