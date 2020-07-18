// Initializing correctly the page
window.addEventListener('load', start);

// Definition of a global variable
var globalNames = [];
var inputName = null;

// Getting inputName and declaring other functions
function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
}

// Prevent submitting the input of the names
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var formName = document.querySelector('#formName');
  formName.addEventListener('submit', handleFormSubmit);
}

// Activate onfocus in input
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    // console.log(globalNames);
    render();
  }
  function handleTyping(event) {
    // console.log(event);
    if (event.key === 'Enter') {
      // console.log('Enter');
      // console.log(event.target.value);
      insertName(event.target.value);
      // var typedName = event.target.value;
      // globalNames.push(typedName);
    }
  }

  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      // console.log('deleteName');
      // console.log(index);
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';

    button.addEventListener('click', deleteName);

    return button;
  }
  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  // divNames.innerHTML = '<ul><li>Nome 1</li><li>Nome 2</li></ul>';

  // Create ul
  // Make n li's, according the size of globalNames
  var ul = document.createElement('ul');
  // var li1 = document.createElement('li');
  // var li2 = document.createElement('li');
  // li1.textContent = 'Primeiro';
  // li2.textContent = 'Segundo';
  // ul.appendChild(li1);
  // ul.appendChild(li2);
  for (i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);

    var span = document.createElement('span');
    span.textContent = currentName;

    li.appendChild(button);
    li.appendChild(span);
    // li.textContent = currentName;
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

// Clear input after submit
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
