
document.getElementById('registerForm').addEventListener('submit',async function (e) {
  e.preventDefault();//default information submit


  const messageDiv = document.getElementById('responseMessage')
  const formData = new FormData(this);

  //Send data to the php file
  fetch("Php/CustomerReg.php",{
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    //Show the php registration message
    messageDiv.textContent = data;

    if(data.includes("Successful")){
      this.reset(); // Clear the form on success
    }
  })
  .catch(error => {
    messageDiv.textContent = "Error:" + error;
  });


});

