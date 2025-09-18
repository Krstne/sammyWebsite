const products = [
    {
        id: 1,
        image: 'https://www.highamylosestarch.com/photo/pl115356662-e1422_modified_starch_acetylated_distarch_adipate.jpg',
        qty: 1,
        gram: '500g',
        brand: 'Sinoright',
        description: 'Modified Starch E1422',
        unitPrice: 3500,
        buyQty: 0
    },
    {
        id: 2,
        image: 'https://www.greenhouse2u.com/image/mrngnatural/image/data/all_product_images/product-255/BrQweasu1742389343.png',
        qty: 1,
        gram: '150g',
        brand: 'LOHAS',
        description: 'Lecithin (soy)',
        unitPrice: 790,
        buyQty: 0
    },
    {
        id: 3,
        image: 'https://www.jindeal.com/wp-content/uploads/2024/04/potassium-sorbate-food-grade.jpeg',
        qty: 1,
        gram: '250g',
        brand: 'Kemrad',
        description: 'Potassium Sorbate',
        unitPrice: 1150,
        buyQty: 0
    },
    {
        id: 4,
        image: 'https://image.made-in-china.com/2f0j00mfjbtEsdhUca/Food-Grade-97-Smbs-White-Powder-Sodium-Metabisulfite.webp',
        qty: 1,
        gram: '500g',
        brand: 'Kemrad',
        description: 'Sodium Metabisulfite',
        unitPrice: 390,
        buyQty: 0
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Citrus+Pectin',
        qty: 1,
        gram: '250g',
        brand: 'Dalkem',
        description: 'Citrus Pectin',
        unitPrice: 2150,
        buyQty: 0
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Gum+Arabic',
        qty: 1,
        gram: '250g',
        brand: 'PureChem',
        description: 'Gum Arabic',
        unitPrice: 650,
        buyQty: 0
    },
    {
        id: 7,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Xantham+Gum',
        qty: 1,
        gram: '500g',
        brand: 'Asteria Apothecary',
        description: 'Xantham Gum',
        unitPrice: 790,
        buyQty: 0
    },
    {
        id: 8,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Citric+Acid',
        qty: 1,
        gram: '500g',
        brand: 'GreenLands',
        description: 'Citric Acid',
        unitPrice: 190,
        buyQty: 0
    },
    {
        id: 9,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Wheat+Gluten',
        qty: 1,
        gram: '250g',
        brand: 'Vital',
        description: 'Vital Wheat Gluten',
        unitPrice: 350,
        buyQty: 0
    },
    {
        id: 10,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=TVP+Granules',
        qty: 1,
        gram: '1kg',
        brand: 'RLB',
        description: 'Textured Vegetable Protein (TVP) Granules',
        unitPrice: 390,
        buyQty: 0
    },
    {
        id: 11,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Ammonium+Oxalate',
        qty: 1,
        gram: '500ml',
        brand: 'Profame',
        description: 'Ammonium Oxalate',
        unitPrice: 3400,
        buyQty: 0
    },
    {
        id: 12,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Benedict+Reagent',
        qty: 1,
        gram: '1liter',
        brand: 'MEDIC',
        description: 'Benedict\'s Reagent',
        unitPrice: 1700,
        buyQty: 0
    },
    {
        id: 13,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Phenolphthalein',
        qty: 1,
        gram: '1liter',
        brand: 'Dalkem',
        description: 'Phenolphthalein Solution',
        unitPrice: 1500,
        buyQty: 0
    },
    {
        id: 14,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Methylene+Blue',
        qty: 1,
        gram: '1liter',
        brand: 'AQUAMAGE',
        description: 'Methylene Blue',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 15,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Lithium+Chloride',
        qty: 1,
        gram: '500g',
        brand: 'Xilong',
        description: 'Lithium Chloride',
        unitPrice: 5400,
        buyQty: 0
    },
    {
        id: 16,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Sucrose',
        qty: 1,
        gram: '500g',
        brand: 'Xilong',
        description: 'Sucrose',
        unitPrice: 1900,
        buyQty: 0
    },
    {
        id: 17,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Glucose+Solution',
        qty: 1,
        gram: '500ml',
        brand: 'Scientific Phygene',
        description: 'Glucose Solution 10%',
        unitPrice: 3900,
        buyQty: 0
    }
];

