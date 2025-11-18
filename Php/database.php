<?php
// --- Database Connection Variables ---
$serverName = "SADEESHANA2004\SQLEXPRESS"; // Your server name
$connectionOptions = [
    "Database" => "Utility_Management_System", // Your database name
    "Uid" => "Sadeeshana",        // Your SQL Server login username
    "PWD" => "sadeeputha"         // Your SQL Server login password
];

// --- Establishes the connection ---
$conn = sqlsrv_connect($serverName, $connectionOptions);

// --- Check the connection ---
if ($conn === false) {
    // Connection failed, print the errors
    echo "Connection failed.<br />";
    die(print_r(sqlsrv_errors(), true));
} else {
    // Connection was successful
    // echo "Connected successfully.<br />";
}
// You can now run queries here...

// Close the connection when done
// sqlsrv_close($conn);
?>