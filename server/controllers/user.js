import b2b_queries from "../models/user";

export const user = (req, res) => {
    console.log(req.body);
    const user = new b2b_queries(req.body);
    console.log("User created ", user);
}
