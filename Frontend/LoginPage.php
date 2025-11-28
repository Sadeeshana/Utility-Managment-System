<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login UI</title>
  
  <link rel="stylesheet" href="LoginPage.css">
</head>
<body>

  <div class="container">

    <div class="left">
      <img src="../images/Rectangle 6.png" alt="Billing Illustration" />
      <p>Manage your billing and customer data easily.</p>
    </div>

    
    <div class="right">
      
      <h2>Welcome Back!</h2>
      <small>Please enter login details below</small>
<form action="../Backend/login.php" method="post">
      <div class="input-group">
        <label for="employeeId">Employee ID</label>
        <input type="text" id="employeeId" name="employeeId" required placeholder="Enter the Employee ID" />
      </div>

      <button class="btn btn-primary" type="submit" >Sign In</button>
    </form>
    </div>
    

  </div>

  <script src="LoginPage.js"></script>

</body>
</html>
