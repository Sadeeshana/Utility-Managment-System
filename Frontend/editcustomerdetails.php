<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit Customer Details</title>

  <link rel="stylesheet" href="editcustomerdetails.css">
</head>

<body>

  <!-- Header -->
  <div class="header">
    <h2>Edit Customer Details</h2>
  </div>

  <div class="container">

    <form id="customerForm" method="post">

      <div class="row">
        <div class="form-group">
          <label for="customerId">Customer ID</label>
          <input type="text" id="customerId" placeholder="124" name="CustomerID">
        </div>

        <div class="form-group">
          <label for="customerName">Customer Name</label>
          <input type="text" id="customerName" placeholder="Alice Johnson" name="CustomerName">
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" placeholder="123 Main St, Springfield" name="Address">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="alice.johnson@example.com" name="Email">
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label for="customerType">Customer Type</label>
          <select id="customerType" name="CustomerType">
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            
          </select>
        </div>
      </div>

      <button type="submit" id="editCustomerBtn" class="add-btn">Edit Customer</button>
      <button type="button" id="backBtn" class="add-backbtn">Back</button>

    </form>

  </div>

  <script src="editcustomerdetails.js"></script>

</body>
</html>
