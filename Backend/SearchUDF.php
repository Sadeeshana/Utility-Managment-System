<?php 
    include 'database.php';

 
    $type = $_POST['type'] ?? '';
    $id = $_POST['id'] ?? '';

    if(empty($id)){
        die(json_encode(["error" => "Pls enter your id"]));
    }

    $id = intval($id);
    $sql = "";
    $params = array($id);

    if($type === 'employee'){
        $sql = "SELECT * FROM dbo.GetEmployeeDetails(?)";
    }elseif($type === 'customer'){
        $sql = "SELECT *FROM dbo.GetCustomerDetails(?)";
    }else{
        die(json_encode(["error" => "Database Error"]));
    }

    $stmt = sqlsrv_query($conn,$sql,$params);

    if($stmt == false){
        die(json_encode(array("error" => "Database Error")));  
    }
    if($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)){
        echo json_encode(["status" => "success","data" => $row]);
    }else {
        echo json_encode(["error" => "ID Not Found"]);
    }
       
?>