// Function to create a simple product display card (catalog view)
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card catalog-card';
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
        </div>
    `;
    
    return card;
}

// Function to create a product card with buying controls (shopping view)
function createShoppingProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card shopping-card';
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
    
    // Update cart if it's currently visible
    const cartTab = document.getElementById('cart-tab');
    if (cartTab && cartTab.classList.contains('active')) {
        renderCart();
    }
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
    
    // Update cart if it's currently visible
    const cartTab = document.getElementById('cart-tab');
    if (cartTab && cartTab.classList.contains('active')) {
        renderCart();
    }
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
let currentFilters = {
    brand: '',
    weight: '',
    priceRange: ''
};

// Function to populate filter options
function populateFilterOptions() {
    // Get unique brands
    const brands = [...new Set(products.map(p => p.brand))].sort();
    const brandFilter = document.getElementById('brandFilter');
    if (brandFilter) {
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
    }

    // Get unique weights
    const weights = [...new Set(products.map(p => p.gram))].sort((a, b) => {
        // Sort by numeric value if possible
        const aNum = parseFloat(a);
        const bNum = parseFloat(b);
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return aNum - bNum;
        }
        return a.localeCompare(b);
    });
    const weightFilter = document.getElementById('weightFilter');
    if (weightFilter) {
        weights.forEach(weight => {
            const option = document.createElement('option');
            option.value = weight;
            option.textContent = weight;
            weightFilter.appendChild(option);
        });
    }
}

// Function to apply filters
function applyFilters() {
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
        
        let filtered = products;
        
        // Apply search filter
        const query = currentSearchQuery.trim().toLowerCase();
        if (query) {
            filtered = filtered.filter(p => {
                const text = `${p.brand} ${p.description} ${p.gram}`.toLowerCase();
                return text.includes(query);
            });
        }
        
        // Apply brand filter
        if (currentFilters.brand) {
            filtered = filtered.filter(p => p.brand === currentFilters.brand);
        }
        
        // Apply weight filter
        if (currentFilters.weight) {
            filtered = filtered.filter(p => p.gram === currentFilters.weight);
        }
        
        // Apply price range filter
        if (currentFilters.priceRange) {
            filtered = filtered.filter(p => {
                const price = p.unitPrice;
                switch (currentFilters.priceRange) {
                    case '0-500':
                        return price < 500;
                    case '500-1000':
                        return price >= 500 && price < 1000;
                    case '1000-2000':
                        return price >= 1000 && price < 2000;
                    case '2000-5000':
                        return price >= 2000 && price < 5000;
                    case '5000+':
                        return price >= 5000;
                    default:
                        return true;
                }
            });
        }

        if (filtered.length === 0) {
            catalogGrid.innerHTML = '<div class="loading">No products match your filters</div>';
            return;
        }

        filtered.forEach(product => {
            const card = createProductCard(product);
            catalogGrid.appendChild(card);
        });
    }, 500);
}

// Function to render all products (catalog view - simple display)
function renderProducts() {
    applyFilters();
}

// Function to clear all filters
function clearFilters() {
    currentFilters = {
        brand: '',
        weight: '',
        priceRange: ''
    };
    
    // Reset filter controls
    const brandFilter = document.getElementById('brandFilter');
    const weightFilter = document.getElementById('weightFilter');
    const priceRange = document.getElementById('priceRange');
    
    if (brandFilter) brandFilter.value = '';
    if (weightFilter) weightFilter.value = '';
    if (priceRange) priceRange.value = '';
    
    // Re-render products
    applyFilters();
}

// Function to render shopping products (with buying controls)
function renderShoppingProducts() {
    const shoppingGrid = document.getElementById('shoppingGrid');
    
    if (!shoppingGrid) {
        console.error('Shopping grid element not found');
        return;
    }
    
    // Clear existing content
    shoppingGrid.innerHTML = '';
    
    // Add loading state
    shoppingGrid.innerHTML = '<div class="loading">Loading products...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        shoppingGrid.innerHTML = '';
        
        const query = currentSearchQuery.trim().toLowerCase();
        const filtered = query ? products.filter(p => {
            const text = `${p.brand} ${p.description} ${p.gram}`.toLowerCase();
            return text.includes(query);
        }) : products;

        if (filtered.length === 0) {
            shoppingGrid.innerHTML = '<div class="loading">No matching products</div>';
            return;
        }

        filtered.forEach(product => {
            const card = createShoppingProductCard(product);
            shoppingGrid.appendChild(card);
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
    const companyAddress = '083 Sitio Lubigan Plaza Aldea, Tanay Rizal / Victoria Sports Tower';
    const companyContact = '09175179996';
    const companyEmail = 'lanrossconsumergoodstrading@gmail.com';

    // Add background color for header (#2A7AAF)
    doc.setFillColor(42, 122, 175);
    doc.rect(0, 0, 210, 35, 'F');

    // Company name in header (white text)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(companyName, 14, 16);

    // Company details in header (white text)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(companyAddress, 14, 22);
    doc.text(`Contact: ${companyContact} | Email: ${companyEmail}`, 14, 27);

    // Reset text color for rest of document
    doc.setTextColor(0, 0, 0);

    // Add decorative line (#2A7AAF)
    doc.setDrawColor(42, 122, 175);
    doc.setLineWidth(2);
    doc.line(14, 40, 196, 40);

    // Title section
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('QUOTATION REQUEST', 14, 50);

    // Customer details box (#E2EFF8)
    doc.setFillColor(226, 239, 248);
    doc.rect(14, 55, 182, 30, 'F');
    doc.setDrawColor(42, 122, 175);
    doc.rect(14, 55, 182, 30, 'S');

    // Customer details
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Customer Information:', 18, 62);
    doc.setFont('helvetica', 'normal');
    
    const customerDetails = [
        `PI No.: ${details.piNo}`,
        `Issuing Date: ${details.issuingDate}`,
        `Term of Payment: ${details.termOfPayment}`,
        `Delivery Place: ${details.deliveryPlace}`
    ];
    
    customerDetails.forEach((line, idx) => {
        doc.text(line, 18, 68 + idx * 4);
    });

    // Preload images for items (best-effort)
    const imageDataUrls = await Promise.all(
        summary.items.map(item => loadImageAsDataUrl(item.image))
    );

    // Items table with enhanced styling
    const tableBody = summary.items.map((item, idx) => [
        String(idx + 1),
        '', // image placeholder, drawn via didDrawCell
        `${item.brand}`,
        `${item.description}`,
        `${item.gram}`,
        String(item.buyQty),
        `₱${item.unitPrice.toFixed(2)}`,
        `₱${(item.buyQty * item.unitPrice).toFixed(2)}`
    ]);

    if (doc.autoTable) {
        doc.autoTable({
            startY: 95,
            head: [["#", "Img", "Brand", "Description", "Size", "Qty", "Unit Price", "Total"]],
            body: tableBody,
            tableWidth: 'auto',
            margin: { left: 14, right: 14 },
            styles: { 
                fontSize: 8, 
                minCellHeight: 20,
                cellPadding: 3,
                lineColor: [220, 220, 220],
                lineWidth: 0.5,
                font: 'helvetica',
                overflow: 'linebreak',
                halign: 'left'
            },
            headStyles: { 
                fillColor: [42, 122, 175],
                textColor: [255, 255, 255],
                fontStyle: 'bold',
                halign: 'center',
                font: 'helvetica',
                fontSize: 8,
                cellPadding: 3
            },
            alternateRowStyles: {
                fillColor: [226, 239, 248]
            },
            columnStyles: {
                0: { cellWidth: 8, halign: 'center', font: 'helvetica' }, // #
                1: { cellWidth: 12, halign: 'center', font: 'helvetica' }, // Img
                2: { cellWidth: 25, fontStyle: 'bold', font: 'helvetica' }, // Brand
                3: { cellWidth: 60, font: 'helvetica' }, // Description
                4: { cellWidth: 15, halign: 'center', font: 'helvetica' }, // Size
                5: { cellWidth: 12, halign: 'center', font: 'helvetica' }, // Qty
                6: { cellWidth: 22, halign: 'right', font: 'helvetica' }, // Unit Price
                7: { cellWidth: 22, halign: 'right', fontStyle: 'bold', font: 'helvetica' } // Total
            },
            didDrawCell: (data) => {
                const { column, row, cell, section } = data;
                if (section === 'body' && column.index === 1) {
                    const imgDataUrl = imageDataUrls[row.index];
                    if (imgDataUrl) {
                        const padding = 2;
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
                            // Draw placeholder if image fails (#E2EFF8)
                            doc.setFillColor(226, 239, 248);
                            doc.rect(cell.x + padding, cell.y + padding, imgWidth, imgHeight, 'F');
                            doc.setFontSize(7);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(42, 122, 175);
                            doc.text('IMG', cell.x + padding + 2, cell.y + padding + 8);
                        }
                    } else {
                        // Draw placeholder box (#E2EFF8)
                        doc.setFillColor(226, 239, 248);
                        doc.rect(cell.x + 2, cell.y + 2, cell.height - 4, cell.height - 4, 'F');
                        doc.setFontSize(7);
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(42, 122, 175);
                        doc.text('IMG', cell.x + 4, cell.y + 8);
                    }
                }
            }
        });
    }

    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY : 95;
    
    // Summary section (#EBE68D)
    doc.setFillColor(235, 230, 141);
    doc.rect(14, finalY + 10, 182, 25, 'F');
    
    // Summary text (black)
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Total Items: ${summary.totalItems}`, 18, finalY + 20);
    doc.text(`Grand Total: ₱${summary.totalAmount.toFixed(2)}`, 18, finalY + 28);
    
    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for your business!', 14, pageHeight - 20);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, pageHeight - 15);
    doc.text('For inquiries, contact us at: ' + companyEmail, 14, pageHeight - 10);

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

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab and pane
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Update displays based on tab
    if (tabName === 'catalog') {
        renderProducts();
    } else if (tabName === 'shopping') {
        renderShoppingProducts();
    } else if (tabName === 'cart') {
        renderCart();
    }
}

