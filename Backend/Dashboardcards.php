<?php 

include 'database.php';

$stats =[
    "total_customers" => 0,
    "total_bills" => 0,
    "open_complaints"=> 0,
    "total_employees"=> 0
];

//Count total customers
$sql1 = "SELECT COUNT(*) as count FROM Customer";
$stmt1 = sqlsrv_query($conn, $sql1);
if($stmt1 && $row = sqlsrv_fetch_array($stmt1, SQLSRV_FETCH_ASSOC)) {
    $stats['total_customers'] = $row['count'];
}

//Count unpaid bills
$sql2 = "SELECT COUNT(*) as count FROM Bills WHERE Payment_Status = 'Unpaid'";
$stmt2 = sqlsrv_query($conn, $sql2);
if ($stmt2 && $row = sqlsrv_fetch_array($stmt2, SQLSRV_FETCH_ASSOC)) {
    $stats['pending_bills'] = $row['count'];
}

//Count in progress complaints
$sql3 = "SELECT COUNT(*) as count FROM Complaint WHERE Status_of_Complaint = 'In progress'"; 
$stmt3 = sqlsrv_query($conn, $sql3);
if ($stmt3 && $row = sqlsrv_fetch_array($stmt3, SQLSRV_FETCH_ASSOC)) {
    $stats['open_complaints'] = $row['count'];
}

//Count in all employees
$sql4 = "SELECT COUNT(*) as count FROM Employee"; 
$stmt4 = sqlsrv_query($conn, $sql4);
if ($stmt4 && $row = sqlsrv_fetch_array($stmt4, SQLSRV_FETCH_ASSOC)) {
    $stats['total_employees'] = $row['count'];
}

// Send the results as JSON
header('Content-Type: application/json');
echo json_encode($stats);

?>