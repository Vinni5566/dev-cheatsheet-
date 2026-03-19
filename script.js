/**
 * 1. THEME MANAGEMENT
 * Handles dark mode persistence using localStorage.
 */
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Apply the saved theme immediately on script load
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
}

// Toggle theme and update localStorage
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.hasAttribute('data-theme');
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

/**
 * 2. DOM REFERENCES & STATE
 */
const cardsContainer = document.getElementById('cardsContainer');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let currentSearchTerm = '';

/**
 * 3. INITIALIZATION
 */
function initializeApp() {
    // Render all cards from data.js
    renderCards(cheatsheetData);
    
    // Search listener
    if (searchInput) {
        searchInput.addEventListener('keyup', handleSearch);
    }
    
    // Filter listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });
}

/**
 * 4. FILTER & SEARCH LOGIC
 */
function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase();
    filterAndRenderCards();
}

function handleFilter(event) {
    // UI Update
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // State Update
    currentFilter = event.target.getAttribute('data-filter');
    
    filterAndRenderCards();
}

function filterAndRenderCards() {
    const filtered = cheatsheetData.filter(item => {
        const categoryMatch = currentFilter === 'all' || item.category === currentFilter;
        const searchMatch = item.title.toLowerCase().includes(currentSearchTerm) ||
                            item.description.toLowerCase().includes(currentSearchTerm);
        
        return categoryMatch && searchMatch;
    });
    
    renderCards(filtered);
}

/**
 * 5. RENDERING & DOM CONSTRUCTION
 */
function renderCards(cardsToRender) {
    cardsContainer.innerHTML = '';
    
    if (cardsToRender.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    cardsToRender.forEach(item => {
        const card = createCardElement(item);
        cardsContainer.appendChild(card);
    });
}

function createCardElement(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${item.title}</h3>
            <span class="card-category">${item.category}</span>
        </div>
        <p class="card-description">${item.description}</p>
        <pre class="card-code">${escapeHtml(item.code)}</pre>
        <button class="copy-btn" data-code="${escapeHtml(item.code)}">Copy Code</button>
    `;
    
    const copyButton = card.querySelector('.copy-btn');
    copyButton.addEventListener('click', handleCopyClick);
    
    return card;
}

/**
 * 6. CLIPBOARD & UTILITIES
 */
function handleCopyClick(event) {
    const button = event.target;
    const code = button.getAttribute('data-code');
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        button.textContent = 'Copied!';
        button.classList.add('copied');
        setTimeout(() => {
            button.textContent = 'Copy Code';
            button.classList.remove('copied');
        }, 2000);
    });
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, char => map[char]);
}

/**
 * 7. EXECUTION
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
