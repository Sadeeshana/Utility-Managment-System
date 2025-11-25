
document.addEventListener('DOMContentLoaded', function() {
    // Menu active state
    document.querySelectorAll('.menu-link').forEach(function(link){
        link.addEventListener('click', function(e){
            if (link.getAttribute('href') === '#') e.preventDefault();
            document.querySelectorAll('.menu-link').forEach(function(l){ l.classList.remove('is-active'); });
            link.classList.add('is-active');
        });
    });

    // Pagination logic
    var pageGroup = document.querySelector('.page-group');
    if (pageGroup) {
        var currentPage = 1, maxPage = 2;
        function setCurrent(page) {
            currentPage = page;
            pageGroup.querySelectorAll('[data-page]').forEach(function(btn){
                btn.classList.toggle('is-current', parseInt(btn.dataset.page,10) === currentPage);
            });
        }
        pageGroup.addEventListener('click', function(e){
            var btn = e.target.closest('.page-btn');
            if (!btn) return;
            if (btn.dataset.page) setCurrent(parseInt(btn.dataset.page,10));
            else if (btn.dataset.nav === 'prev' && currentPage > 1) setCurrent(currentPage - 1);
            else if (btn.dataset.nav === 'next' && currentPage < maxPage) setCurrent(currentPage + 1);
        });
    }

    // Meter selection buttons
    document.querySelectorAll('.meter-select-btn').forEach(function(btn){
        btn.addEventListener('click', function(){
            var row = btn.closest('tr');
            var selected = row.classList.toggle('meter-selected');
            btn.classList.toggle('select-active', selected);
            btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });
    });
});