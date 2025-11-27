// Simple dropdown behavior and stub export
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown').forEach(dd => {
    const btn = dd.querySelector('.chip');
    const menu = dd.querySelector('.menu');
    const label = dd.querySelector('.chip-label');

    const setOpen = (open) => {
      dd.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };

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

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!dd.classList.contains('open'));
    });

    menu?.addEventListener('click', (e) => {
      const item = e.target.closest('.menu-item');
      if (!item) return;
      menu.querySelectorAll('.menu-item').forEach(i => i.setAttribute('aria-selected', 'false'));
      item.setAttribute('aria-selected', 'true');
      if (label) label.textContent = `${btn.textContent.split(':')[0].trim()} : ${item.textContent}`;
      setOpen(false);
      // Hook for filtering
      document.dispatchEvent(new CustomEvent('filter-change', {
        detail: { id: dd.id, value: item.dataset.value }
      }));
    });

    document.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  });

  document.getElementById('export-csv')?.addEventListener('click', () => {
    alert('Exporting CSV…');
  });
});