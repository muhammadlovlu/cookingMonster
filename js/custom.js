document.getElementById("search").addEventListener('click', function () {
    let Result = document.getElementById("result");
    Result.innerHTML = "";
    const ingredient = document.getElementById("ingredient");
    ingredient.innerHTML = "";
    search()
        .catch(error => alert("Type First Letter Of Your Favourite Food !"))
})


async function search() {
    let input = document.getElementById("input-Text").value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
    const res = await fetch(api)
    const data = await res.json()
    showFoodItems(data.meals)
}


const showFoodItems = items => {
    const welcomeSection = document.getElementById("welcome");
    welcomeSection.style.display = "none";
    const fullBox = document.getElementById("full-box");
    fullBox.style.minHeight = "937px";
    Result = document.getElementById("result");
    items.forEach(item => {
        let Div = document.createElement("div");
        Div.className = 'box';
        const itemsAll = `
        <img class="image w-100" src="${item.strMealThumb}" />
        <h2 class="headline">${item.strMeal}</h2>`;
        Div.innerHTML = itemsAll;
        Result.appendChild(Div)
        Div.onclick = function () {
            const searchBar = document.getElementById("search-bar");
            searchBar.style.display = "none";
            Result.innerHTML = "";
            const ingredient = document.getElementById("ingredient");
            let ingredientDiv = document.createElement("div");
            ingredientDiv.className = "ingredientBox";
            const itemDetails = `
            <img class="image w-100" src="${item.strMealThumb}" />
            <h2 class="ms-3">${item.strMeal}</h2>
            <h4 class="ms-3">Ingredients :</h4>
            <li>${item.strIngredient1}</li>
            <li>${item.strIngredient2}</li>
            <li>${item.strIngredient3}</li>
            <li>${item.strIngredient4}</li>
            <li>${item.strIngredient5}</li>
            <li>${item.strIngredient6}</li>
            <li>${item.strIngredient7}</li>
            <li>${item.strIngredient8}</li>
            <li>${item.strIngredient9}</li>
            `;
            ingredientDiv.innerHTML = itemDetails;
            ingredient.appendChild(ingredientDiv);
        };
    })
}