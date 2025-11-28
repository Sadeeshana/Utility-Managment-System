<?php
session_start();

// 1. DATABASE CONNECTION
include 'database.php'; 

// 2. GET ID FROM HTML FORM
if (isset($_POST['employeeId'])) {
    
    $empID = $_POST['employeeId'];

    // 3. QUERY
    $sql = "SELECT * FROM Employee WHERE EmployeeID = ?";
    $params = array($empID);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        goBack("Login Error: Please check your input.");
    }

    // 4. CHECK RESULT
    if (sqlsrv_has_rows($stmt)) {
        // Success -> Go to Dashboard
        $_SESSION['logged_in_id'] = $empID;
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