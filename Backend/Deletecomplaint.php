<?php
session_start()
include 'database.php'; 


//Check Data
if (isset($_POST['complaint_id'])) {
    $ComplaintID = $_POST['complaint_id'];
    echo "Received Complaint ID: " . $ComplaintID . ". ";

    //Run Query
    $sql = "DELETE FROM Complaint WHERE ComplaintID = ?";
    $params = array($ComplaintID);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo "SQL Error: ";
        die(print_r(sqlsrv_errors(), true));
    } else {
        $rows_affected = sqlsrv_rows_affected($stmt);
        if ($rows_affected == -1 || $rows_affected > 0) {
            echo "Success! complaint deleted.";
        } else {
            echo "Query ran, but no rows deleted (ID might be wrong).";
        }
    }
    sqlsrv_free_stmt($stmt);

} else {
echo "Error: POST 'bill_id' is missing. Data received: " . print_r($_POST, true);
   
}
?>