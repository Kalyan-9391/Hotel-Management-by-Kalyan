document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.9)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 0';
        }
    });

    // Expand Menu Functionality
    const expandBtn = document.getElementById('expandMenuBtn');
    const expandedMenu = document.getElementById('expandedMenu');

    expandBtn.addEventListener('click', () => {
        if (expandedMenu.classList.contains('hidden')) {
            expandedMenu.classList.remove('hidden');
            expandBtn.textContent = 'Hide Full Menu';
            
            // Simulating loading more items (in a real app, this might fetch from an API)
            expandedMenu.innerHTML = `
                <h3 style="color: var(--gold); margin-bottom: 20px; font-family: var(--font-heading);">Coming Soon...</h3>
                <div style="display: flex; flex-direction: column; gap: 15px; text-align: left; max-width: 600px; margin: 0 auto;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <h4 style="color: #fff; margin-bottom: 5px;">🍳 Breakfast Section</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Idli, Vada, Upma, Poha, and Masala Dosa.</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <h4 style="color: #fff; margin-bottom: 5px;">🍹 Beverages Menu</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Spiced Buttermilk, Filter Coffee, Sweet Lassi, and Fresh Lime Soda.</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <h4 style="color: #fff; margin-bottom: 5px;">📄 Printable PDF Menu</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Download a beautifully formatted PDF version of our full menu for physical use.</p>
                    </div>
                </div>
            `;
        } else {
            expandedMenu.classList.add('hidden');
            expandBtn.textContent = 'Explore Full Menu';
        }
    });
});
