/**
 * =========================================================================
 * CYBERSECURITY PORTFOLIO - LOGIC & RENDER ENGINE
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initHero();
    initStats();
    initAbout();
    initSkills();
    initCertifications();
    initCreatedMachines();
    initResolvedCTFs();
    initProjects();
    initContact();
    initCanvasAnimation();
    initMobileNav();
    initModal();
});

// -------------------------------------------------------------------------
// 1. HERO SECTION & TYPING EFFECT
// -------------------------------------------------------------------------
function initHero() {
    const p = portfolioData.personal;
    
    // Status text & indicator
    const heroStatus = document.getElementById('hero-status');
    if (heroStatus) heroStatus.textContent = p.status;

    // Name & Handle
    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = p.name;

    const heroBio = document.getElementById('hero-bio');
    if (heroBio) heroBio.textContent = p.subtitle;

    // Terminal in hero
    const termName = document.getElementById('term-user');
    if (termName) termName.textContent = p.handle;

    // Social icons
    const heroSocials = document.getElementById('hero-socials');
    if (heroSocials) {
        heroSocials.innerHTML = `
            ${p.social.github ? `<a href="${p.social.github}" target="_blank" rel="noopener" class="social-icon" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
            ${p.social.youtube ? `<a href="${p.social.youtube}" target="_blank" rel="noopener" class="social-icon" title="YouTube"><i class="fab fa-youtube"></i></a>` : ''}
            ${p.social.linkedin ? `<a href="${p.social.linkedin}" target="_blank" rel="noopener" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>` : ''}
            ${p.social.hackthebox ? `<a href="${p.social.hackthebox}" target="_blank" rel="noopener" class="social-icon" title="Hack The Box"><i class="fas fa-cube"></i></a>` : ''}
            ${p.social.tryhackme ? `<a href="${p.social.tryhackme}" target="_blank" rel="noopener" class="social-icon" title="TryHackMe"><i class="fas fa-fire"></i></a>` : ''}
            ${p.social.email ? `<a href="${p.social.email}" class="social-icon" title="Email"><i class="fas fa-envelope"></i></a>` : ''}
        `;
    }

    // Typewriter effect
    const typewriterElem = document.getElementById('typewriter-text');
    if (typewriterElem) {
        const phrases = [
            "Ethical Hacker & Pentester",
            "CTF Player (HTB & THM)",
            "Vulnerable Machine Creator",
            "Red Teaming & Active Directory",
            "Security Researcher"
        ];
        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIdx];
            if (isDeleting) {
                typewriterElem.textContent = currentPhrase.substring(0, charIdx - 1);
                charIdx--;
            } else {
                typewriterElem.textContent = currentPhrase.substring(0, charIdx + 1);
                charIdx++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIdx === currentPhrase.length) {
                typeSpeed = 1800; // Pause at end of phrase
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                typeSpeed = 400; // Pause before typing next
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }
}

// -------------------------------------------------------------------------
// 2. STATS RIBBON
// -------------------------------------------------------------------------
function initStats() {
    const s = portfolioData.personal.stats;
    const statsContainer = document.getElementById('stats-ribbon');
    if (!statsContainer) return;

    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="stat-number">${s.ctfsSolved}</span>
            <span class="stat-label">CTFs Resueltos</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${s.machinesCreated}</span>
            <span class="stat-label">Máquinas Creadas</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${s.certificationsCount}</span>
            <span class="stat-label">Certificaciones</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${s.yearsExp}</span>
            <span class="stat-label">Experiencia & Lab</span>
        </div>
    `;
}

// -------------------------------------------------------------------------
// 3. ABOUT ME
// -------------------------------------------------------------------------
function initAbout() {
    const p = portfolioData.personal;
    const aboutAvatar = document.getElementById('about-avatar');
    if (aboutAvatar) aboutAvatar.src = p.avatar;

    const aboutName = document.getElementById('about-name');
    if (aboutName) aboutName.textContent = p.name;

    const aboutHandle = document.getElementById('about-handle');
    if (aboutHandle) aboutHandle.textContent = `@${p.handle}`;

    const aboutBio = document.getElementById('about-bio-text');
    if (aboutBio) {
        // Convert paragraph breaks
        const paragraphs = p.bio.split('\n\n');
        aboutBio.innerHTML = paragraphs.map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`).join('');
    }

    const cvBtn = document.getElementById('cv-download-btn');
    if (cvBtn && p.cvUrl) {
        cvBtn.href = p.cvUrl;
    }
}

// -------------------------------------------------------------------------
// 4. SKILLS & ARSENAL
// -------------------------------------------------------------------------
function initSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = portfolioData.skillCategories.map(cat => {
        let contentHtml = '';

        if (cat.skills) {
            contentHtml = cat.skills.map(s => `
                <div class="skill-bar-container">
                    <div class="skill-bar-header">
                        <span>${s.name}</span>
                        <span class="mono neon-text-green">${s.level}%</span>
                    </div>
                    <div class="skill-bar-track">
                        <div class="skill-bar-fill" style="width: ${s.level}%"></div>
                    </div>
                </div>
            `).join('');
        } else if (cat.tags) {
            contentHtml = `
                <div class="skill-tags-cloud">
                    ${cat.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            `;
        }

        return `
            <div class="cyber-card">
                <h3 class="skill-category-title">
                    <i class="fas ${cat.icon}"></i> ${cat.category}
                </h3>
                ${contentHtml}
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------------------
// 5. CERTIFICATIONS
// -------------------------------------------------------------------------
function initCertifications() {
    const certsGrid = document.getElementById('certs-grid');
    if (!certsGrid) return;

    certsGrid.innerHTML = portfolioData.certifications.map(cert => {
        const isCompleted = cert.status.toLowerCase().includes('completada');
        const statusClass = isCompleted ? 'status-completed' : 'status-in-progress';
        const statusIcon = isCompleted ? 'fa-check-circle' : 'fa-spinner fa-spin';

        return `
            <div class="cyber-card cert-card">
                <div>
                    <div class="cert-header">
                        <img src="${cert.badge}" alt="${cert.title} Badge" class="cert-badge-img" onerror="this.src='https://via.placeholder.com/65x65?text=CERT'">
                        <div class="cert-info">
                            <h3>${cert.title}</h3>
                            <div class="cert-issuer"><i class="fas fa-shield-alt"></i> ${cert.issuer} • ${cert.date}</div>
                        </div>
                    </div>
                    <span class="cert-status-badge ${statusClass}">
                        <i class="fas ${statusIcon}"></i> ${cert.status}
                    </span>
                    <p class="cert-description">${cert.description}</p>
                </div>
                ${cert.verifyUrl && cert.verifyUrl !== '#' ? `
                    <div>
                        <a href="${cert.verifyUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
                            <i class="fas fa-external-link-alt"></i> Verificar Credencial
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------------------
// 6. AUTHOR CREATED MACHINES
// -------------------------------------------------------------------------
function initCreatedMachines() {
    const machinesGrid = document.getElementById('created-machines-grid');
    if (!machinesGrid) return;

    machinesGrid.innerHTML = portfolioData.createdMachines.map(mach => {
        const diffClass = `diff-${mach.difficulty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
        
        return `
            <div class="cyber-card">
                <div class="machine-card-header">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        ${mach.logo ? `<img src="${mach.logo}" alt="${mach.title}" style="width: 38px; height: 38px; border-radius: 6px; object-fit: contain; background: rgba(0,0,0,0.3); padding: 2px; border: 1px solid var(--border-color);" onerror="this.style.display='none'">` : ''}
                        <h3 class="machine-title">
                            <i class="fas fa-microchip neon-text-green"></i> ${mach.title}
                        </h3>
                    </div>
                    <span class="badge-diff ${diffClass}">${mach.difficulty}</span>
                </div>
                <div class="machine-platform">
                    Plataforma: <span>${mach.platform}</span> | SO: <span>${mach.os}</span>
                </div>
                <p class="machine-desc">${mach.shortDescription}</p>
                <div class="machine-tags">
                    ${mach.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
                </div>
                <div class="machine-footer">
                    ${mach.downloadUrl ? `
                        <a href="${mach.downloadUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                            <i class="fas fa-download"></i> Descargar
                        </a>
                    ` : ''}
                    ${mach.platformUrl ? `
                        <a href="${mach.platformUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
                            <i class="fas fa-external-link-alt"></i> Plataforma
                        </a>
                    ` : ''}
                    <button class="btn btn-secondary btn-sm" onclick="openMachineModal('${mach.id}')">
                        <i class="fas fa-file-alt"></i> Ficha
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------------------
// 7. CTFS RESUELTOS & FILTERS
// -------------------------------------------------------------------------
let currentFilter = {
    platform: 'all',
    difficulty: 'all',
    search: ''
};

function initResolvedCTFs() {
    renderCTFs();

    // Search bar listener
    const searchInput = document.getElementById('ctf-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilter.search = e.target.value.toLowerCase().trim();
            renderCTFs();
        });
    }

    // Platform filter buttons
    const platformPills = document.querySelectorAll('[data-filter-platform]');
    platformPills.forEach(pill => {
        pill.addEventListener('click', () => {
            platformPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter.platform = pill.getAttribute('data-filter-platform');
            renderCTFs();
        });
    });

    // Difficulty filter buttons
    const diffPills = document.querySelectorAll('[data-filter-diff]');
    diffPills.forEach(pill => {
        pill.addEventListener('click', () => {
            diffPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter.difficulty = pill.getAttribute('data-filter-diff');
            renderCTFs();
        });
    });
}

function renderCTFs() {
    const grid = document.getElementById('ctfs-grid');
    if (!grid) return;

    const filtered = portfolioData.resolvedCTFs.filter(ctf => {
        // Platform match
        const platformMatch = currentFilter.platform === 'all' || 
            ctf.platform.toLowerCase().replace(/\s+/g, '') === currentFilter.platform.toLowerCase();

        // Difficulty match
        const diffNormalized = ctf.difficulty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const diffMatch = currentFilter.difficulty === 'all' || diffNormalized === currentFilter.difficulty;

        // Search match
        const searchMatch = !currentFilter.search || 
            ctf.title.toLowerCase().includes(currentFilter.search) ||
            ctf.tags.some(t => t.toLowerCase().includes(currentFilter.search)) ||
            ctf.category.toLowerCase().includes(currentFilter.search);

        return platformMatch && diffMatch && searchMatch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted); font-family: var(--font-mono);">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                No se encontraron CTFs con los criterios seleccionados.
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(ctf => {
        const diffClass = `diff-${ctf.difficulty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
        const osIcon = ctf.os.toLowerCase().includes('windows') ? 'fab fa-windows' : 'fab fa-linux';

        return `
            <div class="cyber-card ctf-card">
                <div>
                    <div class="ctf-card-header">
                        <h4 class="ctf-card-title">
                            <i class="${osIcon} ctf-os-icon"></i> ${ctf.title}
                        </h4>
                        <span class="badge-diff ${diffClass}">${ctf.difficulty}</span>
                    </div>
                    <div class="ctf-card-platform">
                        <i class="fas fa-tag"></i> ${ctf.platform} • ${ctf.category}
                    </div>
                    <p class="ctf-summary">${ctf.summary}</p>
                    <div class="machine-tags">
                        ${ctf.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
                    </div>
                </div>
                <div style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                    <button class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;" onclick="openCTFModal('${ctf.id}')">
                        <i class="fas fa-terminal"></i> Ver Resumen de Explotación
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------------------
// 8. PROJECTS & TOOLS
// -------------------------------------------------------------------------
function initProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = portfolioData.projects.map(proj => `
        <div class="cyber-card project-card">
            <div class="project-header">
                <span class="project-category">${proj.category}</span>
                <h3 class="project-title">${proj.title}</h3>
            </div>
            <p class="project-desc">${proj.description}</p>
            <div class="machine-tags">
                ${proj.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
            </div>
            <div style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
                    <i class="fab fa-github"></i> Ver en GitHub
                </a>
            </div>
        </div>
    `).join('');
}

// -------------------------------------------------------------------------
// 9. CONTACT SECTION
// -------------------------------------------------------------------------
function initContact() {
    const p = portfolioData.personal;
    const channels = document.getElementById('contact-channels');
    if (!channels) return;

    channels.innerHTML = `
        ${p.social.email ? `
            <a href="${p.social.email}" class="btn btn-primary">
                <i class="fas fa-envelope"></i> Enviar Correo
            </a>
        ` : ''}
        ${p.social.youtube ? `
            <a href="${p.social.youtube}" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fab fa-youtube" style="color: #ff0033;"></i> Canal de YouTube
            </a>
        ` : ''}
        ${p.social.linkedin ? `
            <a href="${p.social.linkedin}" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
        ` : ''}
        ${p.social.github ? `
            <a href="${p.social.github}" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fab fa-github"></i> GitHub
            </a>
        ` : ''}
    `;
}

// -------------------------------------------------------------------------
// 10. MODAL WRITEUP / MACHINE DETAILS VIEWER
// -------------------------------------------------------------------------
function initModal() {
    const modalOverlay = document.getElementById('writeup-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn && modalOverlay) {
        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(title, meta, contentHtml) {
    const modalOverlay = document.getElementById('writeup-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMeta = document.getElementById('modal-meta');
    const modalBody = document.getElementById('modal-body');

    if (!modalOverlay) return;

    modalTitle.innerHTML = title;
    modalMeta.textContent = meta;
    modalBody.innerHTML = contentHtml;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('writeup-modal');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Global modal triggers
window.openCTFModal = function(ctfId) {
    const ctf = portfolioData.resolvedCTFs.find(c => c.id === ctfId);
    if (!ctf) return;

    const title = `<i class="fas fa-flag neon-text-green"></i> Writeup: ${ctf.title}`;
    const meta = `${ctf.platform} | Dificultad: ${ctf.difficulty} | SO: ${ctf.os} | Fecha: ${ctf.date}`;

    const contentHtml = `
        <div class="writeup-step">
            <h4 class="writeup-step-title"><i class="fas fa-radar"></i> 1. Reconocimiento & Escaneo</h4>
            <p class="writeup-step-content">${ctf.writeup.recon}</p>
        </div>

        <div class="writeup-step">
            <h4 class="writeup-step-title"><i class="fas fa-door-open"></i> 2. Acceso Inicial / Explotación</h4>
            <p class="writeup-step-content">${ctf.writeup.initialAccess}</p>
        </div>

        <div class="writeup-step">
            <h4 class="writeup-step-title"><i class="fas fa-arrow-alt-circle-up"></i> 3. Escalada de Privilegios</h4>
            <p class="writeup-step-content">${ctf.writeup.privilegeEscalation}</p>
        </div>

        <div class="writeup-step" style="border-color: rgba(0, 255, 157, 0.4);">
            <h4 class="writeup-step-title neon-text-green"><i class="fas fa-lightbulb"></i> Conclusiones Clave</h4>
            <p class="writeup-step-content">${ctf.writeup.keyTakeaways}</p>
        </div>
    `;

    openModal(title, meta, contentHtml);
};

window.openMachineModal = function(machId) {
    const mach = portfolioData.createdMachines.find(m => m.id === machId);
    if (!mach) return;

    const title = `<i class="fas fa-microchip neon-text-green"></i> Ficha Técnica: ${mach.title}`;
    const meta = `Plataforma: ${mach.platform} | Dificultad: ${mach.difficulty} | SO: ${mach.os}`;

    const contentHtml = `
        <div class="writeup-step">
            <h4 class="writeup-step-title"><i class="fas fa-info-circle"></i> Escenario y Concepto</h4>
            <p class="writeup-step-content">${mach.fullDetails.scenario}</p>
        </div>

        <div class="writeup-step">
            <h4 class="writeup-step-title"><i class="fas fa-bug"></i> Vector de Ataque (User Flag)</h4>
            <p class="writeup-step-content">${mach.fullDetails.attackVector}</p>
            ${mach.fullDetails.flagUser ? `<div class="writeup-code-block">Flag User: ${mach.fullDetails.flagUser}</div>` : ''}
        </div>

        <div class="writeup-step">
            <h4 class="writeup-step-title"><i class="fas fa-crown"></i> Escalada de Privilegios (Root Flag)</h4>
            <p class="writeup-step-content">${mach.fullDetails.privilegeEscalation}</p>
            ${mach.fullDetails.flagRoot ? `<div class="writeup-code-block">Flag Root: ${mach.fullDetails.flagRoot}</div>` : ''}
        </div>
    `;

    openModal(title, meta, contentHtml);
};

// -------------------------------------------------------------------------
// 11. MOBILE NAVIGATION
// -------------------------------------------------------------------------
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
}

// -------------------------------------------------------------------------
// 12. SUBTLE MATRIX / CYBER PARTICLES BACKGROUND
// -------------------------------------------------------------------------
function initCanvasAnimation() {
    const canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(width / 25), 55); // Adaptive density

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            color: Math.random() > 0.5 ? '#00ff9d' : '#00e5ff'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    animate();
}
