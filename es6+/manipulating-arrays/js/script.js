window.addEventListener('load', () => {
  doMap();
  // doFilter();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);
}
// console.log(people);
