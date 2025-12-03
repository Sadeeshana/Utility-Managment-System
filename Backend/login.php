<?php
session_start();

include 'database.php'; 

if (isset($_POST['employeeId'])) {
    
    $empID = $_POST['employeeId'];

    $sql = "SELECT * FROM Employee WHERE EmployeeID = ?";
    $params = array($empID);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        goBack("Login Error: Please check your input.");
    }

    if (sqlsrv_has_rows($stmt)) {
        $_SESSION['logged_in_id'] = $empID;

        $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);

        $_SESSION['logged_in_id'] = $row['EmployeeID'];
        $_SESSION['user_role'] = $row['Role'];





        header("Location: ../Frontend/dashboard.php"); 
        exit();
    } else {
        
        goBack("Access Denied: ID not found.");
    }

    sqlsrv_free_stmt($stmt);
}

function goBack($message) {
    echo "<script>
            alert('$message'); 
            window.location.href='../Frontend/LoginPage.php';
          </script>";
    exit();
}
?>