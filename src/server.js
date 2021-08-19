import express from "express";
// const express = require("express");
// const app = express();
const PORT = 4000; 

// express app 생성 
const app = express();

// 서버 => request를 listening 중 ..
const handleListening = () => 
    console.log(`여기 http://localhost:${PORT}`);

app.listen(PORT, handleListening)


