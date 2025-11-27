<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Forgot Password</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Link to CSS File -->
    <link rel="stylesheet" href="ForgotPassword.css">
</head>

<body>
    <div class="page-bg">
        <div class="card">
          <!-- Left Side -->
          <aside class="card-left">
              <div class="left-copy">
                  <p>Please enter your email to receive a</p>
                  <p>verification code.</p>
              </div>

              <button onclick="window.location.href='/Frontend/LoginPage.php'" class="btn back-btn" id="backBtn">Back to Login</button>
          </aside>

          <!-- Right Side -->
          <section class="card-right">
              <div class="right-inner">
                  <div class="decor">
                      <img src="/images/P1.gif" alt="Decorative Image" />
                  </div>

                  <h1 id="forgot-title" class="title">Forgot Password</h1>

                  <div class="form-card">
                      <label for="email" class="label">Email</label>
                      <input id="email" class="input" type="email" placeholder="Enter your email" />
                      <p id="hint" class="hint"></p>

                      <button id="sendBtn" class="btn send-btn" type="button">Send Verification Code</button>
                </div>
             </div>
          </section>
        </div>
    </div>

    <script src="ForgotPassword.js"></script>
</body>
</html>