
function filterByTag(tag) {
    model.app.activeTag = model.app.activeTag === tag ? '' : tag;
    updateView(); 
}

function filterRecipesByTag(recipes) {
    let  activeTag = model.app.activeTag ? model.app.activeTag.toLowerCase() : null;
    let filteredTag = [];

    for (let i = 0; i < recipes.length; i++) {
        let  recipe = recipes[i];

        if (!activeTag) {
            filteredTag.push(recipe); 
            continue;
        }

        for (let j = 0; j < recipe.tags.length; j++) {
            if (recipe.tags[j].toLowerCase() === activeTag) {
                filteredTag.push(recipe);
                break;
            }
        }
    }

    return filteredTag;
}

function getUniqueTags(recipes) {
    let allTags = [];

    for (let recipe of recipes) {
        for (let tag of recipe.tags) {
            
            if (allTags.indexOf(tag) === -1) {
                allTags.push(tag);
            }
        }
    }

    return allTags;
}


function getTagClass(tag) {
    return 'tag' + (model.app.activeTag === tag ? ' active' : '');
}

