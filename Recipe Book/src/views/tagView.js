function tagView(){
    let allRecipes = model.data.recipes;
    let uniqueTags = getUniqueTags(allRecipes);

        // Generer knapper for tagfilter
        let tagHtml = '';
        for (let tag of uniqueTags) {
            tagHtml += /*HTML*/`<span class="${getTagClass(tag)}" onclick="filterByTag('${tag}')">${tag}</span>`;
        }
    
        
    
            return /*HTML*/`
            <div class="tag-list">
                ${tagHtml}
            </div>
            
        `;
}