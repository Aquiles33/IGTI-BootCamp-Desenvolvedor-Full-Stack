function showFilteredUsers(userData) {
  const usersFiltered = users.filter(({ nameLowerCase }) => {
    return nameLowerCase.includes(userData.toLowerCase());
  });
  renderUsers(usersFiltered);
  renderStatistics(usersFiltered);
}
