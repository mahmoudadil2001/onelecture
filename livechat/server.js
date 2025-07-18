const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public")); // نخلي ملفات HTML و CSS موجودة

io.on("connection", (socket) => {
    console.log("🔵 مستخدم دخل");

    socket.on("sendMessage", (message) => {
        io.emit("newMessage", message); // نرسل الرسالة لكل المستخدمين
    });

    socket.on("disconnect", () => {
        console.log("🔴 مستخدم خرج");
    });
});

server.listen(3000, () => {
    console.log("🔧 السيرفر يعمل على http://localhost:3000");
});