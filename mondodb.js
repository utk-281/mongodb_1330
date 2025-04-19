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

db.games.insertMany([
  { id: 123, highScore: 230, minScore: 120 },
  { id: 234, highScore: 900, minScore: 90 },
]);

db.games.updateOne({ id: 123 }, { minScore: { $min: 500 } });

db.users.updateOne({ name: "ashwini" }, { $set: { name: "ashwin" } }, { upsert: false });

let doc = {
  name: string,
  age: number,
  isHavingInsurance: boolean,
};

//! to define a schema
db.createCollection("usersInfo", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Name", "age", "isHavingInsurance"],
      properties: {
        name: {
          bsonType: "string",
          description: "name must be of type string",
        },
        age: {
          bsonType: "number",
          description: "pass a number",
        },
        isHavingInsurance: {
          bsonType: "bool",
          description: "pass a boolean",
        },
      },
    },
  },
});

db.usersInfo.insertOne({ name: "abc", age: 34, isHavingInsurance: true });

let user1 = {
  Name: String,
  contact: Number,
  address: {
    city: String,
    pinCode: Number,
  },
};

db.createCollection("coll1", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Name", "contact", "address"],
      properties: {
        Name: {
          bsonType: "string",
        },
        contact: {
          bsonType: "number",
        },
        address: {
          bsonType: "object",
          required: ["city", "pinCode"],
          properties: {
            city: {
              bsonType: "string",
            },
            pinCode: {
              bsonType: "number",
            },
          },
        },
      },
    },
  },
});
db.coll1.insertOne({
  Name: "abc",
  contact: 123456,
  address: {
    city: "chennai",
    pinCode: 123456,
  },
});

db.createCollection("col2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "skills"],
      properties: {
        name: {
          bsonType: "string",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
});

{
  name;
}

db.createCollection("col3", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "skills"],
      properties: {
        name: {
          bsonType: "string",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["frontend"],
            properties: {
              frontend: {
                bsonType: "array",
                items: {
                  bsonType: "string",
                },
              },
            },
          },
        },
      },
    },
  },
});

let user = {
  name: "utk",
  id: 123,
  address: {
    city: "Noida",
  },
  contact: {
    email: "",
    phoneNO: 1234,
  },
};
//! nested or embedded

db.users.insertOne({
  name: "abc",
  age: 34,
  address: {
    city: "Noida",
  },
  contact: {
    email: "abc@gmail.com",
  },
});

db.userInfo.insertMany([
  { name: "abc", age: 34 },
  { name: "def", age: 35 },
]);

db.address.insertMany([{ city: "delhi" }, { city: "noida" }]);

db.userInfo.updateOne({ name: "def" }, { $set: { addressDetails: "67fe1ac8b191df32c5cb0ce7" } });

// db.userInfo.aggregate([
//   {
//     $lookup: {
//       from: "address",
//       localField: "addressDetails",
//       foreignField: "_id",
//       as: "addressDetails",
//     },
//   },
// ]);

db.collection_name.aggregate([
  {
    $match: {
      job: "salesman",
    },
  },
  {
    $project: {},
  },
]);

//! fetch all the users who are working as salesman
db.emp.aggregate([
  {
    $match: {
      job: "salesman",
    },
  },
]);

//! fetch all the users name who are working as salesman
db.emp.aggregate([
  {
    $match: {
      $and: [{}, {}],
    },
  },

  {
    $project: {
      empName: 1,
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
    },
  },
]);
//! whenever we are passing document key as a value we should prefix it by "$"

db.emp.aggregate([
  {
    $group: {
      _id: "$salesman",
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      numberOfEmp: { $sum: 1 },
      maximumSalary: { $max: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      totalSal: { $sum: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      empName: {
        $regex: /a/,
      },
    },
  },
  {
    $project: {
      _id: 0,
      ENAME: "$empName",
    },
  },
]);

db.collection_name.aggregate([
  {
    $addFields: {
      keyName: { value },
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      annualSalary: {
        $multiply: ["$sal", 12],
      },
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      annualSalary: {
        $multiply: ["$sal", 12],
      },
    },
  },
  {
    $match: {
      annualSalary: { $gt: 20000 },
    },
  },
  {
    $project: {
      empName: 1,
      _id: 0,
      annualSalary: 1,
    },
  },
]);

//! display the emp names along with count in each department
db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      count: { $sum: 1 },
      employeeNames: { $push: "$empName" },
    },
  },
  {
    $project: {
      deptNumber: "$_id",
      _id: 0,
      count: 1,
      employeeNames: 1,
    },
  },
]);

