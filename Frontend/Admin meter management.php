<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meter Management</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="Admin_meter_management.css" />
  
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
                    <li><a href="dashboard.php"><img src="/images/S1.png" class="Dashboard-Icon" alt="Dashboard-Icon"> &nbsp;&nbsp;&nbsp;Dashboard</a></li>
                    <li><a href="Customermanagement.php"><img src="/images/S2.png" class="Customers-Icon" alt="Customers-Icon"> &nbsp;&nbsp;&nbsp;Customers</a></li>
                    <li><a href="Billing_Management.php"><img src="/images/S3.png" class="Billings-Icon" alt="Billings-Icon"> &nbsp;&nbsp;&nbsp;Billings</a></li>
                    <li><a href="Genaratereports.php"><img src="/images/S4.png" class="Reports-Icon" alt="Reports-Icon"> &nbsp;&nbsp;&nbsp;Reports</a></li>
                    <li><a href="complaint_management.php"><img src="/images/S5.png" class="Complaints-Icon" alt="Complaints-Icon"> &nbsp;&nbsp;&nbsp;Complaints</a></li>
                    <li><a href="meterreadings.php"><img src="/images/S6.png" class="Meter-Icon" alt="Meter-Icon">Meter Data</a></li>
                </ul>
            </div>
            <div class="logout-section">
                <button onclick="window.location.href='LoginPage.php'" class="logout-btn" type="button">Log out</button>
            </div>
        </div>
 
    <!-- Main content -->
    <main class="main">
      <header class="header">
        <div>
          <h1>Meter Management</h1>
          <p>View, search, and manage all registered utility meters.</p>
        </div>
        <button onclick="window.location.href='Field officers - Enter new data.php'" class="add-btn">+ Register New Meter</button>
      </header>

      <!-- Search and filters -->
      <div class="filters">
        <input type="text" placeholder="Search by Meter ID, Customer name, Address..." />
        <select>
          <option>Type</option>
          <option>Electric</option>
          <option>Water</option>
          <option>Gas</option>
        </select>
        <select>
          <option>Last Reading</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      <!-- Table -->
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Meter ID ⬍</th>
            <th>Type</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Last Reading</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>ETC-6081</td>
            <td>Electric</td>
            <td>Abishek</td>
            <td>207 Lake road</td>
            <td>2025-08-15</td>
            <td><a href="#">View</a>, <a href="#">Edit</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>WAT-5414</td>
            <td>Water</td>
            <td>Sadeeshana</td>
            <td>180 Central road</td>
            <td>2025-06-23</td>
            <td><a href="#">View</a>, <a href="#">Edit</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>GAS-5375</td>
            <td>Gas</td>
            <td>Mithila</td>
            <td>631 Baseline road</td>
            <td>2025-07-12</td>
            <td><a href="#">View</a>, <a href="#">Edit</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>ETC-1856</td>
            <td>Electric</td>
            <td>Namidu</td>
            <td>595 Maradana road</td>
            <td>2025-09-03</td>
            <td><a href="#">View</a>, <a href="#">Edit</a></td>
          </tr>
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
    </main>
  </div>
</body>
</html>