// Function to render cart items
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const summary = getCartSummary();
    
    if (summary.totalItems === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><br>Your cart is empty</div>';
        cartSummary.innerHTML = '';
        return;
    }
    
    // Render cart items
    cartItems.innerHTML = summary.items.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.description}" class="cart-item-image" onerror="this.style.display='none'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.brand} - ${item.description}</div>
                <div class="cart-item-details">${item.gram} | ₱${item.unitPrice.toFixed(2)} each</div>
                <div class="cart-item-price">Total: ₱${(item.buyQty * item.unitPrice).toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" ${item.buyQty <= 0 ? 'disabled' : ''}>
                    <i class="fas fa-minus"></i>
                </button>
                <span style="margin: 0 0.5rem; font-weight: 600;">${item.buyQty}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" ${item.buyQty >= item.qty ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Render cart summary
    cartSummary.innerHTML = `
        <h3><i class="fas fa-receipt"></i> Order Summary</h3>
        <div class="cart-summary-item">
            <span>Total Items:</span>
            <span>${summary.totalItems}</span>
        </div>
        <div class="cart-summary-item">
            <span>Subtotal:</span>
            <span>₱${summary.totalAmount.toFixed(2)}</span>
        </div>
        <div class="cart-summary-total">
            <span>Grand Total: ₱${summary.totalAmount.toFixed(2)}</span>
        </div>
    `;
}

