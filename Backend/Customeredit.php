<?php


include 'database.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    $id      = $_POST['CustomerID'];           
    $name    = $_POST['CustomerName'];    
    $type    = $_POST['CustomerType']; 
    $email   = $_POST['Email'];        
    $address = $_POST['Address'];    
    
    
    // 2. The Update Query
    $sql = "UPDATE Customer SET 
                Customer_Name = ?, 
                Customer_Type = ?, 
                Email = ?, 
                Address = ? 
            WHERE CustomerID = ?";
            
    $params = array($name, $type, $email, $address, $id);

    // 3. Execute
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        
        echo "Error: " . print_r(sqlsrv_errors(), true);
    } else {
        
        echo "Update Successful";
    }
    
    
    exit;
}

if (isset($_GET['id'])) {
    
    $id = $_GET['id'];

    $sql = "SELECT * FROM Customer WHERE CustomerID = ?";
    $params = array($id);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(json_encode(["error" => "SQL Error"]));
    }

    if (sqlsrv_has_rows($stmt)) {
        $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
        
        
        $clean_row = array_map(function($val) {
            return is_string($val) ? utf8_encode($val) : $val;
        }, $row);

        echo json_encode($clean_row);
    } else {
        echo json_encode(["error" => "No data found"]);
    }
}

?>