function renderUsers(usersFiltered) {
  const showUsers = document.querySelector('.show-users');
  showUsers.innerHTML = `<h2>${usersFiltered.length} usuário(s) encontrado(s)</h2>`;
  const ul = document.createElement('ul');
  usersFiltered.forEach(({ name, age, picture }) => {
    let li = document.createElement('li');
    li.innerHTML = `<li class="flex-row space-bottom">
    <img class="img" src="${picture}" alt="${name}"/>
    <span>${name}, ${age} anos</span>
    </li>`;
    ul.appendChild(li);
  });
  showUsers.appendChild(ul);
}
