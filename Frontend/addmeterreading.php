<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enter New Meter Reading</title>
  <link rel="stylesheet" href="addmeterreading.css">
</head>

<body>

  <!-- Header -->
  <div class="header">
    <h2>Enter New Meter Reading</h2>
  </div>

  <div class="container">

    <form id="meterReadingForm" method="post">

      <div class="row">
        <div class="form-group">
          <label>Reading ID</label>
          <input type="text" id="readingId" placeholder="Enter reading ID" name="ReadingID">
        </div>

        <div class="form-group">
          <label>Employee ID</label>
          <input type="text" id="employeeId" placeholder="Enter Employee ID" name="EmployeeID">
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label>Customer ID</label>
          <input type="text" id="customerId" placeholder="Enter Customer ID" name="CustomerID">
        </div>

        <div class="form-group">
          <label>Utility Type</label>
          <select id="utilityType" name="UtilityType">
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Gas">Gas</option>
          </select>
        </div>

        <div class="form-group">
          <label>Reading Date</label>
          <input type="date" id="readingDate" name="ReadingDate" placeholder="YYYY-MM-DD">
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label>Previous Reading</label>
          <input type="number" id="previousReading" placeholder="Enter Previous Reading" name="PreviousReading">
        </div>

        <div class="form-group">
          <label>Current Reading</label>
          <input type="number" id="currentReading" placeholder="Enter Current Reading" name="CurrentReading">
        </div>

        <div class="form-group">
          <label>Units Consumed</label>
          <input type="number" id="unitsConsumed" placeholder="Enter Units Consumed" name="UnitsConsumed">
        </div>
      </div>

      <button type="submit" id="addReadingBtn" class="add-btn">Add Reading</button>
      <button type="button" id="backBtn" class="add-backbtn">Back</button>

    </form>

  </div>

  <script src="addmeterreadings.js"></script>

</body>
</html>
