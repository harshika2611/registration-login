const express = require('express');
const data = require("../config/config");
const router=express.Router();
const {examcontroll,searchData,searchField,searchPagination,detailStudent}=require('../controllers/examcontroll');
const {sortingByOrder}=require("../controllers/sortingOredercontroll");
const {attendanceReport}=require("../controllers/attendancecontroll");
const { route } = require('./registerRouter');

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

router.get('/exam',examcontroll);


router.post('/exam',searchData);

router.post('/exam/sea',searchField)

router.get('/exam/sea/data',searchPagination)

router.get('/exam/:id', detailStudent)

router.get('/sorting', sortingByOrder)

router.get('/attendance', attendanceReport)

module.exports = router;