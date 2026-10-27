// JavaScript
console.log('Hello world!');

const products = [
    { name: '商品1', brand: 'ブランドA', price: 1800, image: 'images/img01.png', inStock: true },
    { name: '商品2', brand: 'ブランドB', price: 3500, image: 'images/img02.png', inStock: false },
    { name: '商品3', brand: 'ブランドB', price: 1200, image: 'images/img03.png', inStock: true },
    { name: '商品4', brand: 'ブランドA', price: 2100, image: 'images/img04.png', inStock: true },
    { name: '商品5', brand: 'ブランドB', price: 3800, image: 'images/img05.png', inStock: true },
    { name: '商品6', brand: 'ブランドA', price: 2500, image: 'images/img06.png', inStock: false },
    { name: '商品7', brand: 'ブランドB', price: 1100, image: 'images/img07.png', inStock: true },
    { name: '商品8', brand: 'ブランドB', price: 1400, image: 'images/img08.png', inStock: false },
    { name: '商品9', brand: 'ブランドA', price: 1700, image: 'images/img01.png', inStock: true },
    { name: '商品10', brand: 'ブランドB', price: 4000, image: 'images/img02.png', inStock: false },
    { name: '商品11', brand: 'ブランドA', price: 2200, image: 'images/img03.png', inStock: true },
    { name: '商品12', brand: 'ブランドB', price: 1600, image: 'images/img04.png', inStock: true }
];

console.log('商品配列:', products);
console.log('商品数:', products.length);
console.log('1番目の商品:', products[0]);
console.log('1番目の商品名:', products[0].name);

const productContainer = document.querySelector('#product-container');
const showAllBtn = document.querySelector('#show-all');
const filterPriceBtn = document.querySelector('#filter-price');
const filterStockBtn = document.querySelector('#filter-stock');
const filterbrandABtn = document.querySelector('#brand-a');
const filterbrandBBtn = document.querySelector('#brand-b');

// --- 関数：商品の配列を受け取って、画面にカードを表示する ---
function displayProducts(productArray) {
    productContainer.innerHTML = ''; // 表示エリアを一度空にする

    productArray.forEach(product => {
        // 在庫状況に応じて表示を変える
        const stockStatus = product.inStock ? '在庫あり' : '在庫なし';

        // カードのHTMLを文字列として組み立てる
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">¥${product.price.toLocaleString()}</p>
                <p class="stock">${stockStatus}</p>
                <p class="brand">${product.brand}</p>
            </div>
        `;
        // 組み立てたHTMLをコンテナに追加
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

//←ここにイベントを追加

showAllBtn.addEventListener('click', () => {
    displayProducts(products); // 全ての商品データをそのまま表示
});

filterPriceBtn.addEventListener('click', () => {
    // filterを使って、価格が2000円以下の商品だけを絞り込む
    const cheapProducts = products.filter(p => p.price <= 2000);
    displayProducts(cheapProducts); // 絞り込んだ結果を表示
});

filterStockBtn.addEventListener('click', () => {
    // filterを使って、在庫がある商品だけを絞り込む
    const stockProducts = products.filter(p => p.inStock === true);
    displayProducts(stockProducts); // 絞り込んだ結果を表示
});

filterbrandABtn.addEventListener('click', () => {
    // filterを使って、ブランドAの商品だけを絞り込む
    const brandA = products.filter(p => p.brand === 'ブランドA');
    displayProducts(brandA); // 絞り込んだ結果を表示
});

filterbrandBBtn.addEventListener('click', () => {
    //filterを使って、ブランドBの商品だけを絞り込む
    const brandB = products.filter(p => p.brand === 'ブランドB');
    displayProducts(brandB); //絞り込んだ結果を表示
});

displayProducts(products); // 初期表示