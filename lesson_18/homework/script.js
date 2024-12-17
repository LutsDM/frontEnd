async function product() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    // data.map(product => {
    // //создание карточки
    // cons
