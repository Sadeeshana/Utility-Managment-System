<?php
// 1. Include Database
include 'database.php'; 


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
    die(json_encode(["error" => sqlsrv_errors()]));
}

$data = array();

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $clean_row = array_map(function($value) {
        if (is_string($value)) {
            return utf8_encode($value); 
        }
        return $value;
    }, $row);

    $data[] = $clean_row;
}

// 5. SEND JSON
header('Content-Type: application/json');

// Check if json_encode fails
$json_output = json_encode($data);

if ($json_output === false) {
    // If it fails, send a manual error 
    echo json_encode(["error" => "JSON Encoding Failed: " . json_last_error_msg()]);
} else {
    echo $json_output;
}
?>