<?php
include 'database.php';

$type = isset($_GET['type']) ? $_GET['type'] : '';

$title = "General Report";
$headers = [];
$data = [];

//Query to run based on Type
switch ($type) {
    case 'customer':
        $title = "All Customers Report";
        $headers = ["ID", "Name", "Address", "Email","Type" ];
        $sql = "SELECT CustomerID, Customer_Name,Address , Email,Customer_Type  FROM Customer";
        break;

    case 'employee':
        $title = "Employee List Report";
        $headers = ["ID", "Name", "Role", "Contact No", "Email"];
        $sql = "SELECT EmployeeID,Employee_Name, Role,Contact_No, Email FROM Employee";
        break;

    case 'meter':
        $title = "Meter Readings Report";
        $headers = ["Reading ID","Customer ID", "Employee ID", "Utility Type", "Reading Date", "Current Reading", "Previous Reading", "Units Consumed"];
        $sql = "SELECT ReadingID,CustomerID,EmployeeID, Utility_Type,Reading_Date, Current_reading,Previous_reading,Units_consumed  FROM Meter_Readings"; 
        break;

    case 'complaints':
        $title = "complaints History Report";
        $headers = ["ComplaintID", "Customer ID", "Employee ID", "Complaint Date", "Description", "Status"];
        $sql = "SELECT ComplaintID, CustomerID, EmployeeID, Complaint_date,Description,Status_of_Complaint FROM Complaint";
        break;

    default:
        die("Invalid Report Type Selected");
}

//Run the Query
$stmt = sqlsrv_query($conn, $sql);
if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; }
        h1 { text-align: center; color: #333; margin-bottom: 5px; }
        p { text-align: center; color: #666; font-size: 14px; margin-top: 0; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { background-color: #0A3D62; color: white; padding: 10px; text-align: left; }
        td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
        tr:nth-child(even) { background-color: #f2f2f2; }

        @media print {
            .no-print { display: none; }
        }
    </style>
</head>
<body>

    <h1>UTILITY MANAGEMENT SYSTEM</h1>
    <p><?php echo $title; ?></p>
    <hr>

    <table>
        <thead>
            <tr>
                <?php foreach ($headers as $h): ?>
                    <th><?php echo $h; ?></th>
                <?php endforeach; ?>
            </tr>
        </thead>
        <tbody>
            <?php while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_NUMERIC)): ?>
                <tr>
                    <?php foreach ($row as $cell): ?>
                        <td>
        <?php 
        if ($cell instanceof DateTime) {
            echo $cell->format('Y-m-d'); 
        } else {
            echo $cell; 
        }
        ?>
    </td>
                    <?php endforeach; ?>
                </tr>
            <?php endwhile; ?>
        </tbody>
    </table>

    <div style="text-align: center; margin-top: 30px;" class="no-print">
        <button onclick="window.print()" style="padding: 10px 20px; cursor: pointer; background: #E58E26; color: white; border: none; border-radius: 5px;">Print / Save as PDF</button>
    </div>

</body>
</html>