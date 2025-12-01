<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meter Reading Management</title>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="meterreadings.css">
</head>
<body>

<div class="container">
    <div class="sidebar">
        <div>
            <h2>
                <img src="../images/A1.png" alt="Admin-Icon">
                Admin Panel
                <p>UTILITY MANAGEMENT SYSTEM</p>
            </h2>
            <ul>
                <li><a href="dashboard.php"><img src="../images/S1.png" class="Dashboard-Icon" alt="Dashboard-Icon"> Dashboard</a></li>
                <li><a href="Customermanagement.php"><img src="../images/S2.png" class="Customers-Icon" alt="Customers-Icon"> Customers</a></li>
                <li><a href="Billing_Management.php"><img src="../images/S3.png" class="Billings-Icon" alt="Billings-Icon"> Billings</a></li>
                <li><a href="Genaratereports.php"><img src="../images/S4.png" class="Reports-Icon" alt="Reports-Icon"> Reports</a></li>
                <li><a href="complaint_management.php"><img src="../images/S5.png" class="Complaints-Icon" alt="Complaints-Icon"> Complaints</a></li>
                <li><a href="meterreadings.php"><img src="/images/S6.png" class="Meter-Icon" alt="Meter-Icon">Meter Data</a></li>
            </ul>
        </div>
        <div class="logout-section">
            <button onclick="window.location.href='LoginPage.php'" class="logout-btn" type="button">Log out</button>
        </div>
    </div>

    <main class="main-content">
        <header class="content-header">
            <h2>Meter Reading Management</h2>
            <p>Manage meter readings, view details, and perform actions</p>
            <button onclick="window.location.href='addmeterreading.php'" class="add-reading-btn">
                <i class="fas fa-plus"></i> Add New Reading
            </button>
        </header>

        <div class="meter-reading-section">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search by customer, utility type, or date..." id="searchInput">
            </div>

            <div class="meter-reading-table-container">
                <table class="meter-reading-table" id="MeterReadingData">
                    <thead>
                        <tr>
                            <th>Reading ID</th>
                            <th>Customer ID</th>
                            <th>Employee ID</th>
                            <th>Utility Type</th>
                            <th>Reading Date</th>
                            <th>Current Reading</th>
                            <th>Previous Reading</th>
                            <th>Units Consumed</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody id="meterReadingTableBody">
                       
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</div>

<script src="meterreadings.js"></script>

</body>
</html>
