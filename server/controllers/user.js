import User from "../models/user";

export const user = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    console.log("User created ", user);
}