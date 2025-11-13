  document.addEventListener('DOMContentLoaded', () => {
    // Dropdowns
    // Find all dropdown elements
    document.querySelectorAll('[data-dropdown]').forEach(drop => {
        const btn = drop.querySelector('.pill-btn');                    // The button that opens the dropdown
        const menu = drop.querySelector('.dropdown-menu');              // The dropdown menu itself
        const valueSpan = drop.querySelector('.pill-value');            // The selected value text

    // When button is clicked show or hide dropdown menu
    btn.addEventListener('click', (e) => {
        e.stopPropagation();                                            // Stop from closing immediately
        closeAllDropdowns(drop);                                        // Close other open dropdowns
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // When user clicks an option in the dropdown
    menu.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (ev) => {
            ev.stopPropagation();                                       
            const v = li.getAttribute('data-value');                     // Get clicked value
            valueSpan.textContent = v;                                   // Update visible text
            menu.style.display = 'none';                                 // Close menu

            // Just a message in console for now (you can replace this with real filtering)
            console.log('Filter changed:', valueSpan.previousSibling ? valueSpan.textContent : v);
        });
    });
 });

  // Close all dropdowns is user clicks anywhere else on the page
  document.addEventListener('click', () => closeAllDropdowns());

  // Function to close all dropdowns (except the one passed in)
  function closeAllDropdowns(except = null){
    document.querySelectorAll('[data-dropdown]').forEach(dd => {
        if (dd === except) return;                                       // Skip the open one
        const menu = dd.querySelector('.dropdown-menu');
        if (menu) menu.style.display = 'none';
    });
  }

  // Export to CSV
  document.getElementById('exportBtn').addEventListener('click', () => {
    const table = document.getElementById('consumptionTable');
    const csv = tableToCSV(table);
    downloadCSV(csv, 'consumption-details.csv');
  });

  // Convert HTML table into CSV format
  function tableToCSV(tableEl){
    const rows = [];
    const trs = tableEl.querySelectorAll('tr');
    trs.forEach(tr => {
        // Get all cells (headers and normal cells)
        const cells = Array.from(tr.querySelectorAll('th,td')).map(cell => {
            // Wrap each cell text in quotes and escape double quotes
            return `"${cell.textContent.replace(/"/g,'""').trim()}"`;
        });
        if(cells.length) rows.push(cells.join(','));   // Combine into a CSV line
    });
    //Combine all rows into one string
    return rows.join('\n');
  }

  // Download the CSV file to user's computer
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