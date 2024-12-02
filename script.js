// Login Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usn = document.getElementById('usn').value;
        // Perform login logic here
        console.log(`Logged in as: ${usn}`);
        window.location.href = 'select.html';
      });
    }
  
    const confirmButton = document.getElementById('confirmSelection');
    if (confirmButton) {
      confirmButton.addEventListener('click', () => {
        // Save elective selection
        console.log('Electives confirmed!');
        window.location.href = 'confirm.html';
      });
    }
  });
  