<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Managers Reports & Analytics</title>
    <link rel="stylesheet" href="Topconsumer.css">

</head>
<body>
    
    <div class="app-container">
<!--Navigation bar-->
        <nav class="sidebar">
            <h2 class="sidebar-title">Managers Reports & Analytics</h2>

            <div class="nav-menu">
                <button class="nav-button">Full Reports (PDF)</button>
                <button class="nav-button">Top Consumers by Utility</button>
                <button class="nav-button">Unpaid Bills</button>
                <button class="nav-button">Usage of Utility</button>
            </div>
        </nav>
 <!--Topics-->
 <main class="main-content">
 <header>
        <h1><center>Top consumers</center></h1> 
        <p><center>Identify and analysis the top consumers</center></p>

        </header>

<!--Search bar section-->

        <section class="filter-bar">
            <div class="filter-group">
                <label class="filter-label" for="utility-type-btn">Utility Type</label>

                <!-- Dropdown -->
                <div class="dropdown" id="utility-type">
                    <button class="filter-dropdown" id="utility-type-btn" aria-haspopup="listbox" aria-expanded="false">
                        <span id="utility-type-label">Electricity</span>
                        <span class="chevron">▾</span>
                    </button>
                    <ul class="dropdown-menu" role="listbox" aria-labelledby="utility-type-btn">
                        <li class="dropdown-item" role="option" data-value="electricity" aria-selected="true">Electricity</li>
                        <li class="dropdown-item" role="option" data-value="gas">Gas</li>
                        <li class="dropdown-item" role="option" data-value="water">Water</li>
                    </ul>
                </div>
            </div>
            <div class="filter-group">
                <label class="filter-label">Time Period</label>
                <button class="filter-button" id="time-period-btn">
                    <span id="time-period-label">This Month</span>
                    
                </button>
                <!-- Hidden native month picker -->
                <input type="month" id="time-period-input" class="visually-hidden" aria-label="Choose month">
            </div>
            <div class="filter-group search-group">
                <label class="filter-label">Search consumer</label>
                <div class="search-box">
                    <input type="text" placeholder="Name or Account ID">
                    <span class="icon" aria-hidden="true">&#128269;</span>
                </div>
            </div>
            <div class="filter-group">
                <button class="export-button">
                    Export <span aria-hidden="true">&#11015;</span>
                </button>
            </div>
        </section>

        <!-- Top consumers table-->
        
            <table class="data-table">
                <thead>
                    <tr>
                        
                        <th>Customer ID</th>
                        <th>Utility Type</th>
                        <th>Consumption (kWh)</th>
                        
                    </tr>
                </thead>
                <tbody id="top">
                    
                </tbody>
                </table>

           
        
        </div>
       
<script src="Topconsumer.js"></script>

</body>
</html>