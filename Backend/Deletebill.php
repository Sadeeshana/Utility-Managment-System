<?php
include 'database.php'; 


//Check Data
if (isset($_POST['bill_id'])) {
    $billID = $_POST['bill_id'];
    echo "Received Bill ID: " . $billID . ". ";

    //Run Query
    $sql = "DELETE FROM Bills WHERE BillID = ?";
    $params = array($billID);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo "SQL Error: ";
        die(print_r(sqlsrv_errors(), true));
    } else {
        $rows_affected = sqlsrv_rows_affected($stmt);
        if ($rows_affected == -1 || $rows_affected > 0) {
            echo "Success! Bill deleted.";
        } else {
            echo "Query ran, but no rows deleted (ID might be wrong).";
        }
    }
    sqlsrv_free_stmt($stmt);

} else {

   
}
?>