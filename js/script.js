let cart = [];
let totalPrice = 0;
let cartCount = 0;

// 顯示主內容
function showContent(category) {
    const content = document.getElementById('content');
    let html = '';

    switch (category) {
        case 'home':
            html = `
                <h1>歡迎光臨WebMe！</h1>
                <p>點擊上方導航欄，開始點餐吧！</p>
            `;
            break;
        case 'menu':
            html = `
                <h2>菜單</h2>
                <ul>
                    <li>豬排蛋吐司 - $50 <button onclick="addToCart('豬排蛋吐司', 50)">加入購物車</button></li>
                    <li>鮪魚蛋吐司 - $55 <button onclick="addToCart('鮪魚蛋吐司', 55)">加入購物車</button></li>
                    <li>紅茶 - $20 <button onclick="addToCart('紅茶', 20)">加入購物車</button></li>
                </ul>
            `;
            break;
    }

    content.innerHTML = html;
}

// 購物車功能
function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    cartCount++;
    updateCart();
    showNotification(`${item} 已加入購物車`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');

    cartItems.innerHTML = cart
        .map((entry) => `<li>${entry.item} - $${entry.price}</li>`)
        .join('');
    totalPriceElement.textContent = `$${totalPrice}`;
    cartCountElement.textContent = `(${cartCount})`;
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

function submitCart() {
    alert('購物車已送出！感謝您的購買！');
    cart = [];
    totalPrice = 0;
    cartCount = 0;
    updateCart();
    closeCart();
}

function showNotification(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
