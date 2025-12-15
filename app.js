const menuData = [

/* ================= VEG RICE & NOODLES ================= */
{
id: 1,
name: "Burned Chilly Garlic Fried Rice / Noodles",
desc: "Smoky wok-tossed rice or noodles with garlic and chilli.",
price: 159,
category: "veg",
image: "images/veg/burnt-chilli-garlic-fried-rice.jpg.png"
},
{
id: 2,
name: "Corn & Bell Pepper Rice / Noodles",
desc: "Sweet corn and capsicum tossed in mild sauces.",
price: 159,
category: "veg",
image: "images/veg/bell-pepper-fried-rice.jpg.png"
},
{
id: 3,
name: "Paneer Fried Rice / Noodles",
desc: "Soft paneer cubes with Indo-Chinese flavours.",
price: 169,
category: "veg",
image: "images/veg/paneer-fried-rice.png"

},
{
id: 4,
name: "Schezwan Fried Rice / Noodles",
desc: "Spicy Schezwan sauce with vegetables.",
price: 159,
category: "veg",
image: "images/veg/schezwan-veg-fried-rice.jpg.png"
},

/* ================= NON-VEG RICE & NOODLES ================= */
{
id: 5,
name: "Chilly Garlic Egg Fried Rice / Noodles",
desc: "Egg tossed with garlic and chilli flavours.",
price: 179,
category: "nonveg",
image: "images/nonveg/chilli-garlic-egg-fried-rice.jpg.png"
},
{
id: 6,
name: "Schezwan Egg Fried Rice / Noodles",
desc: "Fiery Schezwan rice with scrambled egg.",
price: 179,
category: "nonveg",
image: "images/nonveg/schezwan-egg-fried-rice.jpg.png"
},
{
id: 7,
name: "Chilly Garlic Chicken Rice / Noodles",
desc: "Chicken tossed with garlic chilli sauce.",
price: 199,
category: "nonveg",
image: "images/nonveg/chilli-garlic-chicken-fried-rice.jpg.png"
},
{
id: 8,
name: "Schezwan Chicken Rice / Noodles",
desc: "Spicy chicken schezwan fried rice.",
price: 199,
category: "nonveg",
image: "images/nonveg/schezwan-chicken-fried-rice.jpg.png"
},

/* ================= BURGERS ================= */
{
id: 9,
name: "Classic Veg Burger",
desc: "Crispy veg patty with fresh veggies.",
price: 119,
category: "burgers",
image: "images/burgers/classic-veg-burger.jpg.png"
},
{
id: 10,
name: "Juicy Cheese Burger",
desc: "Veg patty with melted cheese slice.",
price: 139,
category: "burgers",
image: "images/burgers/cheese-veg-burger.jpg.png"
},
{
id: 11,
name: "BBQ Chicken Burger",
desc: "Grilled chicken patty with BBQ sauce.",
price: 159,
category: "burgers",
image: "images/burgers/bbq-chicken-burger.jpg.png"
},
{
id: 12,
name: "Grilled Chicken Burger",
desc: "Juicy grilled chicken with mayo.",
price: 159,
category: "burgers",
image: "images/burgers/grilled-chicken-burger.jpg.png"
},

/* ================= PIZZA ================= */
{
id: 13,
name: "Margherita Pizza",
desc: "Classic cheese pizza.",
price: 199,
category: "pizza",
image: "images/pizza/margherita-pizza.jpg.png"
},
{
id: 14,
name: "Spicy Paneer Tikka Pizza",
desc: "Paneer tikka with spicy toppings.",
price: 269,
category: "pizza",
image: "images/pizza/paneer-tikka-pizza.jpg.png"
},
{
id: 15,
name: "BBQ Chicken Pizza",
desc: "BBQ chicken chunks with cheese.",
price: 319,
category: "pizza",
image: "images/pizza/bbq-chicken-pizza.jpg.png"
},

/* ================= SANDWICHES ================= */
{
id: 16,
name: "Classic Veg Sandwich",
desc: "Fresh vegetables with buttered bread.",
price: 90,
category: "sandwiches",
image: "images/sandwich/classic-veg-sandwich.jpg.png"
},
{
id: 17,
name: "Juicy Veg Cheese Sandwich",
desc: "Veg sandwich with extra cheese.",
price: 119,
category: "sandwiches",
image: "images/sandwich/veg-cheese-sandwich.jpg.png"
},
{
id: 18,
name: "Egg Mayo Sandwich",
desc: "Creamy egg mayo filling.",
price: 119,
category: "sandwiches",
image: "images/sandwich/egg-mayo-sandwich.jpg.png"
},

/* ================= SNACKS ================= */
{
id: 19,
name: "French Fries",
desc: "Classic salted fries.",
price: 69,
category: "snacks",
image: "images/snacks/french-fries.jpg.png"
},
{
id: 20,
name: "Cheese Nachos",
desc: "Crispy nachos with cheese sauce.",
price: 129,
category: "snacks",
image: "images/snacks/cheese-nachos.jpg.png"
},
{
id: 21,
name: "Chicken Nuggets",
desc: "Golden fried chicken nuggets.",
price: 149,
category: "snacks",
image: "images/snacks/chicken-nuggets.jpg.png"
},

/* ================= BEVERAGES ================= */
{
id: 22,
name: "Fresh Lime",
desc: "Refreshing lime drink.",
price: 39,
category: "beverages",
image: "images/beveragres/fresh-lime.jpg.png"
},
{
id: 23,
name: "Watermelon Juice",
desc: "Freshly blended watermelon juice.",
price: 59,
category: "beverages",
image: "images/beveragres/watermelon-juice.jpg.png"
},
{
id: 24,
name: "Cappuccino",
desc: "Hot frothy coffee.",
price: 99,
category: "beverages",
image: "images/beveragres/cappuccino.jpg.png"
},
{
id: 25,
name: "Masala Tea",
desc: "Indian spiced tea.",
price: 29,
category: "beverages",
image: "images/beveragres/masala-tea.jpg.png"
}

];
let cart = []; // Array to hold cart items: { id, qty }

