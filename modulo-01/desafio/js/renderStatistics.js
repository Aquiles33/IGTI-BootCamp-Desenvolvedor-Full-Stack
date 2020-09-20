function renderStatistics(usersFiltered) {
  const male = usersFiltered.filter(({ gender }) => {
    return gender === 'male';
  }).length;
  const female = usersFiltered.filter(({ gender }) => {
    return gender === 'female';
  }).length;
  const sunAges = usersFiltered.reduce((total, next) => {
    return total + next.age;
  }, 0);
  const avgAges = sunAges / usersFiltered.length || 0;
  document.querySelector('.show-statistics').innerHTML = `
  <h2>Estatísticas</h2>
  <ul>
    <li>Nomes Masculinos: <strong>${male}</strong></li>
    <li>Nomes Femininos: <strong>${female}</strong></li>
    <li>Soma das idades: <strong>${sunAges}</strong></li>
    <li>Média das idades: <strong>${avgAges.toFixed(2)}</strong></li>
  </ul>`;
}
