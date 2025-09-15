// Sample product data - replace this with your actual data from the Excel file
const products = [
    {
        id: 1,
        image: 'https://www.highamylosestarch.com/photo/pl115356662-e1422_modified_starch_acetylated_distarch_adipate.jpg',
        qty: 10,
        gram: '500g',
        brand: 'Sinoright',
        description: 'Modified Starch E1422',
        unitPrice: 3500,
        buyQty: 0
    },
    {
        id: 2,
        image: 'https://www.greenhouse2u.com/image/mrngnatural/image/data/all_product_images/product-255/BrQweasu1742389343.png',
        qty: 15,
        gram: '150g',
        brand: 'LOHAS',
        description: 'Lecithin (soy)',
        unitPrice: 790,
        buyQty: 0
    },
    {
        id: 3,
        image: 'https://www.jindeal.com/wp-content/uploads/2024/04/potassium-sorbate-food-grade.jpeg',
        qty: 8,
        gram: '250',
        brand: 'Kemrad',
        description: 'Potassium Sorbate',
        unitPrice: 1150,
        buyQty: 0
    },
    {
        id: 4,
        image: 'https://image.made-in-china.com/2f0j00mfjbtEsdhUca/Food-Grade-97-Smbs-White-Powder-Sodium-Metabisulfite.webp',
        qty: 20,
        gram: '500g',
        brand: 'Kemrad',
        description: 'Sodium Metabisulfite',
        unitPrice: 390,
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
                ₱${product.unitPrice.toFixed(2)} per unit
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
                Total: ₱${(product.buyQty * product.unitPrice).toFixed(2)}
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
        totalElement.textContent = `Total: ₱${total.toFixed(2)}`;
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

let currentSearchQuery = '';

// Function to render all products (supports search filter)
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
        
        const query = currentSearchQuery.trim().toLowerCase();
        const filtered = query ? products.filter(p => {
            const text = `${p.brand} ${p.description} ${p.gram}`.toLowerCase();
            return text.includes(query);
        }) : products;

        if (filtered.length === 0) {
            catalogGrid.innerHTML = '<div class="loading">No matching products</div>';
            return;
        }

        filtered.forEach(product => {
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

// Helper: build a CORS proxy URL (images.weserv.nl) for remote images that block CORS
function toCorsProxyUrl(url) {
    try {
        const u = new URL(url);
        const noProtocol = `${u.host}${u.pathname}${u.search}`;
        // Force png output to ensure jsPDF compatibility
        return `https://images.weserv.nl/?url=${encodeURIComponent(noProtocol)}&output=png&w=256&h=256&fit=inside&we=1`;
    } catch (e) {
        return null;
    }
}

// Helper: fetch as DataURL
async function fetchAsDataUrl(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
        const response = await fetch(url, { mode: 'cors', signal: controller.signal });
        if (!response.ok) return null;
        const blob = await response.blob();
        return await new Promise(resolve => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        return null;
    } finally {
        clearTimeout(timeout);
    }
}

// Helper: load remote image as data URL with CORS fallback
async function loadImageAsDataUrl(imageUrl) {
    // If already data URL, return directly
    if (typeof imageUrl === 'string' && imageUrl.startsWith('data:image/')) {
        return imageUrl;
    }
    // Try direct fetch first
    let dataUrl = await fetchAsDataUrl(imageUrl);
    if (dataUrl) return dataUrl;
    // Fallback via CORS proxy
    const proxied = toCorsProxyUrl(imageUrl);
    if (proxied) {
        dataUrl = await fetchAsDataUrl(proxied);
        if (dataUrl) return dataUrl;
    }
    return null;
}

// Generate a Quotation PDF using jsPDF + autoTable (now async to embed images)
async function generateQuotationPDF(details, summary) {
    // Support both UMD and legacy globals
    const jsPDFCtor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!jsPDFCtor) {
        alert('PDF generator not loaded. Please check your internet connection.');
        return null;
    }

    const doc = new jsPDFCtor();

    const companyName = 'LanRoss Consumer Goods Trading';
    const companyAddress = 'Victoria Sports Tower';
    const companyContact = '09175179996';
    const companyEmail = 'anrossconsumergoodstrading@gmail.com';

    // Header
    doc.setFontSize(16);
    doc.text(companyName, 14, 16);
    doc.setFontSize(10);
    doc.text(`${companyAddress} | ${companyContact} | ${companyEmail}`, 14, 22);

    // Title
    doc.setFontSize(14);
    doc.text('QUOTATION REQUEST', 14, 32);

    // Details
    const yStart = 40;
    const lines = [
        `PI No.: ${details.piNo}`,
        `Issuing Date: ${details.issuingDate}`,
        `Term of Payment: ${details.termOfPayment}`,
        `Delivery Place: ${details.deliveryPlace}`
    ];
    lines.forEach((line, idx) => doc.text(line, 14, yStart + idx * 6));

    // Preload images for items (best-effort)
    const imageDataUrls = await Promise.all(
        summary.items.map(item => loadImageAsDataUrl(item.image))
    );

    // Items table with Image column
    const tableBody = summary.items.map((item, idx) => [
        String(idx + 1),
        '', // image placeholder, drawn via didDrawCell
        `${item.brand} - ${item.description} (${item.gram})`,
        String(item.buyQty),
        `₱${item.unitPrice.toFixed(2)}`,
        `₱${(item.buyQty * item.unitPrice).toFixed(2)}`
    ]);

    if (doc.autoTable) {
        doc.autoTable({
            startY: yStart + lines.length * 6 + 6,
            head: [["#", "Image", "Item", "Qty", "Unit Price", "Total"]],
            body: tableBody,
            styles: { fontSize: 9, minCellHeight: 18 },
            headStyles: { fillColor: [102, 126, 234] },
            columnStyles: {
                0: { cellWidth: 8 }, // #
                1: { cellWidth: 18 }, // Image
                3: { halign: 'right' },
                4: { halign: 'right' },
                5: { halign: 'right' }
            },
            didDrawCell: (data) => {
                const { column, row, cell, section } = data;
                if (section === 'body' && column.index === 1) {
                    const imgDataUrl = imageDataUrls[row.index];
                    if (imgDataUrl) {
                        const padding = 1.5;
                        const imgHeight = cell.height - padding * 2;
                        const imgWidth = imgHeight; // square thumbnail
                        try {
                            doc.addImage(
                                imgDataUrl,
                                imgDataUrl.startsWith('data:image/png') ? 'PNG' : 'JPEG',
                                cell.x + padding,
                                cell.y + padding,
                                imgWidth,
                                imgHeight
                            );
                        } catch (e) {
                            // ignore draw errors
                        }
                    } else {
                        // Optional: draw a faint placeholder box
                        doc.setDrawColor(200);
                        doc.rect(cell.x + 2, cell.y + 2, cell.height - 4, cell.height - 4);
                    }
                }
            }
        });
    }

    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY : yStart + lines.length * 6 + 12;
    doc.setFontSize(12);
    doc.text(`Total Items: ${summary.totalItems}`, 14, finalY + 8);
    doc.text(`Grand Total: ₱${summary.totalAmount.toFixed(2)}`, 14, finalY + 14);

    const filename = `Quotation-${details.piNo}.pdf`;
    doc.save(filename);
    return filename;
}

// Function to display cart summary (you can call this when needed)
function displayCartSummary() {
    const summary = getCartSummary();
    console.log('Cart Summary:', summary);
    
    if (summary.totalItems > 0) {
        alert(`Cart Summary:\nItems: ${summary.totalItems}\nTotal: ₱${summary.totalAmount.toFixed(2)}`);
    } else {
        alert('Your cart is empty');
    }
}

// Function to send quotation request via email
async function sendQuotationRequest() {
    const summary = getCartSummary();
    if (summary.totalItems === 0) {
        alert('Your cart is empty');
        return;
    }
    
    const formValues = await showQuotationForm();
    if (!formValues) return; // cancelled
    const { piNo, issuingDate, termOfPayment, deliveryPlace } = formValues;
    
    // Company details
    const companyName = 'LanRoss Consumer Goods Trading';
    const companyAddress = 'Victoria Sports Tower';
    const companyContact = '09175179996';
    const companyEmail = 'anrossconsumergoodstrading@gmail.com';
    
    // Build email subject and body
    const subject = `QUOTATION REQUEST - PI No. ${piNo}`;
    
    const itemLines = summary.items.map((item, idx) => {
        return `${idx + 1}. ${item.brand} - ${item.description} (${item.gram})\n   Qty: ${item.buyQty} @ ₱${item.unitPrice.toFixed(2)} = ₱${(item.buyQty * item.unitPrice).toFixed(2)}`;
    }).join('\n');
    
    // Generate PDF first so user can attach it in email (includes item images)
    const generatedFilename = await generateQuotationPDF({ piNo, issuingDate, termOfPayment, deliveryPlace }, summary);

    const body = [
        'QUOTATION REQUEST',
        '',
        `PI No.: ${piNo}`,
        `Issuing Date: ${issuingDate}`,
        `Term of Payment: ${termOfPayment}`,
        `Delivery Place: ${deliveryPlace}`,
        '',
        'Company Details:',
        `Company: ${companyName}`,
        `Address: ${companyAddress}`,
        `Contact: ${companyContact}`,
        `Email: ${companyEmail}`,
        '',
        'Requested Items (see attached PDF):',
        itemLines,
        '',
        `Total Items: ${summary.totalItems}`,
        `Grand Total: ₱${summary.totalAmount.toFixed(2)}`,
        '',
        'Please confirm price, availability, and lead time. Thank you.',
        '',
        generatedFilename ? `(Attached: ${generatedFilename})` : ''
    ].join('\n');
    
    const mailto = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Prefer Gmail compose in a new tab; fall back to mailto if blocked or unavailable
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const popup = window.open(gmailUrl, '_blank');
    if (!popup) {
        window.location.href = mailto;
    }
}

// Creates and shows a modal form to collect quotation details
function showQuotationForm() {
    return new Promise(resolve => {
        // Overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        // Modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <h3 class="modal-title"><i class="fas fa-file-invoice"></i> Quotation Details</h3>
            <div class="modal-grid">
                <label class="modal-field">
                    <span>PI No.</span>
                    <input type="text" id="piNoInput" placeholder="PI-" value="PI-" />
                </label>
                <label class="modal-field">
                    <span>Issuing Date</span>
                    <input type="date" id="issuingDateInput" value="${new Date().toISOString().slice(0, 10)}" />
                </label>
                <label class="modal-field">
                    <span>Term of Payment</span>
                    <input type="text" id="termPaymentInput" placeholder="COD/NET 30" value="COD/NET 30" />
                </label>
                <label class="modal-field">
                    <span>Delivery Place</span>
                    <input type="text" id="deliveryPlaceInput" placeholder="Victoria Sports Tower" value="Victoria Sports Tower" />
                </label>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" id="cancelModalBtn">Cancel</button>
                <button class="btn btn-primary" id="submitModalBtn">Send</button>
            </div>
        `;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        function close(returnValue) {
            document.body.removeChild(overlay);
            resolve(returnValue);
        }
        
        // Wire actions
        const cancelBtn = modal.querySelector('#cancelModalBtn');
        const submitBtn = modal.querySelector('#submitModalBtn');
        const piNoInput = modal.querySelector('#piNoInput');
        const issuingDateInput = modal.querySelector('#issuingDateInput');
        const termPaymentInput = modal.querySelector('#termPaymentInput');
        const deliveryPlaceInput = modal.querySelector('#deliveryPlaceInput');
        
        cancelBtn.addEventListener('click', () => close(null));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                close(null);
            }
        });
        
        function submit() {
            const piNo = (piNoInput.value || '').trim();
            const issuingDate = (issuingDateInput.value || '').trim();
            const termOfPayment = (termPaymentInput.value || '').trim();
            const deliveryPlace = (deliveryPlaceInput.value || '').trim();
            
            if (!piNo || !issuingDate || !termOfPayment || !deliveryPlace) {
                alert('Please fill in all fields.');
                return;
            }
            close({ piNo, issuingDate, termOfPayment, deliveryPlace });
        }
        
        submitBtn.addEventListener('click', submit);
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') submit();
            if (e.key === 'Escape') close(null);
        });
        
        // Autofocus first input
        setTimeout(() => piNoInput.focus(), 0);
    });
}

// Initialize the catalog when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Add a cart summary button to the header (optional)
    const header = document.querySelector('.header .container');
    if (header) {
        const cartButton = document.createElement('button');
        cartButton.innerHTML = '<i class="fas fa-envelope"></i> Send Quotation Request';
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
        cartButton.addEventListener('click', sendQuotationRequest);
        header.appendChild(cartButton);
    }

    // Wire search input for live filtering
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value || '';
            renderProducts();
        });
    }
});

// Export functions for potential external use
window.updateQuantity = updateQuantity;
window.updateQuantityFromInput = updateQuantityFromInput;
window.getCartSummary = getCartSummary;
window.displayCartSummary = displayCartSummary;
window.sendQuotationRequest = sendQuotationRequest;
