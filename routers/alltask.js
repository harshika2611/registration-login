const express = require('express');
const router=express.Router();

router.get("/dynamictable",(req,res)=>{
  res.render("tasks/dynamictable");
})
router.get("/kukucube",(req,res)=>{
  res.render("tasks/kukucube");
})
router.get("/tictactoe",(req,res)=>{
  res.render("tasks/tictactoe");
})
router.get("/selectionSort",(req,res)=>{
  res.render("tasks/selectionSort");
})

module.exports = router;