// Utility Type dropdown behavior
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
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
});

// Time period month picker
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('time-period-btn');
  const label = document.getElementById('time-period-label');
  const input = document.getElementById('time-period-input');
  if (!btn || !input || !label) return;

  // Initialize to current month
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  input.value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}`;
  const formatLabel = (yyyyMm) => {
    const [y, m] = yyyyMm.split('-').map(Number);
    const d = new Date(y, m - 1, 1);
    const sameMonth = y === now.getFullYear() && (m - 1) === now.getMonth();
    return sameMonth
      ? 'This Month'
      : d.toLocaleString(undefined, { month: 'long', year: 'numeric' });
  };
  label.textContent = formatLabel(input.value);

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof input.showPicker === 'function') {
      input.showPicker(); // modern browsers
    } else {
      input.click(); // fallback
    }
  });

  input.addEventListener('change', () => {
    label.textContent = formatLabel(input.value);
    document.dispatchEvent(new CustomEvent('time-period-change', {
      detail: { value: input.value }
    }));
  });
});