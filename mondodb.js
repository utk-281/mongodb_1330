// let, var, const

let arrNames = ["john", "doe", "tom", "jane"];
// console.log(arrNames[5]);

// length of arr => total number of elements
//! last index ==> length -1

let arrNum = [1, 2, 3, 4, 4.5, 5, 6];

// l

// let emp = {
//   name: "john",
//   id: 34,
//   1: "value1",
//   2: "value2",
// };

// emp.name = "new value";
// emp.id = 122;
// console.log(emp);
// console.log(emp.1);
// console.log(emp[1]);
// console.log(emp["name"]);

let object = {
  key1: "string",
  key2: 123,
  key3: 123.345,
  key4: true,
  key5: undefined,
  key6: null,
  key7: { a: 1, b: 2, c: 3 },
  key8: [1, 23],
  key9: function () {},
  key10: new Date(),
};

// https://docs.google.com/forms/d/e/1FAIpQLSfkiVAHQpu91fS9Mynm3NHR5TKwYwKckjrPkMU7KXAGUfE1HA/viewform

db.users.insertMany([
  { name: "ashwin", age: 34, gender: "male", skills: ["html", "css"] },
  { name: "varun", age: 33, gender: "male", skills: ["java", "sql"] },
  { name: "chetna", age: 33, gender: "female", skills: ["sql", "html"] },
  { name: "sirisha", age: 34, gender: "female", skills: ["react", "js"] },
  { name: "bhumika", age: 34, gender: "female", skills: ["js", "php"] },
]);

db.users.updateOne({ userName: "chetna A" }, { $set: { username: "chetna" } });

db.emp.find({ $and: [{ sal: { $gt: 1100 } }, { sal: { $lt: 2000 } }] });

db.emp.find(
  {
    $and: [{ deptNo: { $eq: 20 } }, { job: "manager" }],
  },
  { empName: 1, hireDate: 1, _id: 0 }
);

db.emp.find(
  { $or: [{ deptNo: 20 }, { deptNo: 30 }] },
  {
    empName: 1,
    _id: 0,
  }
);

db.emp.find({
  $or: [{ deptNo: 20 }, { job: "clerk" }, { job: "salesman" }],
});

db.emp.find({
  $and: [{ deptNo: 20 }, { $or: [{ job: "clerk" }, { job: "salesman" }] }],
});

user = {
  _id: ObjectId("67e65fdc1b5229966acb0ce3"),
  id: "12345676",
  name: "san",
  city: "chennai",
  skills: [
    { category: "frontend", technologies: ["react", "java"], proficiency: "adv" },
    { category: "frontend", technologies: ["react", "java"], proficiency: "adv" },
  ],
  age: 25,
  gender: "m",
  address: {
    pincode: 12344,
    city: "chennai",
    state: "tamil Nadu",
  },
};

db.books.find({
  $and: [
    { $and: [{ price: { $gt: 20 } }, { price: { $lt: 50 } }] },
    {
      category: { $in: ["science", "fiction"] },
    },
  ],
});

db.emp.find({ hireDate: { $lt: new Date("01/01/1987") } });

db.emp.find({
  $and: [
    { hireDate: { $gt: new Date("31 dec1980") } },
    { hireDate: { $lt: new Date("01 jan 1982") } },
  ],
});
db.emp.find({
  $and: [
    { hireDate: { $gte: new Date("1 jan 1981") } },
    { hireDate: { $lte: new Date("31 dec 1981") } },
  ],
});

db.users.find({ "phone no": 1234567 });
db.users.findOne({ "address.city": "def" });
