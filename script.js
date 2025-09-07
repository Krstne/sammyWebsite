// Sample product data - replace this with your actual data from the Excel file
const products = [
    {
        id: 1,
        image: 'https://via.placeholder.com/300x250/667eea/ffffff?text=Product+1',
        qty: 10,
        gram: '500g',
        brand: 'Sinoright',
        description: 'Modified Starch E1422',
        unitPrice: 3500,
        buyQty: 0
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/300x250/764ba2/ffffff?text=Product+2',
        qty: 15,
        gram: '750g',
        brand: 'Elite Brand',
        description: 'Professional grade product with superior quality',
        unitPrice: 45.50,
        buyQty: 0
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Product+3',
        qty: 8,
        gram: '1kg',
        brand: 'Standard Brand',
        description: 'Reliable and cost-effective solution for everyday use',
        unitPrice: 18.75,
        buyQty: 0
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Product+4',
        qty: 20,
        gram: '250g',
        brand: 'Economy Brand',
        description: 'Budget-friendly option without compromising quality',
        unitPrice: 12.99,
        buyQty: 0
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Product+5',
        qty: 12,
        gram: '600g',
        brand: 'Luxury Brand',
        description: 'Premium product with exceptional features and design',
        unitPrice: 89.99,
        buyQty: 0
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Product+6',
        qty: 6,
        gram: '400g',
        brand: 'Specialty Brand',
        description: 'Specialized product for specific applications',
        unitPrice: 65.25,
        buyQty: 0
    }
];

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.description}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="placeholder-image" style="display: none;">
                <i class="fas fa-image"></i>
            </div>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-description">${product.description}</div>
            
            <div class="product-details">
                <div class="detail-item">
                    <span class="detail-label">Available Qty:</span>
                    <span class="detail-value">${product.qty}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Weight:</span>
                    <span class="detail-value">${product.gram}</span>
                </div>
            </div>
            
            <div class="unit-price">
                $${product.unitPrice.toFixed(2)} per unit
            </div>
            
            <div class="quantity-section">
                <span class="quantity-label">Buy Quantity:</span>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)" id="decrease-${product.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" id="qty-${product.id}" value="${product.buyQty}" min="0" max="${product.qty}" onchange="updateQuantityFromInput(${product.id})">
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)" id="increase-${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="total-price" id="total-${product.id}">
                Total: $${(product.buyQty * product.unitPrice).toFixed(2)}
            </div>
        </div>
    `;
    
    return card;
}

// Function to update quantity
function updateQuantity(productId, change) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newQty = Math.max(0, Math.min(product.qty, product.buyQty + change));
    product.buyQty = newQty;
    
    // Update the input field
    const qtyInput = document.getElementById(`qty-${productId}`);
    if (qtyInput) {
        qtyInput.value = newQty;
    }
    
    // Update the total price
    updateTotalPrice(productId);
    
    // Update button states
    updateButtonStates(productId);
}

// Function to update quantity from input field
function updateQuantityFromInput(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    
    if (!product || !qtyInput) return;
    
    let newQty = parseInt(qtyInput.value) || 0;
    newQty = Math.max(0, Math.min(product.qty, newQty));
    
    product.buyQty = newQty;
    qtyInput.value = newQty;
    
    updateTotalPrice(productId);
    updateButtonStates(productId);
}

// Function to update total price
function updateTotalPrice(productId) {
    const product = products.find(p => p.id === productId);
    const totalElement = document.getElementById(`total-${productId}`);
    
    if (product && totalElement) {
        const total = product.buyQty * product.unitPrice;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
}

// Function to update button states
function updateButtonStates(productId) {
    const product = products.find(p => p.id === productId);
    const decreaseBtn = document.getElementById(`decrease-${productId}`);
    const increaseBtn = document.getElementById(`increase-${productId}`);
    
    if (product && decreaseBtn && increaseBtn) {
        decreaseBtn.disabled = product.buyQty <= 0;
        increaseBtn.disabled = product.buyQty >= product.qty;
    }
}

// Function to render all products
function renderProducts() {
    const catalogGrid = document.getElementById('catalogGrid');
    
    if (!catalogGrid) {
        console.error('Catalog grid element not found');
        return;
    }
    
    // Clear existing content
    catalogGrid.innerHTML = '';
    
    // Add loading state
    catalogGrid.innerHTML = '<div class="loading">Loading products...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        catalogGrid.innerHTML = '';
        
        products.forEach(product => {
            const card = createProductCard(product);
            catalogGrid.appendChild(card);
            updateButtonStates(product.id);
        });
    }, 500);
}

// Function to get cart summary
function getCartSummary() {
    const cartItems = products.filter(p => p.buyQty > 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.buyQty, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.buyQty * item.unitPrice), 0);
    
    return {
        items: cartItems,
        totalItems,
        totalAmount
    };
}

// Function to display cart summary (you can call this when needed)
function displayCartSummary() {
    const summary = getCartSummary();
    console.log('Cart Summary:', summary);
    
    if (summary.totalItems > 0) {
        alert(`Cart Summary:\nItems: ${summary.totalItems}\nTotal: $${summary.totalAmount.toFixed(2)}`);
    } else {
        alert('Your cart is empty');
    }
}

// Initialize the catalog when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Add a cart summary button to the header (optional)
    const header = document.querySelector('.header .container');
    if (header) {
        const cartButton = document.createElement('button');
        cartButton.innerHTML = '<i class="fas fa-shopping-cart"></i> View Cart';
        cartButton.style.cssText = `
            background: rgba(255,255,255,0.2);
            color: white;
            border: 2px solid white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            cursor: pointer;
            font-size: 0.9rem;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        cartButton.addEventListener('mouseenter', function() {
            this.style.background = 'white';
            this.style.color = '#667eea';
        });
        cartButton.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255,255,255,0.2)';
            this.style.color = 'white';
        });
        cartButton.addEventListener('click', displayCartSummary);
        header.appendChild(cartButton);
    }
});

// Export functions for potential external use
window.updateQuantity = updateQuantity;
window.updateQuantityFromInput = updateQuantityFromInput;
window.getCartSummary = getCartSummary;
window.displayCartSummary = displayCartSummary;
