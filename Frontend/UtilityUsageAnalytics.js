  document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('[data-dropdown]').forEach(drop => {
        const btn = drop.querySelector('.pill-btn');                    
        const menu = drop.querySelector('.dropdown-menu');              
        const valueSpan = drop.querySelector('.pill-value');            

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

  document.addEventListener('click', () => closeAllDropdowns());

  // Close All Dropdowns Function
  function closeAllDropdowns(except = null){
    document.querySelectorAll('[data-dropdown]').forEach(dd => {
        if (dd === except) return;                                      
        const menu = dd.querySelector('.dropdown-menu');
        if (menu) menu.style.display = 'none';
    });
  }


  document.getElementById('exportBtn').addEventListener('click', () => {
    const table = document.getElementById('consumptionTable');
    const csv = tableToCSV(table);
    downloadCSV(csv, 'consumption-details.csv');
  });


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