// DOM Elements
const menuContainer = document.getElementById('menu-container');
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTaxEl = document.getElementById('cart-tax');
const cartTotalEl = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const toast = document.getElementById('toast');

/* --------------------------------------------------------------
   3. INITIALIZATION & RENDERING
   --------------------------------------------------------------
*/

// Group data by category and render
function initMenu() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:243',message:'initMenu called',data:{totalItems:menuData.length,menuItemsWithImages:menuData.map(i=>({id:i.id,name:i.name,image:i.image}))},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    menuContainer.innerHTML = '';
    
    // Get unique categories
    const categories = [...new Set(menuData.map(item => item.category))];

    categories.forEach(category => {
        // Create Section
        const section = document.createElement('section');
        section.id = category;
        section.className = 'category-section';
        
        // Add Title
        const title = document.createElement('h3');
        title.className = 'category-title';
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        section.appendChild(title);

        // Grid Container
        const grid = document.createElement('div');
        grid.className = 'items-grid';

        // Filter items for this category
        const items = menuData.filter(item => item.category === category);

        items.forEach(item => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:271',message:'Rendering item',data:{itemId:item.id,itemName:item.name,imageSrc:item.image,isRelative:!item.image.startsWith('http')},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A,E'})}).catch(()=>{});
            // #endregion
            const card = document.createElement('article');
            card.className = 'menu-item';
            
            // Create image element separately to attach error handler before setting src
            const imgEl = document.createElement('img');
            imgEl.className = 'item-img';
            imgEl.alt = item.name;
            imgEl.loading = 'lazy';
            
            // #region agent log
            // Set up error and load handlers BEFORE setting src
            imgEl.onerror = function(){
                const errData = {itemId:item.id,src:this.src,failedSrc:item.image,naturalWidth:this.naturalWidth,naturalHeight:this.naturalHeight,isRelative:!item.image.startsWith('http')};
                console.error('[DEBUG] Image load error:', errData);
                // Store in localStorage for debugging
                try{
                    const errors = JSON.parse(localStorage.getItem('imageErrors') || '[]');
                    errors.push(errData);
                    localStorage.setItem('imageErrors', JSON.stringify(errors));
                }catch(e){}
                // Create a placeholder using SVG data URI
                const placeholderSVG = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="400" height="200" fill="#e0e0e0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-family="Arial" font-size="14">Image unavailable</text></svg>')}`;
                this.src = placeholderSVG;
                this.style.backgroundColor = '#f0f0f0';
                fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:289',message:'Image load error',data:errData,timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v2',hypothesisId:'A,B,C'})}).catch((e)=>console.error('[DEBUG] Log fetch failed:',e));
            };
            imgEl.onload = function(){
                const loadData = {itemId:item.id,src:this.src,width:this.naturalWidth,height:this.naturalHeight,complete:this.complete};
                console.log('[DEBUG] Image load success:', loadData);
                // Store in localStorage for debugging
                try{
                    const successes = JSON.parse(localStorage.getItem('imageSuccesses') || '[]');
                    successes.push(loadData);
                    localStorage.setItem('imageSuccesses', JSON.stringify(successes));
                }catch(e){}
                fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:300',message:'Image load success',data:loadData,timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v2',hypothesisId:'B,C'})}).catch((e)=>console.error('[DEBUG] Log fetch failed:',e));
            };
            // #endregion
            
            // Now set the src (handlers are already attached)
            imgEl.src = item.image;
            
            // #region agent log
            const logData = {itemId:item.id,actualSrc:imgEl.src,srcAttribute:item.image,complete:imgEl.complete,naturalWidth:imgEl.naturalWidth,naturalHeight:imgEl.naturalHeight};
            console.log('[DEBUG] Image element created:', logData);
            fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:299',message:'Image element created',data:logData,timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch((e)=>console.error('[DEBUG] Log fetch failed:',e));
            // #endregion
            
            const isVeg = item.category === 'veg' || item.category === 'sandwiches' || item.category === 'snacks' || item.category === 'beverages';
            const badgeClass = isVeg ? 'veg' : 'nonveg';
            const badgeLabel = isVeg ? 'VEG' : 'NON-VEG';

            card.innerHTML = `
                <div class="item-content">
                    <div class="item-header">
                        <span>${item.name}</span>
                        <span class="badge ${badgeClass}">${badgeLabel}</span>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                    <div class="item-footer">
                        <span class="item-price">₹${item.price}</span>
                        <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            `;
            
            // Insert image at the beginning
            card.insertBefore(imgEl, card.firstChild);
            grid.appendChild(card);
            // #region agent log
            setTimeout(()=>{
                const finalImg = card.querySelector('.item-img');
                if(finalImg){
                    fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:303',message:'Image state after append',data:{itemId:item.id,complete:finalImg.complete,width:finalImg.naturalWidth,height:finalImg.naturalHeight,display:window.getComputedStyle(finalImg).display,visibility:window.getComputedStyle(finalImg).visibility},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C,D'})}).catch(()=>{});
                }
            },100);
            // #endregion
        });

        section.appendChild(grid);
        menuContainer.appendChild(section);
    });
    
    // #region agent log
    // Diagnostic summary after all images are processed
    setTimeout(() => {
        const allImages = document.querySelectorAll('.item-img');
        const summary = {
            total: allImages.length,
            loaded: 0,
            failed: 0,
            details: []
        };
        allImages.forEach((img, idx) => {
            const itemCard = img.closest('.menu-item');
            const itemName = itemCard ? itemCard.querySelector('.item-header span').textContent : 'Unknown';
            const status = img.naturalWidth > 0 && img.naturalHeight > 0 ? 'loaded' : 'failed';
            if (status === 'loaded') summary.loaded++;
            else summary.failed++;
            summary.details.push({
                index: idx,
                name: itemName,
                src: img.src,
                status: status,
                width: img.naturalWidth,
                height: img.naturalHeight,
                isDataURI: img.src.startsWith('data:')
            });
        });
        console.log('[DEBUG] Image loading summary:', summary);
        try {
            localStorage.setItem('imageSummary', JSON.stringify(summary));
        } catch(e) {}
        fetch('http://127.0.0.1:7242/ingest/56b413b0-230c-487f-b52a-9a79cfe37854',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app.js:327',message:'Image loading summary',data:summary,timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-v2',hypothesisId:'ALL'})}).catch((e)=>console.error('[DEBUG] Log fetch failed:',e));
    }, 2000);
    // #endregion
}

