let user = JSON.parse(localStorage.getItem('user')) || {
  user_id: null,
  rolId: null,
  email: null,
  name: null
};

function getUser() {
  return user;
}

function setUser(newUser) {
  user = newUser;
  localStorage.setItem('user', JSON.stringify(user));
}

export { getUser, setUser };
