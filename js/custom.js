// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
// .then (res => res.json())
// .then (data => console.log(data))




document.getElementById("search").addEventListener('click', function () {
    search()
    .catch(error => alert("Type First Letter Of Your Favourite Food !"))
})

async function search() {
    const input = document.getElementById("input-Text").value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
    const res = await fetch(api)
    const data = await res.json()
    showFoodItems(data.meals)
   
}


const showFoodItems = items => {

    const Result = document.getElementById("result");
    items.forEach(item => {
        const Div = document.createElement("div");
        Div.className = 'box';
        const itemsAll = `
        <img class="image w-100" src="${item.strMealThumb}" />
        <h2 class="headline">${item.strMeal}</h2>
        `;
        Div.innerHTML = itemsAll;
        Result.appendChild(Div)

       
     

    })
}

