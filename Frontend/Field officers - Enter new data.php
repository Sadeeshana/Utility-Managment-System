<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meter Management</title>
  <link rel="stylesheet" href="Field.css">
</head>
<body>

<div class="container">

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

  <!-- Main Content -->
  <div class="main">
      <h1>Enter New Data</h1>

      <div class="card">
          <h3>Meter Details</h3>

          <form id="meterForm">

              <div class="form-group">
                  <label>Meter ID</label>
                  <input type="text" placeholder="Enter the unique identifier" id="meterID">
              </div>

              <div class="form-group">
                  <label for="meterType">Meter Type</label>
                  <select id="meterType" title="Meter Type">
                      <option>Select meter type</option>
                      <option>Electric</option>
                      <option>Water</option>
                      <option>Gas</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="installDate">Installation Date</label>
                  <input type="date" id="installDate" title="Installation Date" placeholder="YYYY-MM-DD">
              </div>

              <div class="form-group">
                  <label>Initial Reading (kWh)</label>
                  <input type="number" placeholder="e.g., 12345" id="initialReading">
              </div>

              <div class="buttons">
                  <button onclick="window.location.href='/Frontend/Admin meter management.html'" type="button" class="cancel-btn">Cancel</button>
                  <button type="submit" class="submit-btn">Submit</button>
              </div>

          </form>

      </div>
  </div>

</div>

<script src="Field.js"></script>
</body>
</html>