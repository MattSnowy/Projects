// const student = {
//   firstName: "Dora",
//   lastName: "Ji",
//   age: 11,
//   isMarried: false,
//   bestfriends: ["Josephine", "Sophia"],
//   enemies: ["derek", "aaron", "anson"],
//   sibling: {
//     firstName: "derek",
//     lastName: "ji",
//     age: 9,
//     isMarried: true,
//     isLegalTODrive: false,
//     bestfriends: ["claire", "glory"],
//     enemies: ["bryce", "maxton"],
//     wife: {
//       firstName: "claire",
//       lastName: "chou",
//       age: 10,
//       isMarried: true,
//       bestfriends: ["darryn", "dora"],
//     },
//   },
// };

const dora = {
  firstName: "Dora",
  lastName: "Ji",
  age: 11,
  isMarried: false,
  bestfriends: ["Josephine", "Sophia"],
  enemies: ["derek", "aaron", "anson"],
  sibling: {
    firstName: "derek",
    lastName: "ji",
    age: 9,
    isMarried: true,
    isLegalTODrive: false,
    bestfriends: ["claire", "glory"],
    enemies: ["bryce", "maxton"],
    wife: {
      firstName: "claire",
      lastName: "chou",
      age: 10,
      isMarried: true,
      bestfriends: ["darryn", "dora"],
    },
  },
};
// console.log(student.firstName);
// console.log(student.sibling.wife.firstName);
// console.log(student.bestfriends.length);
// console.log(student.bestfriends[1]);
// console.log(student.enemies[2]);

// student.enemies.push("kevin");
// student.enemies[3] = "aaron";

// const result = student.enemies.splice(0, 4);
// console.log(result);

// const dereksWife = student.sibling.wife;
// const bestfriends = dereksWife.bestfriends.splice(0, 1);
// const firstBestFriend = bestfriends[0];
// student.sibling.enemies.push(firstBestFriend);

// student.sibling.bestfriends.unshift(
//   dereksWife.bestfriends.splice(dereksWife.bestfriends.indexOf("darryn"), 1)[0]
// );

// console.log(student.sibling.bestfriends);

// console.log(student.sibling.wife.bestfriends);

dora.bestfriends.push(
  dora.sibling.bestfriends.splice(dora.sibling.bestfriends, 1)[0]
);

console.log(dora.bestfriends);

console.log(dora.sibling.bestfriends);
