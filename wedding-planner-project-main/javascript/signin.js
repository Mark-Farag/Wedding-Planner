function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const email = data.get('email');
  const password = data.get('password');

  const obj = {
    email: email,
    password: password,
  };

  console.log(obj);

  getToken(obj);


}

function getToken(obj) {
  const url = 'https://health-call.herokuapp.com/api/v2/users/login';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'shop.html';
        //window.location.replace = 'shop.html';
      } else {
        console.log(data);
        alert('Something went werong!');
      }
    })
    .catch(err => console.log(err));
}
