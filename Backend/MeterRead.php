<?php
include 'database.php'; 

$sql = "SELECT 
            ReadingID, 
            CustomerID, 
            EmployeeID, 
            Utility_Type, 
            Reading_Date, 
            Current_reading, 
            Previous_reading, 
            Units_consumed 
        FROM Meter_Readings 
        ORDER BY ReadingID DESC";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(json_encode(["error" => sqlsrv_errors()]));
}

$data = array();

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    
    if (isset($row['Reading_Date']) && $row['Reading_Date'] instanceof DateTime) {
        $row['Reading_Date'] = $row['Reading_Date']->format('Y-m-d');
    }

    $clean_row = array_map(function($value) {
        if (is_string($value)) return utf8_encode($value);
        return $value;
    }, $row);

    $data[] = $clean_row;
}

header('Content-Type: application/json');
echo json_encode($data);
?>