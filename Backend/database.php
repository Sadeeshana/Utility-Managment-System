<?php
$serverName = "SADEESHANA2004\SQLEXPRESS"; 
$connectionOptions = [
    "Database" => "Utility_Management_System", 
    "Uid" => "Sadeeshana",        
    "PWD" => "sadeeputha"         
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    echo "Connection failed.<br />";
    die(print_r(sqlsrv_errors(), true));
} else {
   
}

?>