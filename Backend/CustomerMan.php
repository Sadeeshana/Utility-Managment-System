<?php
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

//SEND JSON
header('Content-Type: application/json');

$json_output = json_encode($data);

if ($json_output === false) {
    echo json_encode(["error" => "JSON Encoding Failed: " . json_last_error_msg()]);
} else {
    echo $json_output;
}
?>