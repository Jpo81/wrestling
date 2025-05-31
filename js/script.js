// Navegação e Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Tabs na seção de regras
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            tabBtns.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Esconder todos os conteúdos
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Mostrar o conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animação de scroll suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação para os pins do mapa
    const mapPins = document.querySelectorAll('.map-pin');
    mapPins.forEach(pin => {
        pin.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.3)';
            this.style.backgroundColor = '#febd27';
        });
        
        pin.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%)';
            this.style.backgroundColor = '#e03740';
        });
    });
    
    // Criar PDFs de exemplo para download
    createSamplePDFs();
});

// Função para criar PDFs de exemplo
function createSamplePDFs() {
    // Esta função seria implementada com uma biblioteca como jsPDF
    // Para este exemplo, vamos apenas criar links que alertam o usuário
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Este é um exemplo de download. Em um site real, este botão baixaria um arquivo PDF.');
        });
    });
}

// Detectar scroll para animar elementos quando entrarem na viewport
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .celebrity-card, .info-card, .timeline-container');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Se o elemento estiver visível na viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animated');
        }
    });
});
