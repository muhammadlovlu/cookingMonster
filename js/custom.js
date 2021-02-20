document.getElementById("search").addEventListener('click', function () {
    let Result = document.getElementById("result");
    Result.innerHTML = "";
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
        <h2 class="headline">${item.strMeal}</h2>
        `;
        Div.innerHTML = itemsAll;
        Result.appendChild(Div)

        Div.onclick =function(){
            const itemDetails = `
            <img class="image w-100" src="${item.strMealThumb}" />
        <h2 class="headline">${item.strMeal}</h2>
        <p>${item.strIngredient1}</p>
        <p>${item.strIngredient2}</p>
        <p>${item.strIngredient3}</p>
        <p>${item.strIngredient4}</p>
        <p>${item.strIngredient5}</p>
        <p>${item.strIngredient6}</p>
        <p>${item.strIngredient7}</p>
        <p>${item.strIngredient8}</p>
        <p>${item.strIngredient9}</p>
        <p>${item.strIngredient10}</p>
        <p>${item.strIngredient11}</p>
        <p>${item.strIngredient12}</p>
        <p>${item.strIngredient13}</p>
        <p>${item.strIngredient14}</p>
        <p>${item.strIngredient15}</p>
            `;
            console.log(itemDetails)
        };

        





    })
   
}


function moreDetails (){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then (res => res.json())
    .then (data => console.log(data))
    
}
moreDetails ()