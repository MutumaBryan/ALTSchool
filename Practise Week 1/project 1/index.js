function displayUserDetails() {
  let username = prompt("Enter your username");

  if (username === null) return;

  while (!validateUsername(username)) {
    username = prompt("Username is invalid. Enter your username");
  }

  let password = prompt("Enter your password");
  if (password === null) return;

  let confirmpassword = prompt("Confirm your password");
  if (confirmpassword == null) return;

  while (!validatePassWord(password, confirmpassword)) {
    password = prompt("Password invalid. Enter your password");
    confirmpassword = prompt("Confirm your password");
  }

  const userDetails = {
    username: username,
    password: confirmpassword,
  };

  alert(
    `Your username is ${userDetails.username}. Your Password is ${userDetails.password}`
  );
  return;
}

displayUserDetails();

alert("Goodbye!");

function validateUsername(username) {
  if (username == null) {
    return;
  } else if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

function validatePassWord(password, confirmpassword) {
  if (password === null || confirmpassword === null) return;
  else if (password < 6) return false;
  else if (password !== confirmpassword) return false;
  else return true;
}
