<?php
include 'database.php'; 

$sql = "SELECT * FROM TopConsumerView";

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

header('Content-Type: application/json');
echo json_encode($data);
?>