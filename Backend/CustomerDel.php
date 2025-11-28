<?php
session_start();
include 'database.php'; 

// 3. Check Data
if (isset($_POST['customer_id'])) {
    $CustomerID = $_POST['customer_id'];
    echo "Received Customer ID: " . $CustomerID . ". ";


    $sqlBalance = "DELETE FROM Balance WHERE CustomerID = ?";
    $stmtBalance = sqlsrv_query($conn, $sqlBalance, array($CustomerID));
    if ($stmtBalance === false) { die(print_r(sqlsrv_errors(), true)); }

    $sqlBills = "DELETE FROM Bills WHERE CustomerID = ?";
    $stmtBills = sqlsrv_query($conn, $sqlBills, array($CustomerID));
    if ($stmtBills === false) { die(print_r(sqlsrv_errors(), true)); }

    $sqlComplaints = "DELETE FROM Complaint WHERE CustomerID = ?";
    $stmtComplaints = sqlsrv_query($conn, $sqlComplaints, array($CustomerID));
    if ($stmtComplaints === false) { die(print_r(sqlsrv_errors(), true)); }

    $sqlPayment = "DELETE FROM Payment WHERE CustomerID = ?";
    $stmtPayment = sqlsrv_query($conn, $sqlPayment, array($CustomerID));
    if ($stmtPayment === false) { die(print_r(sqlsrv_errors(), true)); }



    // 4. Run Query
    $sql = "DELETE FROM Customer WHERE CustomerID = ?";
    $params = array($CustomerID);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        echo "SQL Error: ";
        die(print_r(sqlsrv_errors(), true));
    } else {
        $rows_affected = sqlsrv_rows_affected($stmt);
        if ($rows_affected == -1 || $rows_affected > 0) {
            echo "Success! Customer and all their data deleted.";
        } else {
            echo "Query ran, but no rows deleted (ID might be wrong).";
        }
    }
    sqlsrv_free_stmt($stmt);

} else {
    echo "Error: POST 'customer_id' is missing. Data received: " . print_r($_POST, true);
}
?>