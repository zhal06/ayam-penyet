// ============================
// CONFIGURATION
// ============================

// Nomor WhatsApp penjual (ubah sesuai kebutuhan)
const WHATSAPP_NUMBER = '6281311416002';
const FREE_AREA_KEYWORD = 'cinagara';
const MIN_DELIVERY_ITEMS = 5;
// ============================
// DATA MENU
// ============================

const menuItems = [
    {
        id: 1,
        name: 'Ayam Penyet',
        description: 'Ayam goreng dengan sambal bawang pedas nampol',
        price: 15000,
        category: 'Makanan',
        image: 'images/penyet.jpg',
        preparationTime: '15-20 menit',
        rating: 4.8,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Ayam Penyet', priceModifier: 0 },
            { name: 'Ayam Penyet Sambal Pisah', priceModifier: 0 },
            { name: 'Ayam Penyet + Nasi', priceModifier: 3000 },
            { name: 'Ayam Penyet + Nasi Sambal Pisah', priceModifier: 3000 },
            
        ]
    },

    {
        id: 2,
        name: 'Ayam Kremes',
        description: 'Ayam goreng renyah dengan taburan kremesan gurih, disajikan bersama sambal dan sayuran segar.',
        price: 15000,
        category: 'Makanan',
        image: 'images/kremes.jpg',
        preparationTime: '15-20 menit',
        rating: 4.5,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Ayam Kremes', priceModifier: 0 },
            { name: 'Ayam Kremes Sambal Bawang', priceModifier: 0 },
            { name: 'Ayam Kremes Sambal Goreng', priceModifier: 0 },
            { name: 'Ayam Kremes + Nasi', priceModifier: 3000 },
            { name: 'Ayam Kremes + Nasi Sambal Bawang', priceModifier: 3000 },
            { name: 'Ayam Kremes + Nasi Sambal Goreng', priceModifier: 3000 },
            
        ]
    },

    {
        id: 3,
        name: 'Ayam Bakar Jimbaran',
        description: 'Ayam bakar khas Jimbaran dengan bumbu pedas, gurih, manis dan aroma bakaran yang menggoda. Cocok buat pecinta ayam bakar.',
        price: 15000,
        category: 'Makanan',
        image: 'images/jimbaran.jpg',
        preparationTime: '10-15 menit',
        rating: 4.8,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Ayam Bakar Jimbaran', priceModifier: 0 },
            { name: 'Ayam Bakar Jimbaran Sambal Bawang', priceModifier: 0 },
            { name: 'Ayam Bakar Jimbaran Sambal Goreng', priceModifier: 0 },
            { name: 'Ayam Bakar Jimbaran + Nasi', priceModifier: 3000 },
            { name: 'Ayam Bakar Jimbaran + Nasi Sambal Bawang', priceModifier: 3000 },
            { name: 'Ayam Bakar Jimbaran + Nasi Sambal Goreng', priceModifier: 3000 },
        ]
    },

    {
        id: 4,
        name: 'Ayam Bakar Kecap',
        description: 'Ayam bakar khas Jimbaran dengan bumbu pedas, gurih, manis dan aroma bakaran yang menggoda. Cocok buat pecinta ayam bakar.',
        price: 15000,
        category: 'Makanan',
        image: 'images/kecap.jpg',
        preparationTime: '10-15 menit',
        rating: 4.4,
        reviewCount: 592,
        isBestSeller: false,
        discount: null,
        options: [
            { name: 'Ayam Bakar Kecap', priceModifier: 0 },
            { name: 'Ayam Bakar Kecap Sambal Bawang', priceModifier: 0 },
            { name: 'Ayam Bakar Kecap Sambal Goreng', priceModifier: 0 },
            { name: 'Ayam Bakar Kecap + Nasi', priceModifier: 3000 },
            { name: 'Ayam Bakar Kecap + Nasi Sambal Bawang', priceModifier: 3000 },
            { name: 'Ayam Bakar Kecap + Nasi Sambal Goreng', priceModifier: 3000 },
        ]
    },

    {
        id: 5,
        name: 'Bebek Penyet',
        description: 'Bebek goreng dengan sambal bawang pedas nampol',
        price: 23000,
        category: 'Makanan',
        image: 'images/penyet.jpg',
        preparationTime: '15-20 menit',
        rating: 4.8,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Bebek Penyet', priceModifier: 0 },
            { name: 'Bebek Penyet Sambal Pisah', priceModifier: 0 },
            { name: 'Bebek Penyet + Nasi', priceModifier: 3000 },
            { name: 'Bebek Penyet + Nasi Sambal Pisah', priceModifier: 3000 },
            
        ]
    },
    

    {
        id: 6,
        name: 'Bebek Kremes',
        description: 'Bebek goreng renyah dengan taburan kremesan gurih, disajikan bersama sambal dan sayuran segar.',
        price: 23000,
        category: 'Makanan',
        image: 'images/kremes.jpg',
        preparationTime: '15-20 menit',
        rating: 4.5,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Bebek Kremes', priceModifier: 0 },
            { name: 'Bebek Kremes Sambal Bawang', priceModifier: 0 },
            { name: 'Bebek Kremes Sambal Goreng', priceModifier: 0 },
            { name: 'Bebek Kremes + Nasi', priceModifier: 3000 },
            { name: 'Bebek Kremes + Nasi Sambal Bawang', priceModifier: 3000 },
            { name: 'Bebek Kremes + Nasi Sambal Goreng', priceModifier: 3000 },
            
        ]
    },
    
    {
        id: 7,
        name: 'Bebek Bakar Jimbaran',
        description: 'Bebek bakar khas Jimbaran dengan bumbu pedas, gurih, manis dan aroma bakaran yang menggoda. Cocok buat pecinta ayam bakar.',
        price: 23000,
        category: 'Makanan',
        image: 'images/jimbaran.jpg',
        preparationTime: '10-15 menit',
        rating: 4.8,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Bebek Bakar Jimbaran', priceModifier: 0 },
            { name: 'Bebek Bakar Jimbaran Sambal Bawang', priceModifier: 0 },
            { name: 'Bebek Bakar Jimbaran Sambal Goreng', priceModifier: 0 },
            { name: 'Bebek Bakar Jimbaran + Nasi', priceModifier: 3000 },
            { name: 'Bebek Bakar Jimbaran + Nasi Sambal Bawang', priceModifier: 3000 },
            { name: 'Bebek Bakar Jimbaran + Nasi Sambal Goreng', priceModifier: 3000 },
        ]
    },
    
    {
        id: 8,
        name: 'Bebek Bakar Kecap',
        description: 'Bebek bakar khas Jimbaran dengan bumbu pedas, gurih, manis dan aroma bakaran yang menggoda. Cocok buat pecinta ayam bakar.',
        price: 23000,
        category: 'Makanan',
        image: 'images/kecap.jpg',
        preparationTime: '10-15 menit',
        rating: 4.4,
        reviewCount: 592,
        isBestSeller: false,
        discount: null,
        options: [
            { name: 'Bebek Bakar Kecap', priceModifier: 0 },
            { name: 'Bebek Bakar Kecap Sambal Bawang', priceModifier: 0 },
            { name: 'Bebek Bakar Kecap Sambal Goreng', priceModifier: 0 },
            { name: 'Bebek Bakar Kecap + Nasi', priceModifier: 3000 },
            { name: 'Bebek Bakar Kecap + Nasi Sambal Bawang', priceModifier: 3000 },
            { name: 'Bebek Bakar Kecap + Nasi Sambal Goreng', priceModifier: 3000 },
        ]
    },
    {
        id: 9,
        name: 'Ayam Geprek',
        description: 'Ayam goreng dengan sambal bawang pedas nampol',
        price: 9000,
        category: 'Makanan',
        image: 'images/geprek.jpg',
        preparationTime: '15-20 menit',
        rating: 5,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Ayam Geprek', priceModifier: 0 },
            { name: 'Ayam Geprek Sambal Pisah', priceModifier: 0 },
            { name: 'Ayam Geprek + Nasi', priceModifier: 4000 },
            { name: 'Ayam Geprek + Nasi Sambal Pisah', priceModifier: 4000 },
            
        ]
    },
    {
        id: 10,
        name: 'Fried Chicken',
        description: 'Ayam goreng dengan sambal bawang pedas nampol',
        price: 6000,
        category: 'Makanan',
        image: 'images/ciken.jpg',
        preparationTime: '15-20 menit',
        rating: 4.5,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Fried Chicken', priceModifier: 0 },
            { name: 'Fried Chicken + Nasi', priceModifier: 4000 },
            
        ]
    },

    {
        id: 11,
        name: 'Tahu/Tempe',
        description: 'Tahu dan tempe goreng gurih, renyah, dan cocok sebagai lauk atau camilan.',
        price: 3000,
        category: 'Snack',
        image: 'images/tempe.jpg',
        preparationTime: '8-12 menit',
        rating: 4.6,
        reviewCount: 983,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Tahu dan Tempe (2 pcs)', priceModifier: 0 },
            { name: 'Tahu (2 pcs)', priceModifier: 0 },
            { name: 'Tempe (2 pcs)', priceModifier: 0 },
            { name: 'Tahu dan Tempe Penyet (4 pcs)', priceModifier: 5000 }
        ]
    },

    {
        id: 12,
        name: 'Sambal',
        description: 'Pedasnya pas, aromanya sedap, bikin makan jadi tambah lahap.',
        price: 3000,
        category: 'Snack',
        image: 'images/sambal.jpg',
        preparationTime: '8-12 menit',
        rating: 5,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Sambal Bawang', priceModifier: 0 },
            { name: 'Sambal Goreng', priceModifier: 0 },
        ]
    },

    {
        id: 13,
        name: 'Nasi',
        description: 'Nasi putih hangat, pulen, dan nikmat',
        price: 4000,
        category: 'Snack',
        image: 'images/nasi.jpg',
        preparationTime: '8-12 menit',
        rating: 5,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Nasi', priceModifier: 0 },
            { name: 'Nasi Setengah Porsi', priceModifier: -2000 },
        ]
    },

    {
        id: 14,
        name: 'Teh Manis',
        description: 'Teh segar, cocok diminum hangat atau dingin.',
        price: 3000,
        category: 'Minuman',
        image: 'images/teh.jpg',
        preparationTime: '5-7 menit',
        rating: 4.1,
        reviewCount: 655,
        isBestSeller: false,
        discount: null,
        options: [
            { name: 'Es Teh Manis', priceModifier: 0 },
            { name: 'Teh Manis Panas', priceModifier: 0 }
        ]
    },

    {
        id: 15,
        name: 'Es Doger',
        description: 'Es doger segar dengan isian lengkap dan rasa manis legit.',
        price: 5000,
        category: 'Minuman',
        image: 'images/doger.jpg',
        preparationTime: '8-10 menit',
        rating: 4.7,
        reviewCount: 999,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Campur', priceModifier: 0 },
            { name: 'Campur + Alpukat', priceModifier: 3000 },
            { name: 'Tanpa Tape', priceModifier: 0 },
            { name: 'Tanpa Ketan', priceModifier: 0 },
            { name: 'Tanpa Jelly', priceModifier: 0 },
            { name: 'Campur Tanpa Susu', priceModifier: 0 },
            { name: 'Campur Tanpa Sirup', priceModifier: 0 }
        ]
    },

    {
        id: 16,
        name: 'Jeruk Peras',
        description: 'Jeruk peras segar dari jeruk asli, manis-asam menyegarkan.',
        price: 5000,
        category: 'Minuman',
        image: 'images/jeruk.jpg',
        preparationTime: '8-10 menit',
        rating: 4.7,
        reviewCount: 892,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Panas', priceModifier: 0 },
            { name: 'Dingin', priceModifier: 0 }
        ]
    },

    {
        id: 17,
        name: 'Lemon Peras',
        description: 'Lemon peras segar, asam alami, dan menyegarkan.',
        price: 5000,
        category: 'Minuman',
        image: 'images/lemon.jpg',
        preparationTime: '8-10 menit',
        rating: 4.7,
        reviewCount: 491,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Panas', priceModifier: 0 },
            { name: 'Dingin', priceModifier: 0 }
        ]
    },

    {
        id: 18,
        name: 'Aneka Jus Buah',
        description: 'Aneka jus buah segar dari buah pilihan, menyehatkan dan menyegarkan.',
        price: 8000,
        category: 'Minuman',
        image: 'images/jus.jpg',
        preparationTime: '8-10 menit',
        rating: 4.7,
        reviewCount: 491,
        isBestSeller: true,
        discount: null,
        options: [
            { name: 'Jus Mangga', priceModifier: 0 },
            { name: 'Jus Alpukat', priceModifier: 0 },
            { name: 'Jus Kaweni', priceModifier: 0 },
            { name: 'Jus Strawberry', priceModifier: 0 },
            { name: 'Jus Sirsak', priceModifier: 0 }
        ]
    },
    
    
];

