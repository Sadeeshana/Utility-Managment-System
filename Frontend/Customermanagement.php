<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Utility Management</title>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="customer_management.css">
    

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
                <button class="logout-btn" type="button">Log out</button>
            </div>
        </div>

        <main class="main-content">
            <header class="content-header">
                <h2>Customer Management</h2>
                <p>Manage customer accounts, view details, and perform actions</p>
                <button onclick="window.location.href='addnewcustomer.html'" class="add-customer-btn">
                    <i class="fas fa-plus"></i> Add New Customer
                </button>
            </header>

            <div class="customer-list-section">
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search by name, email, or account number..." id="searchInput">
                </div>

                <div class="customer-table-container">
                    <table class="customer-table" id="Customerdata">
                        <thead>
                            <tr>
                                <th>Customer Id</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Customer Type</th>
                            </tr>
                        </thead>
                        <tbody id="customerTableBody">
                            </tbody>
                    </table>
                </div>

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
            </div>
        </main>
    </div>
    <script src="customer_management.js"></script>


</body>
</html>