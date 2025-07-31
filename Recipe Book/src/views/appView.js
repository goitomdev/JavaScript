

function appView() {
    let currentView = '';
    if(model.app.activeTab === '') {
        model.app.activeTab = model.app.tabs.recipes;
    }

    switch(model.app.activeTab) {
        case model.app.tabs.recipes:
         currentView = recipeView();
        break;
       
        case model.app.tabs.addRecipe:
            currentView = addRecipeView();
            break;

        
        default:
           currentView = '<p>Du valgte Ugyldig-fanen</p>';
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <header>
            <h1> Oppskriftsbok </h1>        
        </header>    
        
        ${searchRecipeView()}
        <div class="tabs">
            <div class="tab ${model.app.activeTab === model.app.tabs.recipes ? 'active' : ''}" onclick="setActiveTab(model.app.tabs.recipes)"> Oppskrifter </div>
            <div class="tab ${model.app.activeTab === model.app.tabs.addRecipe ? 'active' : ''}" onclick="setActiveTab(model.app.tabs.addRecipe)">Legg til ny oppskrift</div>
        </div>
        
        <div class="tag-list">
            ${tagView()}
        </div>

        <div class="content">
            ${currentView}
        </div>
    `;
}

function updateView() {
    appView();
    updateClearButton();
    
}