/* --------------------------------------------------------------
   4. CART LOGIC
   --------------------------------------------------------------
*/

function addToCart(id) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    updateCartUI();
    showToast();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function changeQty(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function updateCartUI() {
    // 1. Update Badge Count
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalQty;

    // 2. Render Cart Items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
    } else {
        cart.forEach(cartItem => {
            const product = menuData.find(p => p.id === cartItem.id);
            
            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <div>
                    <h4>${product.name}</h4>
                    <p class="small-text">₹${product.price} x ${cartItem.qty}</p>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${product.id}, -1)">-</button>
                    <span>${cartItem.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${product.id}, 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(row);
        });
    }

    // 3. Calculate Totals
    const subtotal = cart.reduce((sum, item) => {
        const product = menuData.find(p => p.id === item.id);
        return sum + (product.price * item.qty);
    }, 0);

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    cartSubtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    cartTaxEl.textContent = `₹${tax.toFixed(2)}`;
    cartTotalEl.textContent = `₹${total.toFixed(2)}`;
}

/* --------------------------------------------------------------
   5. UI INTERACTIONS
   --------------------------------------------------------------
*/

// Toggle Cart
cartBtn.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

// Close modal when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.add('hidden');
    }
});

// Clear Cart Button
clearCartBtn.addEventListener('click', clearCart);

// Mock Checkout
checkoutBtn.addEventListener('click', () => {
    const subtotal = cart.reduce((sum, item) => {
        const product = menuData.find(p => p.id === item.id);
        return sum + (product.price * item.qty);
    }, 0);

    if (subtotal < 350) {
        alert("Minimum order value is ₹350 for late-night delivery.");
        return;
    }

    alert("Order placed (demo). Collect from hostel reception.");
});


// Toast Notification
function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initMenu);