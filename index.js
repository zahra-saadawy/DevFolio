// const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

// dropdownToggle.forEach((toggle) => {
//   toggle.addEventListener('click', () => {
//     const dropdownMenu = toggle.nextElementSibling;
//     dropdownMenu.classList.toggle('show');
//   });
  

// });
var dropdownToggle = document.getElementById('innerDropdownMenuButton');
dropdownToggle.addEventListener('click', function() {
  var dropdownMenu = dropdownToggle.nextElementSibling;
  dropdownMenu.classList.toggle('show');
});