// ============================
// CART SYSTEM
// ============================

// Cart state - array of { itemId, quantity, optionName, optionPrice }
let cart = [];

// Delivery type state - 'pickup' or 'delivery'
let deliveryType = 'pickup';

// Customer info state
let customerName = '';
let customerAddress = '';

// Payment method state - 'cash' or 'transfer'
let paymentMethod = 'cash';

// ============================
// OPERATING HOURS
// ============================

const operatingHours = {
    open: '10:00', // Jam buka
    close: '22:00', // Jam tutup
    timezone: 'Asia/Jakarta'
};

// ============================
// UI STATE
// ============================

// Search state
let searchTerm = '';

// ============================
// UTILITY FUNCTIONS
// ============================

/**
 * Format harga ke format Rupiah
 * @param {number} price - Harga dalam angka
 * @returns {string} Harga dalam format Rupiah
 */
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

/**
 * Check apakah warung sedang buka
 * @returns {boolean} Status buka/tutup
 */
function checkIsOpen() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [openHour, openMin] = operatingHours.open.split(':').map(Number);
    const [closeHour, closeMin] = operatingHours.close.split(':').map(Number);

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    return currentTime >= openTime && currentTime < closeTime;
}

/**
 * Render bintang rating
 * @param {number} rating - Rating value (1-5)
 * @returns {string} HTML string untuk bintang
 */
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    }

    // Half star
    if (hasHalfStar) {
        stars += '<svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 12 2 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill-opacity="0.5"></polygon></svg>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<svg class="star-icon empty" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    }

    return stars;
}




