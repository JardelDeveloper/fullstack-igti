// load all functions
window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
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

// find the first user that lives in 'Minas Gerais' city and then find the first person with 'female' gender
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

// verify if all users with 'nat' equal 'US'
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'US';
  });

  console.log(every);
}

// order something specific
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => person.startsWith('A'))
    .sort();

  console.log(mappedNames);

  const mappedNumbers = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      // return a.name.localeCompare(b.name);
      return b.name.length - a.name.length;
    });

  console.log(mappedNumbers);
}
