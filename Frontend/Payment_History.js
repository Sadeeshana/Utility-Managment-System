document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const table = document.getElementById('paymentTable');
    const rows = table.getElementByTagName('tbody')[0]. getElementsByTagName('tr');

    
    const filterTable = () => {
        const filter = searchInput.value.toUpperCase ();

        for (let i - 0; i < rows.length; i++) {
            let row = rows[i];
            let cellMatch = false;

            for (let j =0; j < row.cells.length; j++) {
                let cellMatch = false;
                
                for (let j = 0; j < row.cells.length; j++) {
                    let cell = row.cells[j];
                    if (cell) {
                        if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
                            cellMatch = true;
                            break; 
                        }
                    }
                }
                
                if (cellMatch) {
                    row.style.display = ""; // Show the row
                } else {
                    row.style.display = "none"; // Hide the row
                }
            }       
        }

        searchInput.addEventListner('keyup', filterTable);
    
         console.log("Payment History page script loaded. Search functionality active");
    });