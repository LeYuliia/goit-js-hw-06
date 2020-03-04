import users from "./users.js";
//Задача 1
const getUserNames = users => {
  return users.map(users => users.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Задача 2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Задача 3
const getUsersWithGender = (users, gender) => {
  const showGender = users.filter(user => user.gender === gender);
  return showGender.map(showGender => showGender.name);
};
console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Задача 4
const getInactiveUsers = users => {
  return users.filter(users => users.isActive === false);
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Задача 5
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {объект пользователя Elma Head}

//Задача 6
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => max > user.age && user.age > min);
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Задача 7

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//Задача 8
const getUsersWithFriend = (users, friendName) => {
  const showName = users.filter(user => user.friends.includes(friendName));
  return showName.map(showName => showName.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
//[ 'Sharlene Bush', 'Sheree Anthony']
console.log(getUsersWithFriend(users, "Goldie Gentry"));
//[ 'Elma Head', 'Sheree Anthony']

//Задача 9

const getNamesSortedByFriendsCount = users => {
  const friendsCount = users.filter(users => (users.friends = users.friends.length));
  const sorted = friendsCount.sort((a, b) => a.friends - b.friends);
  return sorted.map(sorted => sorted.name);
};
console.log(getNamesSortedByFriendsCount(users));
//[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Задача 10

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce(function(skills, user) {
    skills.push(...user.skills);
    return skills;
  }, []);

  const uniqueSkills = allSkills.reduce(function(total) {
    allSkills.forEach(skill => {
      if (total.includes(skill) === false) {
        total.push(skill);
      }
    });
    return total;
  }, []);

  return uniqueSkills.sort();
};
console.log(getSortedUniqueSkills(users));
//[ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
