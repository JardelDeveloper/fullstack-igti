// load all functions
window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
});

// transform the array in object with name and email
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}
// console.log(people);

// filter all people older than 50 years
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

// include new property in object
function doForEach() {
  const mappedPeople = doMap();
  // console.log('map');
  // console.log(mappedPeople);

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

// sum all ages of people
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;
  // for (let i = 0; i < people.results.length; i++) {
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges);
}

// find first user that live in 'Minas Gerais' city and after, find the first person with sex 'female'
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);

  const foundHer = people.results.find((person) => {
    return person.gender === 'female';
  });

  console.log(foundHer);
}

// verify if there are any user that live in 'Amazonas'
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}
