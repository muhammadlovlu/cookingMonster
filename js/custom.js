document.getElementById("search").addEventListener('click', function (){
    search()
})

async function search() {
    const inputValue = document.getElementById("input-Text").value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`
    const res = await fetch(api)
    const data = await res.json()
 console.log(data.meals)
//   showFoodItems(data)
}





// const showFoodItems = items => {
//     const Result = document.getElementById("result");
//     items.forEach(item => {
//         const createDiv = document.createElement("div");
//         const itemsAll =`
//         <h1>${item}</h1>
//         `;
//         createDiv.innerHTML = itemsAll;
//  Result.appendChild(createDiv)

//     })
// }
