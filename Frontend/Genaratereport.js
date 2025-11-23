document.addEventListener("DOMContentLoaded", () =>{
    //Get elements
    const calenderMonthYear = document.getElementById("calender-month-year");
    const calenderdaygrid = document.getElementById("calendar-days");
    const PrevMonthButton = document.getElementById("prev-month");
    const NextMonthButton = document.getElementById("next-month");

    //calendar start with today's date
    let currentDate = new Date();

    //Add function for draw the calendar
    function renderCalendar(){
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        calenderMonthYear.textContent = new Intl.DateTimeFormat('en-US',{
            month: 'long',
            year: 'numeric'
        }).format(currentDate);

        // Find first and last day of the month
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

        // Clear old days (keep weekday headers)
        const oldDays = calenderdaygrid.querySelectorAll('.calendar-cell:not(.day-name)');
        oldDays.forEach(cell => cell.remove());

        // Leading empty cells
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("calendar-cell", "empty");
            calenderdaygrid.appendChild(emptyCell);
        }

        // Dates
        for (let i = 1; i <= lastDayOfMonth; i++) {
            const dateCell = document.createElement("div");
            dateCell.classList.add("calendar-cell", "date");
            dateCell.textContent = i;

            const today = new Date();
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dateCell.classList.add("today");
            }

            calenderdaygrid.appendChild(dateCell);
        }
    }

    //Add event listenrs
    //Previous Month
    PrevMonthButton.addEventListener("click", () =>{
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    //Next Month
    NextMonthButton.addEventListener("click", ()=> {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
    




});