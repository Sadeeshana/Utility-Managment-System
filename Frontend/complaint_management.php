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
                    <img src="/images/A1.png" alt="Admin-Icon">
                    Admin Panel
                    <p>UTILITY MANAGEMENT SYSTEM</p>
                </h2>
                <ul>
                    <li><a href="dashboard.html"><img src="/images/S1.png" class="Dashboard-Icon" alt="Dashboard-Icon"> &nbsp;&nbsp;&nbsp;Dashboard</a></li>
                    <li><a href="Customermanagement.html"><img src="/images/S2.png" class="Customers-Icon" alt="Customers-Icon"> &nbsp;&nbsp;&nbsp;Customers</a></li>
                    <li><a href="Billing_Management.html"><img src="/images/S3.png" class="Billings-Icon" alt="Billings-Icon"> &nbsp;&nbsp;&nbsp;Billings</a></li>
                    <li><a href="Genaratereports.php"><img src="/images/S4.png" class="Reports-Icon" alt="Reports-Icon"> &nbsp;&nbsp;&nbsp;Reports</a></li>
                    <li><a href="complaint_management.html"><img src="/images/S5.png" class="Complaints-Icon" alt="Complaints-Icon"> &nbsp;&nbsp;&nbsp;Complaints</a></li>
                </ul>
            </div>
            <div class="logout-section">
                <button onclick="window.location.href='/Frontend/LoginPage.html'" class="logout-btn" type="button">Log out</button>
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

    <div class="pagination">
      <span>Showing 1 to 5 of 100 results</span>
      <div class="pages">
         <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <span>.......</span>
      </div>
    </div>
  </div>

<script src="complaint_management.js"></script>
</body>
</html>
