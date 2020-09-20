function getInputData() {
  const input = document.querySelector('input');
  function handleKeyUp(event) {
    event.key === 'Enter' && event.target.value !== ''
      ? showFilteredUsers(event.target.value)
      : '';
  }
  document.querySelector('input').addEventListener('keyup', handleKeyUp);

  function handleClick() {
    input.value !== '' ? showFilteredUsers(input.value) : '';
  }
  document.querySelector('.button').addEventListener('click', handleClick);
}
