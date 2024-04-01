const express = require('express');
const data = require("../config/config");
const router=express.Router();
const {examcontroll,searchData,searchField,searchPagination,detailStudent}=require('../controllers/examcontroll');
const {sortingByOrder}=require("../controllers/sortingOredercontroll");
const {attendanceReport}=require("../controllers/attendancecontroll");
const {delimiterSearch,searchWithDelimeter}=require("../controllers/delemetercontroll");
const {insertData,fetchData,updateData,detailUpdate}=require('../controllers/ajxInUpcontroll');
const { route } = require('./registerRouter');
const { auth } = require('../middleware/auth');
const {searchQuery,dynamicPagination}=require('../controllers/dynamicGirdControll');

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

router.get("/jsEvent",(req,res)=>{
  res.render("tasks/form5");
})

router.get('/exam',examcontroll)

router.post('/exam',searchData)

router.post('/exam/sea',searchField)

router.get('/exam/sea/data',searchPagination)

router.get('/exam/:id', detailStudent)

router.get('/sorting', sortingByOrder)

router.get('/attendance', attendanceReport)

router.get('/delimeterSearch',delimiterSearch)

router.post('/delimeterSearch',searchWithDelimeter)


router.get('/fetchInsertUpdate', (req, res) => {
  res.render('AjxInUp/template1');
})

router.post('/fetchInsertUpdate',insertData);

router.get('/fetchInsertUpdate/list',detailUpdate)

router.get('/fetchInsertUpdate/update/:id', (req, res) => {
  res.render('AjxInUp/template1');
})

router.get('/fetchInsertUpdate/data/:id', fetchData);

router.post('/fetchInsertUpdate/update/:id', updateData);

router.get('/dynamicGrid', (req, res) => {
  res.render('dynamicGrid/template1');
})


router.post('/dynamicGrid',searchQuery)

router.get('/dynamicGrid/data',dynamicPagination)




module.exports = router;