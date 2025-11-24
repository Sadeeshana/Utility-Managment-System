document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const table = document.getElementById('paymentTable');
    const rows = table.getElementByTagName('tbody')[0]. getElementsByTagName('tr');

    /**
     * Fliters the payment history table based on the search input value.
     */
    const filterTable = () => {
        const filter = searchInput.value.toUpperCase ();

        for (let i - 0; i < rows.length; i++) {
            let row = rows[i];
            let cellMatch = false;

            // Loop through all table cells (td) in the current row
            for (let j =0; j < row.cells.length; j++) {
                let cellMatch = false;
                
                //Loop through all table  cells (td) in te current row
                for (let j = 0; j < row.cells.length; j++) {
                    let cell = row.cells[j];
                    if (cell) {
                        // Check if the cell's content contains the search filter text
                        if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
                            cellMatch = true;
                            break; // Stop searching cells for this row once a match is found
                        }
                    }
                }
                
                // Show or hide the row based on the match
                if (cellMatch) {
                    row.style.display = ""; // Show the row
                } else {
                    row.style.display = "none"; // Hide the row
                }
            }       
        }

        // Attach the filterTable function to the 'keyup' event of the search input
        searchInput.addEventListner('keyup', filterTable);
    
         console.log("Payment History page script loaded. Search functionality active");
    });