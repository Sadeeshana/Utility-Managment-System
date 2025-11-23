<?php
include 'database.php';

//Names in html form
$EmployeeID = $_POST['EmployeeID'];
$CustomerID = $_POST['CustomerID'];
$Date = $_POST['Complaint Date'];
$Status = $_POST['Status'];
$Description = $_POST['Description'];


$sql = "EXEC ComplaintProcedure ?,?,?,?,?,?";
 // Prepare the parameters array
$params =[
    $EmployeeID,
    $CustomerID,
    $Date,
    $Status,
    $Description

];

//Execute the statment
$stmt = sqlsrv_query($conn,$sql,$params);

if($stmt){
    echo "Complaint added successfully";

}else {
    echo "Can't add the complaint this moment";
    die( print_r( sqlsrv_errors(), true) );
}







?>