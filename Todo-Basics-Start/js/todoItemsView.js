var TodoItemsView = Backbone.View.extend({
	id: "todoItemsContainer",
	
	initialize: function(options){
		if(!(options && options.model))
			throw new Error("Model is not specified")

		this.model.on('add', this.onAddTodoItem, this);
		this.model.on('remove', this.onRemoveTodoItem, this);
	},

	onAddTodoItem: function(todoItem){
		var view = new TodoItemView({model: todoItem});
		this.$('#todoItems').append(view.render().$el);
	},

	onRemoveTodoItem: function(todoItem){
		this.$('li#' + todoItem.id).remove();
	},

	events:{
		'keypress #newToDoItem': 'onKeyPress'
	},

	onKeyPress: function(e){
		if (e.keyCode == 13) {
			var $textBox = this.$('#newToDoItem');

			if ($textBox.val()){
				var todoItem = new TodoItem({ title: $textBox.val() });
				this.model.create(todoItem);
				$textBox.val("");			
			}
		}
	},
	
	render: function(){
		var template = $('#toDoItemsHeader').html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
	}
});