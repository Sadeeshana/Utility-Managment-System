<?php
// Local DB Connection
require_once "db.php"; 

// Handle Pagination Using POST
$limit = 5;
$page  = isset($_POST['page']) ? intval($_POST['page']) : 1;
$start = ($page - 1) * $limit;

// Get Total Count Of Complaints
$countQuery = "SELECT COUNT(*) AS total FROM complaint";
$countResult = $conn->query($countQuery);
$totalRow = $countResult->fetch_assoc();
$totalRecords = $totalRow['total'];

$totalPages = ceil($totalRecords / $limit);

// Call Stored Procedure
$stmt = $conn->prepare("CALL GetComplaints(?, ?)");
$stmt->bind_param("ii", $start, $limit);
$stmt->execute();
$result = $stmt->get_result();

// Fetch Rows and Build an Array
$complaints = [];

while ($row = $result->fetch_assoc()) {
    $complaints[] = [
        "ComplaintID"         => $row["ComplaintID"],
        "CustomerID"          => $row["CustomerID"],
        "EmployeeID"          => $row["EmployeeID"],
        "Complaint_date"      => $row["Complaint_date"],
        "Description"         => $row["Description"],
        "Status_of_Complaint" => $row["Status_of_Complaint"]
    ];
}

// Return JSON Back to Frontend
echo json_encode([
    "data"          => $complaints,
    "currentPage"   => $page,
    "totalPages"    => $totalPages,
    "totalRecords"  => $totalRecords
]);

// Close DB
$conn->close();
?>