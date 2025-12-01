<?php 
    session_start();
    if(!isset($_SESSION['logged_in_id'])) {
        header("Location: ../Frontend/LoginPage.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complaint Management</title>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="complaint_management.css">
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

                    <li><a href="dashboard.php"><img src="../images/S1.png" class="Dashboard-Icon" alt="Dashboard-Icon"> &nbsp;&nbsp;&nbsp;Dashboard</a></li>
                     <?php if($_SESSION['user_role']== 'Admin'){?>
                    <li><a href="Customermanagement.php"><img src="../images/S2.png" class="Customers-Icon" alt="Customers-Icon"> &nbsp;&nbsp;&nbsp;Customers</a></li>
                    <?php } ?>
                     <?php if($_SESSION['user_role']== 'Admin' || $_SESSION['user_role']== 'Cashier'){?>  
                    <li><a href="Billing_Management.php"><img src="../images/S3.png" class="Billings-Icon" alt="Billings-Icon"> &nbsp;&nbsp;&nbsp;Billings</a></li>
                    <?php } ?>
                    <?php if($_SESSION['user_role']== 'Admin' || $_SESSION['user_role']== 'Manager'){?>
                    <li><a href="Genaratereports.php"><img src="../images/S4.png" class="Reports-Icon" alt="Reports-Icon"> &nbsp;&nbsp;&nbsp;Reports</a></li>
                    <?php } ?>
                    <?php if($_SESSION['user_role']== 'Admin' || $_SESSION['user_role']== 'Manager'){?>        
                    <li><a href="complaint_management.php"><img src="../images/S5.png" class="Complaints-Icon" alt="Complaints-Icon"> &nbsp;&nbsp;&nbsp;Complaints</a></li>
                       <?php } ?>
                    <li><a href="meterreadings.php"><img src="/images/S6.png" class="Meter-Icon" alt="Meter-Icon">Meter Data</a></li>

                  </ul>

            </div>
            <div class="logout-section">
                <button onclick="window.location.href='LoginPage.php'" class="logout-btn" type="button">Log out</button>
            </div>
        </div>

  <div class="main">
    <div class="header">
      <div>
        <h1>Complaint Management</h1>
        <p>View, manage and track customer complaints.</p>
      </div>
      <a id="addComplaintBtn" class="add-btn" href="addnewcomplaint.php"><i class="fa-solid fa-plus"></i> Add new Complaint</a>
    </div>

    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" id="search" placeholder="search ID, customer or keyword....">
    </div>

    <table id="complaintTable">
      <thead>
        <tr>
          <th>Complaint ID</th>
          <th>Customer ID</th>
          <th>Employee ID</th>
          <th>Complaint Date</th>
          <th>Description</th>
          <th>Status of Complaint</th>
          <th>Edit</th> 
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        
        
      </tbody>
    </table>

    
  </div>

<script src="complaint_management.js"></script>
</body>
</html>
