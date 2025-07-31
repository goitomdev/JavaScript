function addRecipeView() {
    
    let form =model.inputs.recipeForm;
    return /*HTML*/`
        <div class="form-group">
            <label for="title">Tittel</label>
            <input type="text" id="title" value="${form.title}" 
                oninput="model.inputs.recipeForm.title = this.value">
        </div>

        <div class="form-group">
            <label for="tags">Tags (kommaseparert)</label>
            <input type="text" id="tags" value="${form.tags.join(',')}" 
                oninput="model.inputs.recipeForm.tags = this.value.split(',').map(tag => tag.trim())">
        </div>

        <div class="form-group">
            <label for="ingredients">Ingredienser (en per linje)</label>
            <textarea id="ingredients" 
                oninput="model.inputs.recipeForm.ingredients = this.value.split('\\n')"
            >${form.ingredients.join('\n')}</textarea>
        </div>

        <div class="form-group">
            <label for="instructions">Instruksjoner (en per linje)</label>
            <textarea id="instructions" 
                oninput="model.inputs.recipeForm.instructions = this.value.split('\\n')"
            >${form.instructions.join('\n')}</textarea>
        </div>

        <div class="form-group">
            <label for="userSelect">Lagt til av</label>
            <select id="userSelect" onchange="model.inputs.recipeForm.addedByUser = parseInt(this.value)">
                ${model.data.users.map(user => `
                    <option value="${user.id}" ${user.id === form.addedByUser ? 'selected' : ''}>${user.name}</option>
                `).join('')}
            </select>
        </div>

        <button onclick="addRecipe()">Legg til oppskrift</button>
    `;
}
