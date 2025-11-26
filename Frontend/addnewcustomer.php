<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Information - Utility Management</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="addnewcustomer.css">
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
        
        <main class="main-content">
            <header class="content-header">
                <h2>Customer Information</h2>
                <p>Enter customer details below</p>
            </header>
            
            <form id="customerForm">

                <!-- PERSONAL DETAILS -->
                <div class="form-section">
                    <h3>Personal Details</h3>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="firstName">Full Name</label>
                            <input type="text" id="firstName" name="firstName" required>
                        </div>


                        <div class="form-group">
                            <label for="customerType">Customer Type</label>
                            <select id="customerType" name="customerType" required>
                                <option value="">Select type</option>
                                <option value="Residential">Residential</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Industrial">Industrial</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- CONTACT DETAILS -->
                <div class="form-section">
                    <h3>Contact Details</h3>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                </div>

                <!-- ADDRESS -->
                <div class="form-section">
                    <h3>Address</h3>
                    <div class="form-grid single-column">
                        <div class="form-group full-width">
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address" required>
                        </div>
                    </div>
                </div>

            </form>

            <div class="form-actions">
    <!-- Back button -->
    <button type="button" id="cancelButton" onclick="window.location.href='Customermanagement.html'">
        Back
    </button>

    <!-- Create button -->
    <button type="submit" id="createButton" onclick="window.location.href='Customermanagement.html'">
        Create
    </button>
</div>

</div>

        </main>
    </div>

    <script src="addnewcustomer.js"></script>

</body>
</html>
