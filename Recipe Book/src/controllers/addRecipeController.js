function addRecipe() {
    let form =model.inputs.recipeForm;

    if (form.title.trim() === '' || form.ingredients.length === 0 || form.instructions.length === 0) {
        return;
    }

    function cleanFormInput(input) {
        let cleanedInput = [];
        for (let i = 0; i < input.length; i++) {
            let trimmedInput = input[i].trim();
            if (trimmedInput !== '') {
                cleanedInput.push(trimmedInput);
            }
        }
        return cleanedInput;
    }

    let recipe = {};
    recipe.id = 'id-' + Date.now();
    recipe.title = form.title.trim();
    recipe.tags = cleanFormInput(form.tags);
    recipe.ingredients = cleanFormInput(form.ingredients);
    recipe.instructions = cleanFormInput(form.instructions);
    recipe.addedByUser = form.addedByUser;

    model.data.recipes.push(recipe);
    
    // Tilbakestill skjema
    form.title = '';
    form.ingredients= [''];
    form.instructions= [''];
    form.tags= [''];
    form.addedByUser= model.data.users[0].id;
   

    model.app.activeTab = model.app.tabs.recipes;
    updateView();
}
