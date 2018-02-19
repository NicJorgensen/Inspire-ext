function TodoService() {
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/nic'

	function logError(err) {
		swal("Oops!", "Something Went Wrong", "error");
		console.log(err)
	}

	function Todo(formData) {
		this.title = formData.title.value,
			this.due = formData.due.value
	}

	this.getTodos = function (cb) {
		$.get(baseUrl)
			.then(function (res) {
				todoList = res
				cb(todoList)
			})
			.fail(logError)
	}

	this.addTodo = function (formData, cb) {
		var newTodo = new Todo(formData)
		debugger
		$.post(baseUrl, newTodo)
			.then(newTodo => {
				todoList.push(newTodo)
				cb(todoList)
			})
			.then(res => {
				this.getTodos(cb)
			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, cb) {
		$.ajax({
			url: baseUrl + "/" + todoId,
			method: 'DELETE'
		})
			.then(res => {
				this.getTodos(cb)
			})
	}



}
