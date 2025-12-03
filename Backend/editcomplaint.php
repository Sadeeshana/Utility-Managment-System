<?php
include 'database.php';

if (isset($_GET['id'])) {
    
    $id = $_GET['id'];

    $sql = "SELECT * FROM Complaint WHERE ComplaintID = ?";
    $params = array($id);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    if (sqlsrv_has_rows($stmt)) {
        $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
        
        if (isset($row['ComplaintDate']) && $row['ComplaintDate'] instanceof DateTime) {
            $row['ComplaintDate'] = $row['ComplaintDate']->format('Y-m-d');
        }

        echo json_encode($row);
    } else {
        echo json_encode(["error" => "No data found"]);
    }
}
?>