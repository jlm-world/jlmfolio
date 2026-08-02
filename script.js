
function switchResumeTab(tabId, btn) {
    document.querySelectorAll('.resume-tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.resume-nav-btn').forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    if (btn) {
        btn.classList.add('active');
    }
}

function switchPortfolioTab(tabId, btn) {
    // Hide ALL portfolio sub-tabs
    document.querySelectorAll('.portfolio-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from ALL portfolio buttons
    document.querySelectorAll('.portfolio-nav-btn').forEach(button => {
        button.classList.remove('active');
    });

    // Show ONLY the clicked tab
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to clicked button
    if (btn) {
        btn.classList.add('active');
    }
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    
    if (btn) {
        btn.classList.add('active');
        localStorage.setItem('activeTab', tabId);
    }

    // Handle Resume sub-nav on mobile
    const resumeNavbar = document.querySelector('.resume-navbar');
    if (resumeNavbar) {
        if (tabId === 'resume' && window.innerWidth <= 900) {
            resumeNavbar.classList.add('mobile-show');
        } else {
            resumeNavbar.classList.remove('mobile-show');
        }
    }
    
    // Handle Portfolio sub-nav on mobile
    const portfolioNavbar = document.querySelector('.portfolio-navbar');
    if (portfolioNavbar) {
        if (tabId === 'portfolio' && window.innerWidth <= 900) {
            portfolioNavbar.classList.add('mobile-show');
        } else {
            portfolioNavbar.classList.remove('mobile-show');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        const targetButton = Array.from(document.querySelectorAll('.nav-btn')).find(button => {
            return button.getAttribute('onclick')?.includes(`'${savedTab}'`);
        });

        if (targetButton) {
            switchTab(savedTab, targetButton);
        } else {
            switchTab('about', document.querySelector('.nav-btn'));
        }
    } else {
        switchTab('about', document.querySelector('.nav-btn'));
    }
});

function toggleSidebarDropdown() {
    const collapseContent = document.getElementById('sidebarCollapse');
    const icon = document.getElementById('dropdown-icon');
    collapseContent.classList.toggle('show');
    
    if (collapseContent.classList.contains('show')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
}  // ✅ THIS WAS MISSING!