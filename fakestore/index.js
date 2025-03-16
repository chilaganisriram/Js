
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => setTimeout(() => {
    displayData(data)
},2000)) 
.catch(err => console.error(err))
function displayData(data){
    let container = document.createElement("div")
    container.className = "container"
    
    for(let obj of data){
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML=`
        <img src="${obj.image}" class="image" id="image">
        <p><b>${obj.title} - ₹${obj.price}</b></p>
        <p>${obj.description}</p>
        <span>- ${obj.rating.rate}</span>`
        container.appendChild(item)
    }
    var loader = document.getElementById("loader")
    loader.remove()     
        document.body.appendChild(container)
        
}