const users = [
  { id: 1, name: "Abdo" },
  { id: 2, name: "Hossam" },
  { id: 3, name: "Ahmed" }
];

const dummyServer = id => {
  if (!id) {
    throw new Error("you must provide user id");
  }
  const user = users.find(user => user.id === id);
  if (user) return user;
  throw new Error("No user found");
};

const request = (id, callback) => {
  try {
    let user = dummyServer(id);
    callback(user, null);
  } catch (err) {
    callback(null, err.message);
  }
};

const getUser = (res, err) => {
  if (err) console.log(err);
  else console.log(res);
};
request(2, getUser);
