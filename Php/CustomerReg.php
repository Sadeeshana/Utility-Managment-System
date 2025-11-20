<?php
include 'database.php';

//Names in html form
$customerID = $_POST['CustomerID'];
$name = $_POST['Customer_Name'];
$address = $_POST['Address'];
$email = $_POST['Email'];
$type = $_POST['Customer_Type'];

$sql = "EXEC CustomerProcedure ?,?,?,?,?";
 // Prepare the parameters array
$params =[
    $customerID,
    $name,
    $address,
    $email,
    $type

];

//Execute the statment
$stmt = sqlsrv_query($conn,$sql,$params);

if($stmt){
    echo "Registration successful";

}else {
    echo "Registration failed";
    die( print_r( sqlsrv_errors(), true) );
}







?>