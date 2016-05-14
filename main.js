$(function(){

	var model = {
		lastId: 0,
		pizzas: []
	};

	var octopus = {
		init: function() {
			view.init();
		},

		addPizza: function() {
			var thisId = ++model.lastId;
			model.pizzas.push({
				id: thisId,
				visible: true
			})

			view.render();

			console.log(model.pizzas[0]);
			console.log(model.lastId);
		},

		getVisiblePizzas: function() {
			var visiblePizzas = model.pizzas.filter(function(elem, idx) {
				return elem.visible;
			});

			return visiblePizzas;
		}
	};

	var view = {
		init: function() {
			var addPizzaBtn = $('.add-pizza');
			addPizzaBtn.on('click', function(){
				octopus.addPizza();
			})

			this.$pizzaList = $('.pizza-list');
			this.pizzaTemplate = $('script[data-template="pizza"]').html();
			console.log(typeof this.pizzaTemplate, this.pizzaTemplate);

			this.$pizzaList.on('click', '.remove-pizza', function(e) {

			})
		},

		render: function() {
			var $pizzaList = this.$pizzaList,
				pizzaTemplate = this.pizzaTemplate;

				$pizzaList.html('');
				octopus.getVisiblePizzas().forEach(function(elem) {
					var thisTemplate = pizzaTemplate.replace(/{{id}}/g, elem.id);
					$pizzaList.append(thisTemplate);
				})
		}
	};

	octopus.init();
}());