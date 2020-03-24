import express from 'express';
import TodoController from '../todosController/todos';

const router = express.Router();

router.get('/api/v1/todos', TodoController.getAllTodos);
/**
     * @api {GET} /api/v1/todos/:id Get One
     * @apiVersion 0.3.0
     * @apiName getOne
     * @apiGroup Task
     * @apiPermission Every type of user
     *
     * @apiDescription Get one Todo Task
     *
     * @apiParam {Number} id ID of task, on params
     *
     * @apiExample Example usage:
     * curl -i localhost:5000/api/v1/todos/1
     *
     * @apiSuccess {String} title Title of the task
     * @apiSuccess {String} description description of the task
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "success": "true",
     *          "message": "todo retrieved successfully",
     *          "todos":{
     *              "id": "1",
     *              "title": "lunch",
     *              "description": "Go for lunch by 2pm"
     *          },
     *     }
     *
     * @apiError todo doesn't exist
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "success":"false",
     *       "message": "todo does not exist"
     *     }
     */
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

export default router;
