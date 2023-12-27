const { Prisma } = require("@prisma/client");
// const { PrismaClient } = require("@prisma/client");

const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const usersRoute = require("./routers/users");
const cors = require("cors");

// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");

require("dotenv").config();

// const PORT = process.env.PORT || 10000;
const PORT = 5000;

// const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

// 新規ユーザー登録
// app.post("/api/auth/register", async (req,res) => {
//     const { username, email, password } = req.body  
    
//     const hashedPassword = await bcrypt.hash(password,10);

//     const user = await prisma.user.create({
//         data:{
//             username,
//             email,
//             password: hashedPassword,
//         },
//     });
//     return res.json({ user });
// });

// ログイン処理
// app.post("/api/auth/login", async(req, res) => {
//     const { email, password } = req.body;

//     const user = await prisma.user.findUnique({ where: { email } });
//     if(!user){
//         return res.status(401).json({error:"ユーザーが存在しません"});
//     }
//     const isPasswordVaild = await bcrypt.compare(password, user.password);

//     if(!isPasswordVaild){
//         return res.status(401).json({error:"パスワードが間違ってます"});
//     }

//     const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY,{
//         expiresIn: "1d",
//     });

//     return res.json({ token });
// });

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));