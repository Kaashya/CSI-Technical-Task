document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const college = document.getElementById('college').value.trim();

  if (name && email && phone && college) {
    document.getElementById('successMsg').textContent = 'Registration Successful!';
    this.reset();
  } else {
    alert("Please fill all fields correctly.");
  }
});
