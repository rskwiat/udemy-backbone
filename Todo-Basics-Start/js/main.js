$(function(){

	var todoItems = new TodoItems();
	todoItems.fetch({
		success: function(){
			
		}
	});
	
	var todoItemsView = new TodoItemsView({model: todoItems });
	$('body').append(todoItemsView.render().$el);	
	
	
});


