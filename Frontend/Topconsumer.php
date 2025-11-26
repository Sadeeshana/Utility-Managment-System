<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Managers Reports & Analytics</title>
    <link rel="stylesheet" href="Topconsumer.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    
    <div class="app-container">

        <!-- Navigation bar -->
        <nav class="sidebar">
            <h2 class="sidebar-title">Managers Reports & Analytics</h2>

            <div class="nav-menu">
                <button class="nav-button">Full Reports (PDF)</button>
                <button class="nav-button">Top Consumers by Utility</button>
                <button class="nav-button">Unpaid Bills</button>
                <button class="nav-button">Usage of Utility</button>
            </div>
        </nav>

        <!-- Main content -->
        <main class="main-content">

            <header>
                <h1><center>Top consumers report</center></h1> 
                <p><center>Identify and analyze the top consumers</center></p>
            </header>

            <!-- Search bar section -->
            <section class="filter-bar">

                <div class="filter-group">
                    <label class="filter-label">Utility Type</label>
                    <select class="filter-dropdown" id="utility-type">
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="water">Water</option>
                    </select>
                </div>

<<<<<<< Updated upstream:Frontend/Topconsumer.php
        <!-- Top consumers table-->
        <section class="table-card" aria-label="Top consumers">
            <table class="data-table">
                <thead>
                    <tr>
                        
                        <th>Customer ID</th>
                        <th>Utility Type</th>
                        <th>Consumption (kWh)</th>
                        
                    </tr>
                </thead>
                <tbody id="top-consumers-body">
                    <tr class="empty">
                        <td colspan="5">No data to display</td>
                    </tr>
                </tbody>
            </table>

            <div class="pagination">
      <span>Showing 1 to 5 of 100 results</span>
      <div class="pages">
         <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <span>.......</span>
      </div>
        </section>
        </div>
       
<script src="Topconsumer.js"></script>
=======
                <div class="filter-group">
                    <label class="filter-label">Time Period</label>
                    <input type="month" id="time-period" class="filter-button">
                </div>

                <div class="filter-group search-group">
                    <label class="filter-label">Search consumer</label>
                    <div class="search-box">
                        <input type="text" id="search-input" placeholder="Name or Account ID">
                        <span class="icon" aria-hidden="true">&#128269;</span>
                    </div>
                </div>

                <div class="filter-group">
                    <button class="export-button">Search</button>
                </div>

            </section>

            <!-- Top consumers table -->
            <section class="table-card" aria-label="Top consumers">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Customer Name</th>
                            <th>Account ID</th>
                            <th>Consumption (kWh)</th>
                            <th>% of Total</th>
                        </tr>
                    </thead>
                    <tbody id="top-consumers-body">
                        <tr class="empty">
                            <td colspan="5">No data to display</td>
                        </tr>
                    </tbody>
                </table>

                <div class="table-footer">
                    <div class="results-info" id="results-info">Showing 0 results</div>
                    <div class="pagination">
                        <button type="button" disabled aria-label="Previous page">&lt;</button>
                        <button type="button" disabled aria-label="Next page">&gt;</button>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <script src="Topconsumer.js"></script>
>>>>>>> Stashed changes:Topconsumer.html

</body>
</html>
