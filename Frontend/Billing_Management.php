<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Billing Management</title>

<link rel="stylesheet" href="Billing_Management.css">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

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
                    <li><a href="Genaratereports.html"><img src="/images/S4.png" class="Reports-Icon" alt="Reports-Icon"> &nbsp;&nbsp;&nbsp;Reports</a></li>
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
        <h1>Billing Management</h1>
        <p>View, manage and track customer invoices.</p>
      </div>
      <a href="Addnewbill.html" class="add-btn" id="addBillBtn">
  <i class="fa-solid fa-plus"></i> Add New Bill
</a>

    </div>

    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" id="search" placeholder="search ID, customer or keyword....">
    </div>

    <table id="billingTable">
      <thead>
        <tr>
          <th name="bill_id">Bill ID</th>
          <th name="cust_id">Customer ID</th>
          <th name="meter_id">Meter ID</th>
          <th name="bill_date">Billing Date</th>
          <th name="due_date">Due Date</th>
          <th name="pstatus">Payment Status</th>
        </tr>
      </thead>
      <tbody>
      
      </tbody>
    </table>

    <div class="pagination">
      <span>Showing 1 to 5 of 50 results</span>
      <div class="pages">
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <span>...</span>
      </div>
    </div>
  </div>

<script src="Billing_Management.js"></script>
</body>
</html>
