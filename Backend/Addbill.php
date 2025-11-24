<?php
include 'database.php';

//Names in html form
$BillID = $_POST['BillID'];
$CustomerID = $_POST['CustomerID'];
$MeterID = $_POST['MeterID'];
$BillingDate = $_POST['BillingDate'];
$Duedate = $_POST['DueDate'];
$payment = $_POST['payment'];

$sql = "EXEC Billpro ?,?,?,?,?,?";
 // Prepare the parameters array
$params =[
    $BillID,
    $CustomerID,
    $MeterID,
    $BillingDate,
    $Duedate,
    $payment

];

//Execute the statment
$stmt = sqlsrv_query($conn,$sql,$params);

if($stmt){
    echo "Bill added successfully";

}else {
    echo "Can't add the bill this moment";
    die( print_r( sqlsrv_errors(), true) );
}







?>