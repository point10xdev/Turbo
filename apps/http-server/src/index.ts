import express from "express";
import { client } from "@repo/db";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello From The Http Server!");
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const user = await client.user.create({
        data: {
            email : email as string,
            password : password as string
        }
    })
    
    res.json({
        message : "User Created Successfully",
        id : user.id 
    });
});

app.listen(3001, () => {
    console.log("Http Server is running on port 3000");
});