// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
// .then (res => res.json())
// .then (data => console.log(data))




document.getElementById("search").addEventListener('click', function () {
    search()
})

async function search() {
    const inputValue = document.getElementById("input-Text").value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`
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
        <img src="${item.strMealThumb}" />
        <h2>${item.strMeal}</h2>
        `;
        Div.innerHTML = itemsAll;
        Result.appendChild(Div)
        console.log(Div)

    })
}

