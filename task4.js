let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const addData = {
  name: "Akshal Rizki Gandari",
  email: "akshalrizkigandari@gmail.com",
  hobby: ["Watching Movie", "Playing Games", "Traveling"],
};

const newData = { ...data, ...addData };
let { id, name, username, email, address, phone, website } = data;
let { street, suite, city, zipcode } = address;
console.log(newData);
console.log("\n\nStreet : " + street + "\n" + "City : " + "city");
