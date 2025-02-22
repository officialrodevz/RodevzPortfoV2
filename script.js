// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // View Projects button functionality
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    viewProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Set Discord invite URL
    const discordBtn = document.getElementById('discord-btn');
    discordBtn.href = discordInviteUrl;

    // Modal elements
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImages = document.getElementById('modal-images');
    const modalDescription = document.getElementById('modal-description');
    const modalJoinBtn = document.getElementById('modal-join-btn');
    const closeBtn = document.querySelector('.close');

    // Debugging: Check if modal elements are found
    console.log('Modal:', modal);
    console.log('Modal Title:', modalTitle);
    console.log('Modal Images:', modalImages);
    console.log('Modal Description:', modalDescription);
    console.log('Modal Join Button:', modalJoinBtn);
    console.log('Close Button:', closeBtn);

    // Dynamically load projects
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) {
        console.error('Project grid not found!');
        return;
    }

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        let joinButton = '';
        if (project.joinUrl) {
            joinButton = `<a href="${project.joinUrl}" target="_blank" class="join-btn" onclick="event.stopPropagation();">Join Game</a>`;
        }
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${joinButton}
        `;
        projectCard.addEventListener('click', (e) => {
            // Prevent modal from opening when clicking the join button
            if (e.target.classList.contains('join-btn')) return;

            console.log(`Opening modal for ${project.title}`);
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.detailedDescription;
            modalImages.innerHTML = '';
            [project.image, ...project.additionalImages].forEach(imgUrl => {
                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = `${project.title} screenshot`;
                modalImages.appendChild(img);
            });
            if (project.joinUrl) {
                modalJoinBtn.style.display = 'block';
                modalJoinBtn.href = project.joinUrl;
            } else {
                modalJoinBtn.style.display = 'none';
            }
            modal.style.display = 'block';
        });
        projectGrid.appendChild(projectCard);
    });

    // Modal close functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            console.log('Closing modal');
            modal.style.display = 'none';
        });
    } else {
        console.error('Close button not found!');
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Closing modal by clicking outside');
            modal.style.display = 'none';
        }
    });

    // Dynamically load staff
    const staffGrid = document.getElementById('staff-grid');
    if (!staffGrid) {
        console.error('Staff grid not found!');
        return;
    }
    staff.forEach(member => {
        const staffCard = document.createElement('div');
        staffCard.classList.add('staff-card');
        staffCard.innerHTML = `
            <img src="${member.avatarUrl}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        staffGrid.appendChild(staffCard);
    });

    // Animation on scroll for both projects and staff
    const animatedCards = document.querySelectorAll('.project-card, .staff-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    animatedCards.forEach(card => observer.observe(card));

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('span');

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.textContent = 'light_mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            icon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
