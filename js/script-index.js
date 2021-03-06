$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	// ETAPA 1: Ocultar la flecha 
	$(".js-back").hide();

});

// ETAPA 2: AGREGAR A LA ETIQUETA P "NUEVAS RECETAS"
function printNews () {
	$(".callout-news").children()[1].append("NUEVAS RECETAS");
}
printNews ()

/* ETAPA 2: OTRA ALTERNATIVA
function printNews () {
	$(".callout-news p").append("hola");
}
printNews ()
*/

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(e) {
		if (e.highlighted==true) {
			renderRecipe(e);
		}
	});
}
/* ETAPA 3: JQUERY
$(recipesArray).each(function(i, elem){
	if(elem.highlighted == true) {
		renderRecipe(e);
	}
});
    
*/

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