/**
 * Calculate price setelah discount
 * @param {number} price - Harga asli
 * @param {number} itemDiscount - Item discount (optional)
 * @returns {number} Harga setelah discount
 */
function getDiscountedPrice(price, itemDiscount = 0) {
    let finalPrice = price;

    // Apply item discount
    if (itemDiscount) {
        finalPrice = finalPrice * (1 - itemDiscount / 100);
    }

    return Math.round(finalPrice);
}

/**
 * Show toast notification
 * @param {string} message - Pesan
 * @param {string} type - Tipe (success, error, info)
 */
function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span class="toast-message">${message}</span>
    `;

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/**
 * Generate pesan WhatsApp untuk seluruh cart
 * @returns {string} Pesan yang sudah URL-encoded
 */
function generateWhatsAppMessage() {
    if (cart.length === 0) {
        return '';
    }

    let message = '';

    // Tambahkan perkenalan pelanggan
    message += 'Perkenalan Pelanggan:\n';
    message += ` Nama: ${customerName}\n`;
    message += ` Alamat: ${customerAddress}\n\n`;
    message += '─ • ─ • ─ • ─ • ─ • ─\n\n';

    message += 'Halo, saya ingin memesan:\n\n';

    cart.forEach((item, index) => {
        const menuItem = menuItems.find(menu => menu.id === item.itemId);
        if (menuItem) {
            const finalPrice = menuItem.price + item.optionPrice;
            const discountedPrice = getDiscountedPrice(finalPrice, menuItem.discount);
            const subtotal = discountedPrice * item.quantity;
            message += `${index + 1}.  ${menuItem.name}\n`;
            message += `    Varian: ${item.optionName}\n`;
            message += `    Harga: ${formatPrice(discountedPrice)} x ${item.quantity}\n`;
            message += `    Subtotal: ${formatPrice(subtotal)}\n\n`;
        }
    });

    const total = calculateTotal();
    message += ` *TOTAL: ${formatPrice(total)}*\n\n`;



    // Tambahkan info metode pengiriman
    if (deliveryType === 'pickup') {
        message += ' Metode Pengiriman: Ambil di Tempat\n';
    } else if (deliveryType === 'delivery') {
        message += ' Metode Pengiriman: Delivery\n';
    }

    // Tambahkan info metode pembayaran
    if (paymentMethod === 'cash') {
        message += ' Metode Pembayaran: Cash / Tunai\n\n';
    } else if (paymentMethod === 'transfer') {
        message += ' Metode Pembayaran: Transfer\n\n';
    }

    // Tambahkan pesan penutup
    if (deliveryType === 'pickup') {
        message += 'Mohon info ketersediaan. Terima kasih! ';
    } else if (deliveryType === 'delivery') {
        message += 'Berapa ongkos kirim ke alamat saya? \n';
        message += 'Terima kasih! ';
    }

    return encodeURIComponent(message);
}

/**
 * Buka WhatsApp dengan pesan tertentu
 * @param {string} message - Pesan yang akan dikirim
 */
function openWhatsApp(message) {
    if (!message) {
        alert('Keranjang masih kosong!');
        return;
    }
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Handle chat penjual
 */
function handleChatSeller() {
    const message = encodeURIComponent('Halo, saya ingin bertanya tentang menu makanan.');
    openWhatsApp(message);
}

/**
 * Hitung total harga cart
 * @returns {number} Total harga
 */
function calculateTotal() {
    return cart.reduce((total, item) => {
        const menuItem = menuItems.find(menu => menu.id === item.itemId);
        if (!menuItem) return total;
        const finalPrice = menuItem.price + item.optionPrice;
        const discountedPrice = getDiscountedPrice(finalPrice, menuItem.discount);
        return total + (discountedPrice * item.quantity);
    }, 0);
}

/**
 * Hitung total jumlah item di cart
 * @returns {number} Total jumlah item
 */
function calculateTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// ============================
// DELIVERY MINIMUM LOGIC (BARU)
// ============================

function getMinDeliveryByAddress() {
    const addressInput = document.getElementById('customerAddress');
    if (!addressInput) return MIN_DELIVERY_ITEMS;

    const address = addressInput.value.toLowerCase();

    // Jika alamat mengandung "cinagara" → bebas minimal
    if (address.includes(FREE_AREA_KEYWORD)) {
        return 0;
    }

    return MIN_DELIVERY_ITEMS;
}

function updateDeliveryMinNote() {
    const note = document.getElementById('deliveryMinNote');
    if (!note) return;

    const totalItems = calculateTotalItems();
    const minItems = getMinDeliveryByAddress();

    // Area Cinagara
    if (minItems === 0) {
        note.classList.add('valid');
        note.textContent = '✓ Area Desa Cinagara (tanpa minimal order)';
        return;
    }

    // Di luar Cinagara
    if (totalItems >= minItems) {
        note.classList.add('valid');
        note.textContent = `✓ Minimal order terpenuhi (${totalItems} item)`;
    } else {
        note.classList.remove('valid');
        note.textContent = `* Alamat di luar Desa Cinagara Minimal order ${minItems} item/porsi `;
    }
}


// ============================
// CART FUNCTIONS
// ============================

/**
 * Tambah item ke cart dengan opsi yang dipilih
 * @param {number} itemId - ID item menu
 * @param {string} optionName - Nama opsi yang dipilih
 * @param {number} optionPrice - Harga opsi yang dipilih (modifier)
 */
function addToCart(itemId, optionName, optionPrice) {
    const existingItem = cart.find(item => item.itemId === itemId && item.optionName === optionName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            itemId,
            quantity: 1,
            optionName,
            optionPrice
        });
    }

    updateCartUI();
    showToast('Item berhasil ditambahkan ke keranjang!', 'success');
}

/**
 * Kurangi quantity item di cart
 * @param {number} itemId - ID item menu
 * @param {string} optionName - Nama opsi
 */
function decreaseQuantity(itemId, optionName) {
    const itemIndex = cart.findIndex(item => item.itemId === itemId && item.optionName === optionName);

    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            // Hapus item jika quantity = 0
            removeFromCart(itemId, optionName);
            return;
        }
    }

    updateCartUI();
}

/**
 * Tambah quantity item di cart
 * @param {number} itemId - ID item menu
 * @param {string} optionName - Nama opsi
 */
function increaseQuantity(itemId, optionName) {
    const item = cart.find(item => item.itemId === itemId && item.optionName === optionName);

    if (item) {
        item.quantity++;
    }

    updateCartUI();
}

/**
 * Hapus item dari cart
 * @param {number} itemId - ID item menu
 * @param {string} optionName - Nama opsi
 */
function removeFromCart(itemId, optionName) {
    cart = cart.filter(item => !(item.itemId === itemId && item.optionName === optionName));
    updateCartUI();
}

/**
 * Kosongkan cart
 */
function clearCart() {
    cart = [];
    updateCartUI();
}

/**
 * Update UI cart
 */
function updateCartUI() {
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    const totalItems = calculateTotalItems();
    cartCount.textContent = totalItems;

    renderCartItems();

    const cartTotal = document.getElementById('cartTotal');
    cartTotal.textContent = formatPrice(calculateTotal());

    const orderNowBtn = document.getElementById('orderNowBtn');
    orderNowBtn.disabled = cart.length === 0;

    const deliverySection = document.getElementById('deliverySection');
    if (deliverySection) {
        if (cart.length > 0) {
            deliverySection.classList.add('visible');
        } else {
            deliverySection.classList.remove('visible');
        }
    }

    const customerInfoSection = document.getElementById('customerInfoSection');
    if (customerInfoSection) {
        if (cart.length > 0) {
            customerInfoSection.classList.add('visible');
        } else {
            customerInfoSection.classList.remove('visible');
        }
    }

    const paymentSection = document.getElementById('paymentSection');
    if (paymentSection) {
        if (cart.length > 0) {
            paymentSection.classList.add('visible');
        } else {
            paymentSection.classList.remove('visible');
        }
    }

    
    updateDeliveryMinNote();
}

/**
 * Render cart items
 */
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCart.style.display = 'flex';
        return;
    }

    emptyCart.style.display = 'none';
    cartItemsContainer.innerHTML = cart.map(item => {
        const menuItem = menuItems.find(menu => menu.id === item.itemId);
        if (!menuItem) return '';

        const finalPrice = menuItem.price + item.optionPrice;

        return `
            <div class="cart-item">
                <img src="${menuItem.image}" alt="${menuItem.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${menuItem.name}</h4>
                    <div class="cart-item-option">${item.optionName}</div>
                    <div class="cart-item-price">${formatPrice(finalPrice)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="decreaseQuantity(${item.itemId}, '${item.optionName}')">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${item.itemId}, '${item.optionName}')">+</button>
                        <button class="remove-item-btn" onclick="removeFromCart(${item.itemId}, '${item.optionName}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Buka cart modal
 */
