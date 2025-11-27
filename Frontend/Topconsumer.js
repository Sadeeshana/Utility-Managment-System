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


// ================================
// UTILITY TYPE DROPDOWN BEHAVIOR
// ================================
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


// ================================
// TIME PERIOD MONTH PICKER
// ================================
document.addEventListener('DOMContentLoaded', () => {
    const btn   = document.getElementById('time-period-btn');
    const label = document.getElementById('time-period-label');
    const input = document.getElementById('time-period-input');
    if (!btn || !input || !label) return;

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
            input.showPicker();
        } else {
            input.click();
        }
    });

    input.addEventListener('change', () => {
        label.textContent = formatLabel(input.value);
        document.dispatchEvent(new CustomEvent('time-period-change', {
            detail: { value: input.value }
        }));
    });
});
