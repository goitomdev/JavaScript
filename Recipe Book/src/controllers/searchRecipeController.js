
function handleSearchRecipe(query) { 
    model.inputs.search.query = query;
    updateRecipeList(); 
    updateClearButton(); 
}

// Finner og returnerer oppskrifter som samsvarer med brukerens søkeord
function searchRecipes(query, recipes) {
    let matchingRecipes = [];
    let queryLowerCase = query.toLowerCase();

    for (let recipe of recipes) {
        let titleMatch = recipe.title.toLowerCase().indexOf(queryLowerCase) !== -1;

        let tagMatch = false;
        for (let tag of recipe.tags) {
            if (tag.toLowerCase().indexOf(queryLowerCase) !== -1) {
                tagMatch = true;
                break;
            }
        }

        let ingredientMatch = false;
        for (let ingredient of recipe.ingredients) {
            if (ingredient.toLowerCase().indexOf(queryLowerCase) !== -1) {
                ingredientMatch = true;
                break;
            }
        }

        if (titleMatch || tagMatch || ingredientMatch) {
            matchingRecipes.push(recipe);
        }
    }

    return matchingRecipes;
}



function updateRecipeList() {
    let recipeList = document.getElementById('recipe-list');
    if (recipeList) {
        recipeList.innerHTML = recipeView();
    }
}


function clearSearch() {
    model.inputs.search.query = ''; 
    updateView(); 
    setTimeout(() => {
        document.getElementById('search').focus();
    }, 0);
}



function updateClearButton() {
    let inputField = document.getElementById('search');
    let clearButton = document.querySelector('.clear-btn');
    clearButton.style.display=(inputField.value.trim() !== '') ? 'block':'none'; 
}

