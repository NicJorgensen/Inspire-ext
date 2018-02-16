function TodoController() {
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	var todoService = new TodoService()
	var todoElem = document.getElementById('todo')

	function getTodos(){
		todoService.getTodos(draw)
	}
 
	function draw(todos) {
		var template = ''
		todos.forEach(todo => {
			template += `
			<h5><input id="checkbox" type="checkbox" onclick="app.controllers.todoCtrl.removeTodo('${todo.id}')">${todo.title} Due: ${todo.due}</h5>
			`
		})
		todoElem.innerHTML = template 
	}

	this.addTodo = function (event) {
		event.preventDefault();
		var form = event.target
		todoService.addTodo(form, draw)
		document.getElementById('todo-form').reset()
	}

	this.toggleTodoStatus = function (todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId, getTodos)
	}

	getTodos()

}
