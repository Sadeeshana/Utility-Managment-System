<?php
include 'database.php'; 

// This code SHOWS data. 
// It uses a standard SELECT query, which works fine even if you use SPs for inserting.
$sql = "SELECT 
            CustomerID, 
            Customer_Name, 
            Address, 
            Email,
            Customer_Type
             
        FROM Customer
        ORDER BY CustomerID DESC";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

$customer = array();
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $customer[] = $row;
}

header('Content-Type: application/json');
echo json_encode($customer);
?>