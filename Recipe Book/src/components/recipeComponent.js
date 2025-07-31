

function recipeComponent(recipe, index) {
    let user = model.data.users.find(user => user.id === recipe.addedByUser);
    let authorName = user ? user.name : 'Ukjent bruker';

    return /*HTML*/`
        <div class="recipe">
            <div class="recipe-header" onclick="toggleRecipeDetails(${index})">
                <h3>${recipe.title}</h3>
                <small>Av: ${authorName}</small>
            </div>
            <div id="recipe-details-${index}" class="recipe-details" hidden>
                <div class="tag-list">
                    ${createTagsHtml(recipe.tags)}
                </div>
                <p><strong>Ingredients:</strong></p>
                <ul class="ingredients-list">
                    ${createIngredientsHtml(recipe.ingredients)}
                </ul>
                <p><strong>Instructions:</strong></p>
                ${createInstructionsHtml(recipe.instructions)}
            </div>
        </div>
    `;
}



function createTagsHtml(tags) {
    let tagsHtml = '';
    for (const tag of tags) {
        tagsHtml += `<span class="tag">${tag}</span>`;
    }
    return tagsHtml;
}

function createIngredientsHtml(ingredients) {
    let ingredientsHtml = '';
    for (const ingredient of ingredients) {
        ingredientsHtml += `<li>${ingredient}</li>`;
    }
    return ingredientsHtml;
}

function createInstructionsHtml(instructions) {
    let instructionsHtml = '';
    let counter = 1;
    for (const instruction of instructions) {
        instructionsHtml += `<p>${counter}. ${instruction}</p>`;
        counter++;
    }
    return instructionsHtml;
}



function toggleRecipeDetails(index) {
    let recipeDetails = document.getElementById(`recipe-details-${index}`);
    if (!recipeDetails) return;
    recipeDetails.hidden = !recipeDetails.hidden;
  }
