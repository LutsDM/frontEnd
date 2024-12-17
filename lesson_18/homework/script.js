const gridProducts = document.querySelector('#grid-products')

async function product() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data)

    data.products.map(prod => {
    //создание карточки
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");
    //название продукта
    const title = document.createElement("h4")
    title.textContent = prod.title;
    //изображение продукта
    const img = document.createElement("img");
    img.src = prod.images[0];
    img.alt = prod.title;
    //обертка для картинки куда кладем картинку
    const wrapper = document.createElement("div")
    wrapper.className = 'img-wrapper';
    wrapper.append(img);
    //описание продукта
    const desc = document.createElement("p");
    let descText = prod.description;
    if (descText.length > 200) {
      desc.textContent = descText.slice(0, 200) + '...'
    } else {
      desc.textContent = prod.description
    }
    //цена
    const price = document.createElement("p");
    price.textContent = `Price: ${prod.price} €`;

    card.append(title, wrapper, desc, price)
    gridProducts.append(card)

});
}

product();