// db.users.find({
//   $and: [{ deptNo: { $in: [10, 30] } }, { job: "clerk" }],
// });

db.emp.aggregate([
  {
    $addFields: {
      midTermSal: {
        $multiply: ["$sal", 6],
      },
    },
  },
  {
    $match: {
      midTermSal: { $lt: 10000 },
      job: "clerk",
      deptNo: { $in: [10, 30] },
      empName: { $regex: /a/ },
    },
  },
]);
db.emp.aggregate([
  {
    $addFields: {
      midTermSal: {
        $multiply: ["$sal", 6],
      },
    },
  },
  {
    $match: {
      $and: [
        { midTermSal: { $lt: 10000 } },
        { job: "clerk" },
        { deptNo: { $in: [10, 30] } },
        { empName: { $regex: /a/ } },
      ],
    },
  },
]);

db.emp.aggregate([
  {
    $project: {
      empName: 1,
      sal: 1,
      _id: 0,
    },
  },
  {
    $sort: {
      sal: 1, // the first key will be arranged in the order
      empName: -1,
    },
  },
]);
db.emp.aggregate([
  {
    $project: {
      empName: 1,
      sal: 1,
      _id: 0,
    },
  },
  {
    $sort: {
      empName: -1,
    },
  },
  {
    $sort: {
      sal: 1, // last $sort stage is getting considered
    },
  },
]);
db.emp.aggregate([
  {
    $project: {
      sal: 1,
      _id: 0,
    },
  },
  {
    $sort: {
      sal: 1, // last $sort stage is getting considered
    },
  },
  {
    $skip: -4,
  },
]);

db.emp.aggregate([
  {
    $project: {
      empName: 1,
      sal: 1,
      _id: 0,
    },
  },
  {
    $sort: {
      sal: -1,
    },
  },
  { $skip: 3 },
  { $limit: 1 },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$sal",
      empNames: { $push: "$empName" },
    },
  },
  {
    $sort: {
      _id: -1,
    },
  },
  { $skip: 3 },
  { $limit: 1 },
]);

//! count the number of employees in each department
db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      count: { $sum: 1 },
    },
  },
]);

//! show the total number of employees in each department where count is greater than 5
db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      totalNumberOfEmp: { $sum: 1 },
    },
  },
  {
    $match: {
      totalNumberOfEmp: { $gt: 5 },
    },
  },
]);

//! display the maximum salary given along with department number in each job where maximum salary is greater than 3500
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      maximumSalary: { $max: "$sal" },
      // departmentNumber: { $push: "$deptNo" }, // it will add elements in an array at last position and will also allow duplicates
      depNo: { $addToSet: "$deptNo" }, // it will add elements in an array at last position and will not allow duplicates
    },
  },
  {
    $match: {
      maximumSalary: { $gt: 3500 },
    },
  },
]);

//! write the details of emp who were hired in year 1981
db.emp.aggregate([
  {
    $addFields: {
      myYear: { $year: "$hireDate" },
      myMonth: { $month: "$hireDate" },
      myDay: { $dayOfMonth: "$hireDate" },
    },
  },
  {
    $match: {
      year: { $eq: 1981 },
    },
  },
]);

//! display the total salary needed to pay to all the employees
db.emp.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$sal" },
    },
  },
]);

//! find total salary need to pay to all employees working as clerk
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      totalSalary: { $sum: "$sal" },
    },
  },
  {
    $match: {
      _id: "clerk",
    },
  },
]);
db.emp.aggregate([
  {
    $match: {
      job: "clerk",
    },
  },
  {
    $group: {
      _id: "$job",
      totalSalary: { $sum: "$sal" },
    },
  },
]);

//! display the details of emo along with their department details
db.emp.aggregate([
  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptNo",
    },
  },
]);
