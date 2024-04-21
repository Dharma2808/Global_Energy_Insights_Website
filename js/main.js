/**
 * Your JS code here\
 
 */
document.addEventListener('DOMContentLoaded', function() {
  const editButtons = document.querySelectorAll('.edit-btn');
  const editFormContainer = document.getElementById('editFormContainer');
  const editForm = document.getElementById('editForm');
  const cancelEditButton = document.querySelector('.cancel-edit');

  // Function to populate edit form fields with user data
  function populateEditForm(firstName, lastName, email) {
      document.getElementById('editFirstName').value = firstName;
      document.getElementById('editLastName').value = lastName;
      document.getElementById('editEmail').value = email;
  }

  // Event listener for "Edit" button clicks
  editButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Get the corresponding row data
          const row = this.closest('tr');
          const firstName = row.cells[0].textContent;
          const lastName = row.cells[1].textContent;
          const email = row.cells[2].textContent;

          // Populate the edit form with the row data
          populateEditForm(firstName, lastName, email);

          // Display the edit form
          editFormContainer.style.display = 'block';
      });
  });

  // Event listener for "Cancel" button click
  cancelEditButton.addEventListener('click', function() {
      // Hide the edit form
      editFormContainer.style.display = 'none';
  });

  // Event listener for edit form submission
  editForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Here you can handle the form submission, for example:
      const updatedFirstName = document.getElementById('editFirstName').value;
      const updatedLastName = document.getElementById('editLastName').value;
      const updatedEmail = document.getElementById('editEmail').value;

      // Update the corresponding row data (e.g., update the DOM or send AJAX request)

      // After handling the submission, hide the edit form
      editFormContainer.style.display = 'none';
  });
});

$(document).ready(function(){
  $('#mycarousel').carousel({interval : 2000});
  $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
          $("#mycarousel").carousel('pause');
          $("#carouselButton").children("span").removeClass('fa-pause');
          $("#carouselButton").children("span").addClass('fa-play');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')){
          $("#mycarousel").carousel('cycle');
          $("#carouselButton").children("span").removeClass('fa-play');
          $("#carouselButton").children("span").addClass('fa-pause');                    
      }
  });
})

$(document).ready(function(){
$('#mybtn').click(function(){
    $('#reservemodal').modal('toggle');
});
});

$(document).ready(function(){
$('#login').click(function(){
    $('#loginModal').modal('toggle');
});
});


/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});
