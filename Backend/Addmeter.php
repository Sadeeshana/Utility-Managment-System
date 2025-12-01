<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Get Data
    $r_id   = $_POST['reading_id'];
    $c_id   = $_POST['customer_id'];
    $e_id   = $_POST['employee_id'];
    $type   = $_POST['utility_type'];
    $date   = $_POST['reading_date'];
    $prev   = $_POST['previous_reading'];
    $curr   = $_POST['current_reading'];
    $units  = $_POST['units_consumed'];

    $sql = "{CALL Meter_ReadingsProcedure(?, ?, ?, ?, ?, ?, ?, ?)}";

    $params = array($r_id, $c_id,$e_id,$type, $date, $prev, $curr, $units);

    // 4. Execute
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die("Database Error: " . print_r(sqlsrv_errors(), true));
    } else {
        echo "Success";
    }

    sqlsrv_free_stmt($stmt);
}
?>