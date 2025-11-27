  document.addEventListener('DOMContentLoaded', () => {
    // Dropdown Menu Handling
    // Select All Dropdowns
    document.querySelectorAll('[data-dropdown]').forEach(drop => {
        // Get Elements Inside Each Dropdown 
        const btn = drop.querySelector('.pill-btn');                    
        const menu = drop.querySelector('.dropdown-menu');              
        const valueSpan = drop.querySelector('.pill-value');            

    // Toggle Dropdown Menu on Click
    btn.addEventListener('click', (e) => {
        e.stopPropagation();                                            
        closeAllDropdowns(drop);                                        
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    const navButtons = document.querySelectorAll('.nav-button');

    if (navButtons.length > 0) {
        
        const paths = [
            "Genaratereports.php",
            "Topconsumer.php",
            "Unpaidbills.php",
            "UtilityUsageAnalytics.php"
        ];

        navButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                window.location.href = paths[index];
            });
        });
    }

    // Select Dropdown Option
    menu.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (ev) => {
            ev.stopPropagation();                                       
            const v = li.getAttribute('data-value');                     
            valueSpan.textContent = v;                                  
            menu.style.display = 'none';                                 
            console.log('Filter changed:', valueSpan.previousSibling ? valueSpan.textContent : v);
        });
    });
 });

  // Close Dropdowns on Outside Click
  document.addEventListener('click', () => closeAllDropdowns());

  // Close All Dropdowns Function
  function closeAllDropdowns(except = null){
    document.querySelectorAll('[data-dropdown]').forEach(dd => {
        if (dd === except) return;                                       // Skip the open one
        const menu = dd.querySelector('.dropdown-menu');
        if (menu) menu.style.display = 'none';
    });
  }

  // Export HTML Table to CSV
  // Export Button Click
  document.getElementById('exportBtn').addEventListener('click', () => {
    const table = document.getElementById('consumptionTable');
    const csv = tableToCSV(table);
    downloadCSV(csv, 'consumption-details.csv');
  });

  // Convert Table to CSV
  function tableToCSV(tableEl){
    const rows = [];
    const trs = tableEl.querySelectorAll('tr');
    trs.forEach(tr => {
        const cells = Array.from(tr.querySelectorAll('th,td')).map(cell => {
            return `"${cell.textContent.replace(/"/g,'""').trim()}"`;
        });
        if(cells.length) rows.push(cells.join(','));   
    });
    return rows.join('\n');
  }

  // Download CSV File
  function downloadCSV(csvString, filename){
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'export.csv';
    document.body.appendChild(a);
    a.click();
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});