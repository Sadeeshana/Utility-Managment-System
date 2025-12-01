<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unpaid bills</title>
    <link rel="stylesheet" href="Unpaidbills.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    
    <div class="app-container">
<!--Navigation bar-->
        <nav class="sidebar">
            <h2 class="sidebar-title">Managers Reports & Analytics</h2>

            <div class="nav-menu">
                <button class="nav-button" >Full Reports (PDF)</button>
                <button class="nav-button">Top Consumers by Utility</button>
                <button class="nav-button" >Unpaid Bills</button>
                
            </div>

            <div class="back-section">
                <button onclick="window.location.href='dashboard.php'" class="back-btn" type="button">Back to Dashboard</button>
            </div>
        </nav>
 <!--Topics-->
 <main class="main-content">
   <header>
     <h1><center>Unpaid Bills</center></h1>
     <p><center>View, manage and act on all outstanding utility bills</center></p>
   </header>

   <!-- Top stats -->
   <section class="stats">
     <div class="stat-card">
       <div class="stat-title">Total Amount Overdue</div>
      
     </div>
     <div class="stat-card">
       <div class="stat-title">Number Of Overdue Bills</div>
       
     </div>
     <div class="stat-card">
       <div class="stat-title">Average Days Overdue</div>
       
     </div>
   </section>

   <!-- Filters -->
   <section class="controls">
     <div class="search-wrap">
       <input type="text" class="search-input" placeholder="Search by name , account">
     </div>

     
   </section>

   <!-- Table -->
   <section class="list-card">
     <div class="table-wrap">
       <table class="bills-table" id="Unpaids" name="Unpaids">
         <thead>
           <tr>
             
             <th>Bill ID</th>
             <th>Customer ID</th>
             <th>Meter ID</th>
             <th>Billing Date</th>
             <th>Due Date</th>
             <th>Payment Status</th>

           </tr>
        
         </thead>
          <tbody id="Unpaid"> 
        

          </tbody>  
         
       </table>
     </div>

     
  </div>
   </section>
 </main>
    </div>
    <script src="Unpaidbills.js"></script>
</body>
</html>