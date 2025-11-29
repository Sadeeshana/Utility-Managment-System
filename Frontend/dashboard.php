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
    <title>Utility Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="dashboard.css">
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
                    <li><a href="dashboard.php" class="active"><img src="../images/S1.png" class="Dashboard-Icon" alt="Dashboard-Icon"> &nbsp;&nbsp;&nbsp;Dashboard</a></li>
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
                </ul>

            </div>
            <div class="logout-section">
                <button onclick="window.location.href='../Frontend/LoginPage.php'" class="logout-btn" type="button">Log out</button>
            </div>
        </div>

        <main class="main-content">
            <header class="main-header">
                <h1>Dashboard</h1>
                <div class="header-right">
                    
                    
                </div>
            </header>

            <div class="dashboard-grid summary-grid">
                
                <div class="summary-card" onclick="window.location.href='/Frontend/Customermanagement.php'">
                    <div class="card-icon-bg blue">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Total Customers</h3>
                    <h2 id="count-customers"></h2>
                </div>

                <div class="summary-card" >
                    <div class="card-icon-bg green">
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>
                    <h3>Unpaid Billings</h3>
                    <h2 id="count-bills"></h2>
                </div>

                <div class="summary-card" >
                    <div class="card-icon-bg red">
                         <i class="fas fa-headset"></i>
                    </div>
                    <h3>In progress Complaints</h3>
                    <h2 id="count-complaints"></h2>
                </div>

                <div class="summary-card" >
                    <div class="card-icon-bg purple">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <h3>Generated Reports</h3>
                    <h2>45</h2>
                </div>

                <div class="summary-card">
                    <div class="card-icon-bg"> 
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Utility Usage</h3>
                    <h2>--</h2>
                </div>

                <div class="summary-card">
                    <div class="card-icon-bg" >
                        <i class="fas fa-plus"></i>
                    </div>
                    <h3>New Widget</h3>
                    <h2>--</h2>
                </div>

            </div>
        </main>
    </div>
    <script src="dashboard.js"></script>
</body>
</html>