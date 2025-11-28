<?php
include 'database.php'; 

$sql = "SELECT * FROM UnpaidBills";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(json_encode(["error" => sqlsrv_errors()]));
}

$data = array();

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    
   
    if (isset($row['BillingDate']) && $row['BillingDate'] instanceof DateTime) {
        $row['BillingDate'] = $row['BillingDate']->format('Y-m-d'); 
    }

    if (isset($row['DueDate']) && $row['DueDate'] instanceof DateTime) {
        $row['DueDate'] = $row['DueDate']->format('Y-m-d');
    }

    $clean_row = array_map(function($value) {
        if (is_string($value)) {
            return utf8_encode($value); 
        }
        return $value;
    }, $row);

    $data[] = $clean_row;
}

header('Content-Type: application/json');
echo json_encode($data);
?>