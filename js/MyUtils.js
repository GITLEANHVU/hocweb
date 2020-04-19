
function submitLogin() {
  // let email = document.getElementById("inputEmailAddress").value;
  // let password = document.getElementById("inputPassword").value;

  let email = $('#inputEmailAddress').val();
  let password = $('#inputPassword').val();
  console.log('submitLogin : email = ', email);
  console.log('submitLogin : Pwd = ', password);

  sessionStorage.setItem('email', email);
  sessionStorage.setItem('password', password);

  // console.log('email = ' + sessionStorage.getItem('email'));
  // window.location.replace('index.html');

  $.post('http://codelaghien.club/web/login.asp', {
    username: email,
    password: password,
  })
    .done(function (returnedData) {
      console.log(returnedData);
      const myData = JSON.parse(returnedData);
      console.log(myData);
      if (myData['secret-key']) {
        window.location.replace('index.html');
      } else {
        window.alert('khong thanh cong, dang nhap lai');
      }
    })
    .fail(function (xhr, status, error) {
      console.log(error);
    });
}

function logout() {
  //
  sessionStorage.setItem('email', '');
  sessionStorage.setItem('password', '');
  window.location.replace('login.html');
}