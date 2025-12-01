// ================================
// SIDEBAR NAVIGATION BUTTON PATHS
// ================================
document.addEventListener('DOMContentLoaded', () => {
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
});



document.addEventListener('DOMContentLoaded', () => {
    const dd = document.getElementById('utility-type');
    if (!dd) return;

    const btn   = dd.querySelector('#utility-type-btn');
    const label = dd.querySelector('#utility-type-label');
    const menu  = dd.querySelector('.dropdown-menu');
    const items = dd.querySelectorAll('.dropdown-item');

    const setOpen = (open) => {
        dd.classList.toggle('open', open);
        if (btn) btn.setAttribute('aria-expanded', String(open));
    };

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!dd.classList.contains('open'));
    });

    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            items.forEach(i => i.setAttribute('aria-selected', 'false'));
            item.setAttribute('aria-selected', 'true');
            if (label) label.textContent = item.textContent.trim();
            setOpen(false);

            document.dispatchEvent(new CustomEvent('utility-type-change', {
                detail: { value: item.dataset.value }
            }));
        });
    });

    document.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });
});



function loadViewTop() {
    
    fetch('../Backend/Topconsumers.php') 
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
           
            const tableBody = document.getElementById('top');
            
            if (!tableBody) return;

            tableBody.innerHTML = ''; 

            data.forEach(item => {
                
                const row = `
                    <tr>
                        
                        <td>${item.CustomerID}</td>
                        <td>${item.Utility_Type}</td>
                        <td>${item.Units_Consumed}</td>
                        
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error loading view:', error));
}

// Run it
loadViewTop();