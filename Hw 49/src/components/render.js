function renderUsers(users) { 
    const userList = document.createElement("ul");
  
    users.forEach(user => {
      const userItem = document.createElement("li");
      userItem.textContent = `${user.id}: ${user.name}, ${user.age}, ${user.email}, ${user.country}, ${user.company}, ${user.birthday}`;
      userList.append(userItem);
    });
  
    document.body.append(userList);
  }


export default renderUsers;
