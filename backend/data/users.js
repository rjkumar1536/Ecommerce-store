import bcrypt from "bcryptjs";

const users = [{
    name : "Rajender",
    email: "trozen1557@gmail.com",
    password: bcrypt.hashSync("2014ucp1536"),
    isAdmin: true,
},
{
    name : "Gorishanker",
    email: "2014ucp1536@gmail.com",
    password: bcrypt.hashSync("12345678"),
    isAdmin: true,
},
{
    name : "Govind",
    email: "rajender.kumar6155@gmail.com",
    password: bcrypt.hashSync("12345678"),
    isAdmin: false,
}]

export default users;