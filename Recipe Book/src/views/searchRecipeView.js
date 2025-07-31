function searchRecipeView() {
    let query = model.inputs.search.query;

    return /*HTML*/ `
        <div class="search">
            <input 
                type="text" 
                id="search" 
                placeholder="Søk oppskrifter..."  
                value="${query}" 
                oninput="handleSearchRecipe(this.value)" 
                onkeydown="if(event.key === 'Enter') handleSearchRecipe(this.value)"
            >
           
            <span class="clear-btn" onclick="clearSearch()">✕</span>
        </div>
    `;
}
