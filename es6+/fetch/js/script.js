window.addEventListener('load', function () {
  fetch('https://api.github.com/users/rrgomide').then((res) => {
    // console.log(res);
    res.json().then((data) => {
      showData(data);
    });
  });
});

function showData(data) {
  const userId = document.querySelector('#userId');
  const userName = document.querySelector('#userName');
  userId.textContent = 'id do usuário: ' + data.id;
  userName.textContent = 'nome do usuário: ' + data.name;
  console.log(data);
}
