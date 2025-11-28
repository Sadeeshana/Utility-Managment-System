<?php
session_start();
include 'database.php'; 


// 3. Check Data
if (isset($_POST['customer_id'])) {
    $CustomerID = $_POST['customer_id'];
    echo "Received Customer ID: " . $CustomerID . ". ";

    // 4. Run Query
    $sql = "DELETE FROM Customer WHERE CustomerID = ?";
    $params = array($CustomerID);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo "SQL Error: ";
        die(print_r(sqlsrv_errors(), true));
    } else {
        // Check if any rows were actually affected
        $rows_affected = sqlsrv_rows_affected($stmt);
        if ($rows_affected == -1 || $rows_affected > 0) {
            echo "Success! customer deleted.";
        } else {
            echo "Query ran, but no rows deleted (ID might be wrong).";
        }
    }
    sqlsrv_free_stmt($stmt);

} else {
echo "Error: POST 'customer_id' is missing. Data received: " . print_r($_POST, true);
   
}
?>