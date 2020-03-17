//Import dependencies
const express=require('express');
const router=express.Router();
const ProjectsController=require('../controllers/projects.controller');
//Content
//Note: Not localhost:8888 but localhost:8888/project/
router.route('/')
.get(ProjectsController.index);
//Export module
module.exports=router;