<?php
include 'database.php'; 

// 1. Check Data
if (isset($_POST['id']) && isset($_POST['fullname'])) {
    
    
    $id      = $_POST['id'];
    $name    = $_POST['fullname'];
    $type    = $_POST['customerType'];
    $email   = $_POST['email'];
    $address = $_POST['address'];

    
    $sql = "{CALL CustomerProcedure(?, ?, ?, ?, ?)}";
    
    $params = array($id, $name, $address ,$email,$type );

    // 4. Execute
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
            die("Error: " . print_r(sqlsrv_errors(), true));
    } else {
        echo "Success";
    }

    sqlsrv_free_stmt($stmt);

} else {
    echo "Error: Missing Data";
}
?>