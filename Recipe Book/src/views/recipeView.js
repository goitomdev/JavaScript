function recipeView() { 
    let query = model.inputs.search.query;
    let allRecipes = model.data.recipes;

    let filteredTag = filterRecipesByTag(allRecipes);
    let filteredRecipes = searchRecipes(query, filteredTag);
    let recipeHtml = '';
    
    for (let i = 0; i < filteredRecipes.length; i++) {
        recipeHtml += recipeComponent(filteredRecipes[i], i);
    }

    return /*HTML*/`
        <div id="recipe-list">
            ${recipeHtml}
        </div>
    `;
}
