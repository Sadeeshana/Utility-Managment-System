<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Update Password</title>
  <link rel="stylesheet" href="update_password.css">
</head>
<body>
  <div class="container">
    <div class="left-panel">
      <p>Please enter and confirm your new password.</p>
      <button class="back-btn" onclick="goToLogin()">Back to Login</button>
    </div>

    <div class="right-panel">
      <div class="icon-container">
        <img src="images/lock-icon.png" alt="Lock Icon">
      </div>
      <h2>Update Password</h2>

      <div class="form-box">
        <form id="updateForm">
          <div class="input-group">
            <input type="password" id="newPassword" placeholder="New Password" required>
            <span class="icon">🔒</span>
          </div>

          <div class="input-group">
            <input type="password" id="confirmPassword" placeholder="Confirm New Password" required>
            <span class="icon">🔒</span>
          </div>

          <button type="submit" class="update-btn">Update Password</button>
        </form>

        <p id="message" class="success-msg" style="display:none;">
          ✅ Your password has been successfully updated!
        </p>
      </div>
    </div>
  </div>

  <script src="update_password.js"></script>
</body>
</html>
