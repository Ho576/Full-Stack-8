// Function to search for recipes based on the selected food
function searchRecipes(food) {
    const recipeList = document.querySelector(".recipe-list");
    recipeList.innerHTML = ""; // Clear previous results

    // Make an API request to get recipes based on the selected food
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${food}`)
        .then((response) => response.json())
        .then((data) => {
            const recipes = data.recipes;
            if (recipes.length === 0) {
                recipeList.innerHTML = "No recipes found for this food.";
            } else {
                recipes.forEach((recipe) => {
                    const recipeCard = createRecipeCard(recipe);
                    recipeList.appendChild(recipeCard);
                });
            }
        })
        .catch((error) => {
            console.error("An error occurred while fetching recipes: ", error);
        });
}

// Function to create a recipe card
function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    const title = document.createElement("h2");
    title.textContent = recipe.title;

    const image = document.createElement("img");
    image.src = recipe.image_url;
    image.alt = recipe.title;

    const readMoreButton = document.createElement("button");
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("read-more-button");
    readMoreButton.addEventListener("click", () => {
        showRecipeDetails(recipe.recipe_id);
    });

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(readMoreButton);

    return card;
}

// Function to show recipe details
function showRecipeDetails(recipeId) {
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
        .then((response) => response.json())
        .then((data) => {
            const recipe = data.recipe;
            displayRecipeDetails(recipe);
        })
        .catch((error) => {
            console.error("An error occurred while fetching recipe details: ", error);
        });
}

// Function to display recipe details
function displayRecipeDetails(recipe) {
    alert(`Recipe Name: ${recipe.title}\nIngredients: ${recipe.ingredients.join(", ")}`);
}

// Add event listeners to food buttons
const foodButtons = document.querySelectorAll(".food-button");

foodButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const food = button.getAttribute("data-food");
        searchRecipes(food);
    });
});
