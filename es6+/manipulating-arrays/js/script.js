window.addEventListener('load', () => {
  const nameEmailArray = people.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
});
// console.log(people);