// Initialize the catalog when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Populate filter options
    populateFilterOptions();
    
    renderProducts();
    
    // Add tab event listeners
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Add quotation button event listener
    const generateQuotationBtn = document.getElementById('generateQuotationBtn');
    if (generateQuotationBtn) {
        generateQuotationBtn.addEventListener('click', sendQuotationRequest);
    }

    // Wire search input for live filtering
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value || '';
            applyFilters();
        });
    }
    
    // Add filter event listeners
    const brandFilter = document.getElementById('brandFilter');
    const weightFilter = document.getElementById('weightFilter');
    const priceRange = document.getElementById('priceRange');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (brandFilter) {
        brandFilter.addEventListener('change', function() {
            currentFilters.brand = this.value;
            applyFilters();
        });
    }
    
    if (weightFilter) {
        weightFilter.addEventListener('change', function() {
            currentFilters.weight = this.value;
            applyFilters();
        });
    }
    
    if (priceRange) {
        priceRange.addEventListener('change', function() {
            currentFilters.priceRange = this.value;
            applyFilters();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
});

// Export functions for potential external use
window.updateQuantity = updateQuantity;
window.updateQuantityFromInput = updateQuantityFromInput;
window.getCartSummary = getCartSummary;
window.displayCartSummary = displayCartSummary;
window.sendQuotationRequest = sendQuotationRequest;