function openCart() {
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Tutup cart modal
 */
function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Buka modal pilihan varian produk
 * @param {number} itemId - ID produk yang dipilih
 */
function openProductOptions(itemId) {
    const menuItem = menuItems.find(menu => menu.id === itemId);
    if (!menuItem) return;

    const productOptionsModal = document.getElementById('productOptionsModal');
    const productNameEl = document.getElementById('modalProductName');
    const productImageEl = document.getElementById('modalProductImage');
    const productDescriptionEl = document.getElementById('modalProductDescription');
    const optionsContainer = document.getElementById('modalOptionsContainer');

    // Tampilkan info produk
    if (productNameEl) productNameEl.textContent = menuItem.name;
    if (productImageEl) productImageEl.src = menuItem.image;
    if (productDescriptionEl) {
        productDescriptionEl.textContent = menuItem.description || '';
    }
    

    // Render opsi produk
    if (optionsContainer) {
        optionsContainer.innerHTML = menuItem.options.map(option => {
            const finalPrice = menuItem.price + option.priceModifier;
            const priceText = option.priceModifier !== 0
                ? `${formatPrice(finalPrice)}`
                : formatPrice(menuItem.price);

            return `
                <button class="product-option-btn" onclick="selectOption(${itemId}, '${option.name}', ${option.priceModifier})">
                    <div class="option-name">${option.name}</div>
                    <div class="option-price">${priceText}</div>
                </button>
            `;
        }).join('');
    }
    
    // ✅ INIT SCROLL INDICATOR (WAJIB DI SINI)
    initScrollIndicator(menuItem);

    // Buka modal
    if (productOptionsModal) {
        productOptionsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Tutup modal pilihan varian produk
 */
function closeProductOptions() {
    const productOptionsModal = document.getElementById('productOptionsModal');
    if (productOptionsModal) {
        productOptionsModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Pilih opsi varian dan tambah ke cart
 * @param {number} itemId - ID produk
 * @param {string} optionName - Nama opsi
 * @param {number} optionPrice - Harga modifier opsi
 */
function selectOption(itemId, optionName, optionPrice) {
    addToCart(itemId, optionName, optionPrice);
    closeProductOptions();
}

/**
 * Handle pesan via WhatsApp dari cart
 */
function handleOrderFromCart() {
    if (cart.length === 0) {
        alert('Keranjang masih kosong!');
        return;
    }

    // Cek apakah warung buka
    if (!checkIsOpen()) {
        alert(`Maaf, warung sedang TUTUP. Jam buka: ${operatingHours.open} - ${operatingHours.close}`);
        return;
    }

    // Cek apakah metode pengiriman sudah dipilih
    const pickupOption = document.getElementById('pickupOption');
    const deliveryOption = document.getElementById('deliveryOption');

    if (!pickupOption.checked && !deliveryOption.checked) {
        alert('Silakan pilih metode pengiriman terlebih dahulu (Ambil di Tempat atau Delivery)');
        return;
    }

    // Validasi minimal order untuk delivery
    if (deliveryType === 'delivery') {
        const totalItems = calculateTotalItems();
        const minItems = getMinDeliveryByAddress();

        if (totalItems < minItems) {
            alert(`Minimal order Delivery ${minItems} item untuk alamat di luar Desa Cinagara.`);
            return;
        }
    }

    // Validasi nama dan alamat pelanggan
    const nameInput = document.getElementById('customerName');
    const addressInput = document.getElementById('customerAddress');

    if (!nameInput.value.trim()) {
        alert('Silakan isi nama lengkap Anda!');
        nameInput.focus();
        nameInput.classList.add('invalid');
        return;
    }

    if (!addressInput.value.trim()) {
        alert('Silakan isi alamat lengkap Anda!');
        addressInput.focus();
        addressInput.classList.add('invalid');
        return;
    }

    // Cek apakah metode pembayaran sudah dipilih
    const cashOption = document.getElementById('cashOption');
    const transferOption = document.getElementById('transferOption');

    if (!cashOption.checked && !transferOption.checked) {
        alert('Silakan pilih metode pembayaran terlebih dahulu (Cash atau Transfer)');
        return;
    }

    // Simpan data pelanggan
    customerName = nameInput.value.trim();
    customerAddress = addressInput.value.trim();

    const message = generateWhatsAppMessage();
    openWhatsApp(message);

    // Opsional: Kosongkan cart setelah pesan
    // clearCart();
    // closeCart();
}

/**
 * Tampilkan notifikasi item ditambahkan
 */
function showAddedNotification() {
    // Bisa ditambahkan notifikasi toast jika diinginkan
    // Untuk sekarang, cart count akan berwarna/animasi
    const cartCount = document.querySelector('.cart-count');
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
}

// ============================
// RENDER FUNCTIONS
// ============================

/**
 * Render menu card HTML
 * @param {Object} item - Item menu
 * @returns {string} HTML string untuk menu card
 */
function renderMenuCard(item) {
    const discountedPrice = getDiscountedPrice(item.price, item.discount);

    let priceDisplay = formatPrice(discountedPrice);
    if (item.discount) {
        priceDisplay = `
            <span class="original-price">${formatPrice(item.price)}</span>
            <span class="discounted-price">${formatPrice(discountedPrice)}</span>
            <span class="discount-badge">-${item.discount}%</span>
        `;
    }

    return `
        <div class="menu-card clickable-card" onclick="openProductOptions(${item.id})" data-category="${item.category}">
            <div class="menu-image-container">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="menu-image"
                    loading="lazy"
                    onload="this.classList.add('loaded')"
                    onerror="this.src='https://placehold.co/400x300/CCCCCC/666666?text=Image+Not+Found'"
                >
                <span class="menu-badge">${item.category}</span>
                ${item.isBestSeller ? '<span class="best-seller-badge">🔥 Best Seller</span>' : ''}
            </div>
            <div class="menu-content">
                <div class="menu-header">
                    <h4 class="menu-title">${item.name}</h4>
                    ${item.rating ? `<div class="menu-rating">${renderStars(item.rating)} <span class="review-count">(${item.reviewCount})</span></div>` : ''}
                </div>
                <p class="menu-description">${item.description}</p>
                <div class="menu-footer">
                    <div class="menu-price">${priceDisplay}</div>
                    ${item.preparationTime ? `<div class="prep-time">⏱️ ${item.preparationTime}</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

/**
 * Render semua menu berdasarkan kategori
 * @param {string} category - Kategori yang dipilih (default: 'Semua')
 * @param {string} filter - Filter tambahan (search, favorite)
 */
function renderMenus(category = 'Semua', filter = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    const emptyState = document.getElementById('emptyState');

    let filteredItems = menuItems;

    // Filter by category
    if (category !== 'Semua') {
        filteredItems = filteredItems.filter(item => item.category === category);
    }


    // Filter by search term
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
        );
    }

    // Render menu atau tampilkan empty state
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <p>Tidak ada menu yang ditemukan</p>
        `;
    } else {
        menuGrid.innerHTML = filteredItems.map(item => renderMenuCard(item)).join('');
        emptyState.style.display = 'none';
    }
}

// ============================
// EVENT LISTENERS
// ============================

/**
 * Update status jam operasional
 */
function updateOperatingStatus() {
    const statusElement = document.getElementById('operatingStatus');
    const hoursElement = document.getElementById('operatingHours');
    
    if (!statusElement || !hoursElement) return;

    const isOpen = checkIsOpen();

    if (isOpen) {
        statusElement.innerHTML = 'BUKA';
        statusElement.className = 'operating-status open';
    } else {
        statusElement.innerHTML = 'TUTUP';
        statusElement.className = 'operating-status closed';
    }

    // Update jam operasional
    hoursElement.innerHTML = `${operatingHours.open} - ${operatingHours.close}`;
}

/**
 * Setup event listener untuk filter buttons
 */
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Hapus class active dari semua button
            filterButtons.forEach(b => b.classList.remove('active'));

            // Tambah class active ke button yang diklik
            this.classList.add('active');

            // Get category dari data attribute
            const category = this.getAttribute('data-category');
            const filter = this.getAttribute('data-filter') || 'all';

            // Render menu sesuai kategori dan filter
            renderMenus(category, filter);
        });
    });
}

/**
 * Setup event listener untuk cart buttons
 */
function setupCartButtons() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const orderNowBtn = document.getElementById('orderNowBtn');
    const chatSellerBtn = document.getElementById('chatSellerBtn');
    const contactBtn = document.getElementById('contactBtn');

    // Delivery option radio buttons
    const pickupOption = document.getElementById('pickupOption');
    const deliveryOption = document.getElementById('deliveryOption');

    // Customer info inputs
    const nameInput = document.getElementById('customerName');
    const addressInput = document.getElementById('customerAddress');

    // Product options modal
    const productOptionsModal = document.getElementById('productOptionsModal');
    const closeProductOptionsBtn = document.getElementById('closeProductOptionsBtn');
    const productOptionsOverlay = document.getElementById('productOptionsOverlay');

    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    if (orderNowBtn) {
        orderNowBtn.addEventListener('click', handleOrderFromCart);
    }

    if (chatSellerBtn) {
        chatSellerBtn.addEventListener('click', handleChatSeller);
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', handleChatSeller);
    }

    // Setup product options modal events
    if (closeProductOptionsBtn) {
        closeProductOptionsBtn.addEventListener('click', closeProductOptions);
    }

    if (productOptionsOverlay) {
        productOptionsOverlay.addEventListener('click', closeProductOptions);
    }

    // Setup delivery type radio buttons
    if (pickupOption) {
        pickupOption.addEventListener('change', function() {
            if (this.checked) {
                deliveryType = 'pickup';
            }
        });
    }

    if (deliveryOption) {
        deliveryOption.addEventListener('change', function () {
            if (this.checked) {
                const totalItems = calculateTotalItems();

                const minItems = getMinDeliveryByAddress();

                    if (totalItems < minItems) {
                        showToast(
                            `Alamat di luar Desa Cinagara Minimal order ${minItems} item/porsi`,
                            'error'
                        );

                    // Batalkan pilihan delivery
                    this.checked = false;

                    // Kembali ke pickup
                    const pickupOption = document.getElementById('pickupOption');
                    if (pickupOption) pickupOption.checked = true;

                    deliveryType = 'pickup';
                    return;
                }

                deliveryType = 'delivery';
            }
        });
    }

    // Setup payment method radio buttons
    const cashOption = document.getElementById('cashOption');
    const transferOption = document.getElementById('transferOption');

    if (cashOption) {
        cashOption.addEventListener('change', function() {
            if (this.checked) {
                paymentMethod = 'cash';
            }
        });
    }

    if (transferOption) {
        transferOption.addEventListener('change', function() {
            if (this.checked) {
                paymentMethod = 'transfer';
            }
        });
    }

    // Setup customer info inputs - remove invalid class on input
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            this.classList.remove('invalid');
            if (this.value.trim()) {
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
            }
        });
    }

    if (addressInput) {
        addressInput.addEventListener('input', function() {
            this.classList.remove('invalid');
            if (this.value.trim()) {
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
            }
        });
    }

    // Setup search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchTerm = e.target.value;
            const activeFilter = document.querySelector('.filter-btn.active');
            const category = activeFilter ? activeFilter.getAttribute('data-category') : 'Semua';
            const filter = activeFilter ? activeFilter.getAttribute('data-filter') || 'all' : 'all';
            renderMenus(category, filter);
        });
    }



    // Update operating hours status
    updateOperatingStatus();

    // Close cart dengan tombol ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCart();
            closeProductOptions();
        }
    });
}

/**
 * Update tahun copyright
 */
function updateCopyrightYear() {
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

// ============================
// INITIALIZATION
// ============================

/**
 * Initialize aplikasi saat DOM loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Render semua menu
    renderMenus('Semua');

    // Setup filter buttons
    setupFilterButtons();

    // Setup cart buttons
    setupCartButtons();

    // Update copyright year
    updateCopyrightYear();

    // Initialize cart UI
    updateCartUI();

    // Log ke console untuk debugging
    console.log('✅ Website Warung Makan Berkah berhasil dimuat!');
    console.log(`📱 Nomor WhatsApp: ${WHATSAPP_NUMBER}`);
    console.log(`🍽️ Total menu: ${menuItems.length} items`);
    console.log('🛒 Sistem cart aktif - Pelanggan bisa memesan beberapa menu');
});

// ============================
// EXPOSE FUNCTIONS TO GLOBAL SCOPE
// ============================

// Expose functions untuk dipanggil dari HTML attributes (onclick, dll)
window.addToCart = addToCart;
window.decreaseQuantity = decreaseQuantity;
window.increaseQuantity = increaseQuantity;
window.removeFromCart = removeFromCart;
window.openWhatsApp = openWhatsApp;
window.openProductOptions = openProductOptions;
window.closeProductOptions = closeProductOptions;
window.selectOption = selectOption;

function initScrollIndicator(menuItem) {
    const container = document.getElementById('modalOptionsContainer');
    const indicator = document.getElementById('optionsScrollIndicator');

    if (!container || !indicator) return;

    // RESET
    indicator.classList.remove('show');
    container.scrollTop = 0;

    let lastScrollTop = 0;

    // Delay kecil → penting untuk HP
    requestAnimationFrame(() => {
        const isScrollable = container.scrollHeight > container.clientHeight + 2;

        // ❌ JIKA TIDAK SCROLLABLE → JANGAN TAMPILKAN
        if (!isScrollable) {
            indicator.classList.remove('show');
            return;
        }

        // ✅ MUNCUL PERTAMA KALI
        indicator.textContent = 'Masih ada pilihan lain ↓';
        indicator.classList.add('show');

        container.onscroll = () => {
            const currentScroll = container.scrollTop;

            // Scroll ke bawah → sembunyikan
            if (currentScroll > lastScrollTop + 5) {
                indicator.classList.remove('show');
            }

            // Scroll ke atas (belum mentok atas)
            if (currentScroll < lastScrollTop - 5 && currentScroll > 10) {
                indicator.textContent = 'Masih ada pilihan di atas ↑';
                indicator.classList.add('show');
            }

            // Di posisi paling atas
            if (currentScroll <= 10) {
                indicator.textContent = 'Masih ada pilihan lain ↓';
                indicator.classList.add('show');
            }

            lastScrollTop = currentScroll;
        };
    });
}



