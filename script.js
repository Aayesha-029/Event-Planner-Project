// ==================== HOME PAGE JAVASCRIPT ====================

// TEST: Check if script is loading
console.log('Script.js is loaded');
console.log('Calendar button exists:', document.getElementById('calendar-btn') !== null);
// ========== CALENDAR BUTTON WITH LOGIN CHECK ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded - DOMContentLoaded');
    
    // Calendar button event listener
    const calendarBtn = document.getElementById('calendar-btn');
    if (calendarBtn) {
        console.log('Calendar button found, adding event listener');
        calendarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Calendar button clicked');
            checkLoginBeforeCalendar();
        });
    } else {
        console.log('Calendar button NOT found');
    }
    
    // Cart button event listener
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            console.log('Cart button clicked');
            updateCartModal();
            openModal('cart-modal');
        });
    }
    
    // Check if user just logged in and wants to open calendar
    const openCalendarAfterLogin = localStorage.getItem('openCalendarAfterLogin');
    console.log('openCalendarAfterLogin flag:', openCalendarAfterLogin);
    
    if (openCalendarAfterLogin === 'true') {
        // Clear the flag
        localStorage.removeItem('openCalendarAfterLogin');
        
        // Open calendar after a short delay
        setTimeout(function() {
            console.log('Opening calendar after login');
            window.open('calendar_act.html');
        }, 1000);
    }
    
    changeEvent();
    updateCartModal();
    updateCartCount();
    updateCartButtonNumber();
    
    const flag = localStorage.getItem('openCartOnLoad');
    if (flag === 'true') {
        localStorage.removeItem('openCartOnLoad');
        setTimeout(() => {
            openCart();
        }, 500);
    }
});

// ========== CHECK LOGIN BEFORE ACCESSING CALENDAR ==========
function checkLoginBeforeCalendar() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    console.log('Is logged in check:', isLoggedIn);
    
    if (isLoggedIn) {
        // User is logged in, open calendar directly
        console.log('User is logged in, opening calendar');
        window.open('calendar_act.html');
    } else {
        // User is not logged in, redirect to login page
        console.log('User not logged in, redirecting to login');
        
        // Set flag to indicate we want to open calendar after login
        localStorage.setItem('openCalendarAfterLogin', 'true');
        
        // Redirect to login page
        window.location.href = 'login.html';
    }
}

// ========== MODAL HANDLING ==========
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// ========== CLOSE MODALS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});

// ========== FOOTER TAB HANDLING ==========
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});

