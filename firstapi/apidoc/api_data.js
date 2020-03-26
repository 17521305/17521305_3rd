define({ "api": [
    {
    "type": "GET",
    "url": "/api/v1/todos/:id",
    "title": "Get Task",
    "version": "0.3.0",
    "name": "getOne",
    "group": "Task",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>Get one task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of todo task</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:5000/api/v1/todos/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the task</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"todos\":{\n         \"id\": \"1\",\n         \"title\": \"lunch\",\n         \"description\": \"Go for lunch by 2pm\",\n},\n     \"success\": \"true\",\n     \"message\": \"todo retrieved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>todo doesn't exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"success\": \"false\",\n  \"message\": \"todo does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./route/index.js",
    "groupTitle": "Task"
    }
] });
