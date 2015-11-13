var TodoItems = Backbone.Collection.extend({
	model: TodoItem,

	url: "api/todos.json"
});