// ========== CART MODAL FUNCTION ==========
function updateCartModal() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    
    if (!cartList || !totalSpan) return;
    
    let cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    cartList.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartList.innerHTML = `
            <div style="text-align: center; padding: 30px; color: #333;">
                <i class="fas fa-shopping-cart" style="font-size: 48px; color: #D4AF37;"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        totalSpan.textContent = '0';
        return;
    }
    
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #D4AF37;
            margin-bottom: 5px;
        `;
        
        itemDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${item.img || 'https://via.placeholder.com/50'}" 
                     style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>₹${item.price} x ${item.quantity}</small>
                </div>
            </div>
            <div>
                <span style="color: #D4AF37; font-weight: bold;">₹${item.price * item.quantity}</span>
                <button onclick="removeFromCart(${index})" 
                    style="background: #dc3545; color: white; border: none; border-radius: 3px; padding: 5px 10px; margin-left: 10px; cursor: pointer;">
                    Remove
                </button>
            </div>
        `;
        cartList.appendChild(itemDiv);
    });
    
    totalSpan.textContent = total;
}

// ========== REMOVE FROM CART ==========
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('eventCart', JSON.stringify(cart));
    updateCartModal();
    updateCartCount();
    updateCartButtonNumber();
}

// ========== OPEN CART ==========
function openCart() {
    updateCartModal();
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'block';
    }
}

// ========== UPDATE CART COUNT ==========
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = `(${count})`;
    }
}

// ========== ADD TO CART BUTTON NUMBER DISPLAY ==========
function updateCartButtonNumber() {
    const cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBtn = document.getElementById('cart-btn');
    
    if (cartBtn) {
        let numberSpan = document.getElementById('cart-number');
        
        if (!numberSpan) {
            numberSpan = document.createElement('span');
            numberSpan.id = 'cart-number';
            numberSpan.style.cssText = `
                background: #D4AF37;
                color: black;
                border-radius: 50%;
                padding: 2px 6px;
                font-size: 12px;
                margin-left: 5px;
                font-weight: bold;
                display: inline-block;
            `;
            cartBtn.appendChild(numberSpan);
        }
        
        if (totalItems > 0) {
            numberSpan.textContent = totalItems;
            numberSpan.style.display = 'inline-block';
        } else {
            numberSpan.style.display = 'none';
        }
    }
}

// ========== CHECKOUT BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.onclick = function(e) {
            e.preventDefault();
            
            const cart = JSON.parse(localStorage.getItem('eventCart')) || [];
            
            if (cart.length === 0) {
                alert('❌ Your cart is empty! Add some items first.');
                return;
            }
            
            const selectedDate = localStorage.getItem('selectedEventDate');
            const selectedTime = localStorage.getItem('selectedEventTime');
            
            if (!selectedDate) {
                alert('❌ Please select a date from calendar first!');
                return;
            }
            
            if (!selectedTime) {
                alert('❌ Please select a time slot from calendar first!');
                return;
            }
            
            // Get all bookings
            let allBookings = JSON.parse(localStorage.getItem('eventBookings')) || [];
            
            // Find existing booking that matches BOTH date AND time slot
            const existingBookingIndex = allBookings.findIndex(b => 
                b.eventDate === selectedDate && 
                b.eventTime === selectedTime
            );
            
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            if (existingBookingIndex !== -1) {
                const existingBooking = allBookings[existingBookingIndex];
                
                if (!existingBooking.items) {
                    existingBooking.items = [];
                }
                
                cart.forEach(newItem => {
                    const existingItemIndex = existingBooking.items.findIndex(item => 
                        item.name === newItem.name && 
                        item.category === newItem.category
                    );
                    
                    if (existingItemIndex !== -1) {
                        existingBooking.items[existingItemIndex].quantity += newItem.quantity;
                    } else {
                        existingBooking.items.push({
                            name: newItem.name,
                            price: newItem.price,
                            quantity: newItem.quantity,
                            category: newItem.category || 'General',
                            event: newItem.event || 'Event',
                            subEvent: newItem.subEvent || '',
                            img: newItem.img || ''
                        });
                    }
                });
                
                existingBooking.total = (existingBooking.total || 0) + totalAmount;
                existingBooking.source = existingBooking.source === 'calendar' ? 'both' : existingBooking.source || 'cart';
                existingBooking.itemsAddedDate = new Date().toLocaleString();
                existingBooking.status = existingBooking.status || 'pending';
                
                allBookings[existingBookingIndex] = existingBooking;
                localStorage.setItem('eventBookings', JSON.stringify(allBookings));
                localStorage.removeItem('eventCart');
                
                const cartCount = document.getElementById('cart-count');
                if (cartCount) cartCount.textContent = '0';
                
                const cartNumber = document.getElementById('cart-number');
                if (cartNumber) cartNumber.style.display = 'none';
                
                const cartModal = document.getElementById('cart-modal');
                if (cartModal) cartModal.style.display = 'none';
                
                window.location.href = 'booking.html';
                
            } else {
                alert('❌ No booking found for this date and time. Please book the date first from calendar.');
                return;
            }
        };
    }
});

// ========== HERO ANIMATION ==========
const events = [
    { name: 'Wedding Celebration', info: 'A grand and graceful Wedding experience with exquisite venues.', bg: 'img3.avif' },
    { name: 'Corporate Event', info: 'Tailored for business gatherings. Professional setup with all amenities.', bg: 'newyear.jpg' },
    { name: 'Birthday Party', info: 'Make every Birthday unforgettable with cakes and music.', bg: 'birthday4.webp' },
    { name: 'Anniversaries', info: 'Celebrate love and togetherness with romantic themes.', bg: 'party.jpg' }
];

let currentEvent = 0;
const heroSection = document.querySelector(".hero");
const eventNameEl = document.getElementById('event-name');
const eventInfoEl = document.getElementById('event-info');

function changeEvent() {
    const event = events[currentEvent];
    if (eventNameEl) eventNameEl.textContent = event.name;
    if (eventInfoEl) eventInfoEl.textContent = event.info;
    if (heroSection) heroSection.style.backgroundImage = `url('${event.bg}')`;
    currentEvent = (currentEvent + 1) % events.length;
}

// Start hero animation
if (document.querySelector(".hero")) {
    setInterval(changeEvent, 5000);
}

// ========== LOGIN FUNCTION ==========
function login() {
    window.location.href = "login.html";
}

// ========== STORAGE EVENT LISTENER ==========
window.addEventListener('storage', (e) => {
    if (e.key === 'eventCart') {
        updateCartModal();
        updateCartCount();
        updateCartButtonNumber();
    }
});

// ========== ADMIN FUNCTIONS ==========
document.addEventListener("DOMContentLoaded", function() {
    checkAdminButton();
    
    const adminBtn = document.getElementById('admin-btn');
    if (adminBtn) {
        adminBtn.addEventListener('click', function() {
            window.open('admin.html', '_blank');
            setTimeout(function() {
                adminBtn.style.display = 'none';
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('role');
                localStorage.removeItem('userEmail');
            }, 500);
        });
    }
    
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) checkAdminButton();
    });
});

function checkAdminButton() {
    const adminBtn = document.getElementById('admin-btn');
    if (!adminBtn) return;
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');
    adminBtn.style.display = (isLoggedIn && role === 'admin') ? 'inline-block' : 'none';
}

function handleLogin(role) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', role);
    alert(role === 'admin' ? 'Admin logged in' : 'User logged in');
    window.location.href = 'project.html';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('openCalendarAfterLogin');
    checkAdminButton();
    window.location.href = 'project.html';
}

window.addEventListener('load', function() {
    checkAdminButton();
    updateCartButtonNumber();
});

setInterval(updateCartButtonNumber, 1000);