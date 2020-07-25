// Definition of a global variable
let globalNames = [];
let inputName = null;
let currentIndex = null;
let isEditing = false;

// Initializing correctly the page
window.addEventListener('load', () => {
  // Getting inputName and declaring other functions
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
});

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
    // globalNames.push(newName);
    globalNames = [...globalNames, newName];
    // console.log(globalNames);
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  function handleTyping(event) {
    // console.log(event);
    var hasText = !!event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      clearInput();
      return;
    }

    if (event.key === 'Enter') {
      if (isEditing) {
        console.log('Editing...');
        updateName(event.target.value);
      } else {
        console.log('Inserting...');
        insertName(event.target.value);
      }

      render();
      isEditing = false;
      clearInput();
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
      // globalNames.splice(index, 1);

      // globalNames = globalNames.filter((name, i) => {
      //   if (i === index) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // });

      globalNames = globalNames.filter((_, i) => i !== index);

      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }

  // Edit item
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  // divNames.innerHTML = '<ul><li>Nome 1</li><li>Nome 2</li></ul>';

  // Create ul
  // Make n li's, according the size of globalNames
  var ul = document.createElement('ul');

  for (i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

// Clear input after submit
// function clearInput() {
//   inputName.value = '';
//   inputName.focus();
// }

const clearInput = () => {
  inputName.value = '';
  inputName.focus();
};
