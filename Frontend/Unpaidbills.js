document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown').forEach(dd => {
    const btn = dd.querySelector('.chip');
    const menu = dd.querySelector('.menu');
    const label = dd.querySelector('.chip-label');

    const setOpen = (open) => {
      dd.classList.toggle('open', open);
      if (btn) btn.setAttribute('aria-expanded', String(open));
    };

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!dd.classList.contains('open'));
      });
    }

    menu?.addEventListener('click', (e) => {
      const item = e.target.closest('.menu-item');
      if (!item) return;
      menu.querySelectorAll('.menu-item').forEach(i => i.setAttribute('aria-selected', 'false'));
      item.setAttribute('aria-selected', 'true');
      if (label && btn) label.textContent = `${btn.textContent.split(':')[0].trim()} : ${item.textContent.trim()}`;
      setOpen(false);
      document.dispatchEvent(new CustomEvent('filter-change', {
        detail: { id: dd.id, value: item.dataset.value }
      }));
    });

    document.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  });

  const navButtons = document.querySelectorAll('.nav-button');

  const fallbackPaths = [
    "Genaratereports.php",       
    "Topconsumer.php",
    "Unpaidbills.php",
    "UtilityUsageAnalytics.php"
  ];

  if (navButtons.length > 0) {
    navButtons.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        const dataPath = btn.dataset.path;
        const path = dataPath && dataPath.trim().length > 0 ? dataPath.trim() : (fallbackPaths[index] || null);

        if (!path) {
          console.error('No path available for nav-button at index', index);
          return;
        }

        window.location.assign(path);
      });
    });
  }

  document.getElementById('export-csv')?.addEventListener('click', () => {
    alert('Exporting CSV…');
  });
});

function loadViewData() {
  const backendUrl = '../Backend/Unpaidbill.php';

  fetch(backendUrl)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
      return response.json();
    })
    .then(data => {
      const tableBody = document.getElementById('Unpaid');
      if (!tableBody) {
        console.warn('#Unpaid table body not found');
        return;
      }

      const rows = data.map(item => {
        return `
          <tr>
            <td>${escapeHtml(item.BillID)}</td>
            <td>${escapeHtml(item.CustomerID)}</td>
            <td>${escapeHtml(item.MeterID)}</td>
            <td>${escapeHtml(item.BillingDate)}</td>
            <td>${escapeHtml(item.DueDate)}</td>
            <td>${escapeHtml(item.Payment_Status)}</td>
          </tr>
        `;
      });

      tableBody.innerHTML = rows.join('');
    })
    .catch(error => console.error('Error loading view:', error));
}

function escapeHtml(str) {
  if (str === null || typeof str === 'undefined') return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

loadViewData();
