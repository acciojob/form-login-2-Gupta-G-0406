//your JS code here. If required.
function showAlert(event) {
      event.preventDefault(); // prevent form reload

      let firstName = document.getElementById("fname").value;
      let lastName = document.getElementById("lname").value;
      let phone = document.getElementById("phone").value;
      let email = document.getElementById("email").value;

      alert(
        "First Name: " + firstName + " " +
        "Last Name: " + lastName + " " +
        "Phone Number: " + phone + " " +
        "Email ID: " + email
      );
    }