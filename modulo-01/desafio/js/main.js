window.addEventListener('load', start);

let users = []

function start() {
  formSubmit();
  fetchUsers();
  getInputData();
}

function formSubmit() {
  function handleSunmit(event) {
    event.preventDefault();
  }
  document.querySelector('form').addEventListener('submit', handleSunmit);
}

