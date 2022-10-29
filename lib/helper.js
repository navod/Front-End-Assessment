export const getUsers = async () => {
  const users = await fetch("https://randomuser.me/api/?results=560");
  const json = users.json();

  return json;
};
