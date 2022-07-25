/* COMPONENTES COMPARTIDOS */

Vue.component('app-header', {
    template: `
    <header class="header">
        <!-- Navbar -->
        <div class="navbar">
            <a href="./index.html" class="navbar-logo">
                <img src="./img/logos/escudo-unsij-white.png" alt="Escudo de la UNSIJ." width="60"> 
                <span class="navbar-logo-name hidden lg:block">Licenciatura en Informática</span>
                <span class="navbar-logo-name block lg:hidden">Lic. en Informática</span>
            </a>
            <nav class="navbar-nav">
                <div class="navbar-nav-content">
                    <ul class="navbar-nav-content-ul">
                        <li>
                            <slot name="about"></slot>                                
                        </li>
                        <li>
                            <slot name="login-info"></slot>   
                        </li>
                        <li>
                            <slot name="students"></slot>   
                        </li>
                        <li>
                            <slot name="teachers"></slot>   
                        </li>
                        <li>
                            <slot name="contact"></slot>     
                        </li>
                        <li>
                            <slot name="faqs"></slot>    
                        </li>
                    </ul>
                </div>
                <button class="navbar-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="navbar-menu-icon" id="menu-botton" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>                        
            </nav>                
        </div>
        <!-- /Navbar -->
    </header>
    `
});

Vue.component('app-menu-mobile', {
    template: `
    <div class="hidden xl:hidden menu-mobile" id="menu">
        <nav class="menu-mobile-nav">               
            <ul class="menu-mobile-nav-ul">            
                <li>
                    <slot name="about"></slot>                                
                </li>
                <li>
                    <slot name="login-info"></slot>   
                </li>
                <li>
                    <slot name="students"></slot>   
                </li>
                <li>
                    <slot name="teachers"></slot>   
                </li>
                <li>
                    <slot name="contact"></slot>     
                </li>
                <li>
                    <slot name="faqs"></slot>    
                </li>
                <li>
                    <hr>   
                </li>
                <li>
                    <a href="http://www.unsij.edu.mx/webmail/src/login.php" target="_blank" class="brand-link">                        
                        Correo institucional
                    </a>
                </li>
                <li>
                    <a href="https://aula.unsij.edu.mx/moodle/login/index.php" target="_blank" class="brand-link">                        
                        Aula virtual
                    </a>
                </li>
                <li>
                    <a href="https://alumnos.unsij.edu.mx/user_sessions/new" target="_blank" class="brand-link">
                        NES
                    </a>
                </li>
                <li>
                    <a href="http://lectus.unsij.edu.mx:8080/lectus/" target="_blank" class="brand-link">
                        LECTUS
                    </a>
                </li>
            </ul>
            <div class="menu-mobile-button">
                <button class="menu-mobile-button-close" id="btn-close">Cerrar</button>
            </div>
        </nav>                     
    </div>
    `
})

Vue.component('app-footer', {
    template: `
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-content-logos">
                <div class="mx-auto">
                    <a href="http://www.unsij.edu.mx/" target="_blank">
                        <img src="./img/logos/escudo-unsij-white.png" alt="Escudo UNSIJ." class="h-28 w-auto object-cover">
                    </a>
                </div>
                <div class="mx-auto">
                    <a href="http://www.suneo.mx/" target="_blank">
                        <img src="./img/logos/suneo.png" alt="Escudo SUNEO." class="h-14 w-auto object-cover">
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4">
                    <header class="footer-title">Contacto</header>
                    <hr class="title_line mx-0">
                </div>
                <a href="https://goo.gl/maps/1HaMWs4H2GPHsqrJ7" target="_blank" class="footer-link">                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    Camino a la Universidad S/N, 68725 Ixtlán de Juárez, Oax.
                </a>
                <a href="mailto:informatica@unsij.edu.mx" class="footer-link">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>                    
                    informatica@unsij.edu.mx
                </a>
                <a href="tel:951 553 63 62" class="footer-link">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>                    
                951 553 63 62
                </a>
            </div>

            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4">
                    <header class="footer-title">Síguenos</header>
                    <hr class="title_line mx-0">
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <a href="https://www.facebook.com/InformaticaUNSIJ/" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook w-9 h-9" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/unsij_suneo?lang=es" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter w-9 h-9" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/292170188/universidad-de-la-sierra-juarez/?hl=es-la" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram w-9 h-9" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </a> 
                    <a href="https://www.youtube.com/c/UNSIJ_SUNEO" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube w-9 h-9" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </a>                                       
                </div>
            </div>
        </div>
    </footer>
    `
})

Vue.component('app-breadcum-front', {
    template: `
    <nav class="breadcumb-section">
        <a class="breadcumb-item breadcumb-link" href="./index.html">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="breadcumb-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>

            <div>
                <span>
                    Inicio
                </span>
            </div>
        </a>

        <div class="breadcumb-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="breadcumb-icon" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4" />
            </svg>
        </div>

        <div class="breadcumb-item">
            <span>
                <slot name="current-page"></slot>
            </span>
        </div>
    </nav>  
    `
})

Vue.component('app-date', {
    template: `
    <div class="grid" data-aos="zoom-in-up">
        <div class="date_item">
            <div class="date_item-content_icon">
                <div class="date_item-content_icon-form">
                    <span class="date_item-content_icon-form-number">
                    <slot name="number"></slot>
                    </span>
                </div>
            </div>
            <div class="date_item-content_text">
                <p class="date_item-content_text-header">
                    <slot name="title"></slot>
                </p>
                <p class="content_text-dark">
                    <slot name="description"></slot>
                </p>
            </div>
        </div>
    </div>
    `
})


/* INICIO */
Vue.component('app-notice', {
    template: `
    <article class="card_item border-t-8 border-t-accent-500 bg-accent-50">        
        <header class="card_item-header">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="card_item-title-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            </div>
            <p>
                <slot name="title"></slot>
            </p>
        </header>  
        <div class="card_item-body border-none">          
            <!--
                <p class="card_item-description">
                    <slot name="description"></slot>
                </p>
            -->
            <div class="card_item-detail">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="card_item-detail-icon"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>           
                </div>            
                <span>
                    <slot name="date"></slot>
                </span>  
            </div>  
            <div class="card_item-footer justify-end">                        
                <slot name="link"></slot>           
            </div>
        </div>        
    </article>
    `
})

Vue.component('app-event', {
    template: `
    <article class="card_item gap-0">
        <slot name="image"></slot>  
        <div class="card_item-content">
            <header class="card_item-header">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="card_item-title-icon" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                </div>
                <p>
                    <slot name="title"></slot>
                </p>
            </header>  
            <div class="card_item-body border-none">          
                <div class="card_item-detail">                
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="card_item-detail-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>                      
                    <span>
                        <slot name="place"></slot>
                    </span>                 
                </div>          
                <div class="card_item-detail">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="card_item-detail-icon"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>           
                    </div>            
                    <span>
                        <slot name="date"></slot>
                    </span>  
                </div>            
                <div class="card_item-detail">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="card_item-detail-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>          
                    </div>            
                    <span>
                        <slot name="hour"></slot>
                    </span>  
                </div>
                <div class="card_item-footer self-end">                        
                    <div>
                        <slot name="link"></slot>            
                    </div>           
                </div>
            </div>
        </div>              
    </article>
    `
})

Vue.component('app-feature', {
    template: `
    <div class="grid" data-aos="zoom-in">
        <article class="feature_item group">        
            <div class="feature_item-header">
                <div class="feature_item-icon">
                    <slot name="icon"></slot>            
                </div>
                <header class="subtitle w-10/12">
                    <slot name="title"></slot>
                </header>
            </div>
            <div class="feature_item-content">            
                <p class="content_text">
                    <slot name="description"></slot>
                </p>
            </div>
        </article>
    </div>
    `
})

Vue.component('app-promotion', {
    template: `
    <article class="swiper-slide">
        <div class="promotion_card">
            <div class="promotion_card-content_text">
                <header class="title-dark">
                    <slot name="title"></slot>
                </header>                
                <div class="content_text">
                    <slot name="description"></slot>
                </div>
            </div>
            <div class="promotion_card-content_image">
                <slot name="image"></slot>
            </div>
        </div>
    </article>
    `
})

Vue.component('app-evidence', {
    template: `
    <article class="swiper-slide evidence_item">
        <div class="evidence_item-content_image">
            <slot name="image"></slot>
        </div>
        <div class="evidence_item-content_text">
            <header class="subtitle">
                <slot name="title"></slot>
            </header>
            <hr class="title_line mx-0">
            <span class="evidence_item-info">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="evidence_item-info-icon" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </div>
                <span>
                    <slot name="topic"></slot>
                </span>
            </span>
            <span class="evidence_item-info">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="evidence_item-info-icon" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <span>
                <slot name="students"></slot>
                </span>
            </span>
            <span class="evidence_item-info">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="evidence_item-info-icon" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
                <span class="italic font-normal">
                    <slot name="description"></slot>
                </span>
            </span>
        </div>
    </article>
    `
})

Vue.component('app-opinion', {
    template: `    
    <div class="grid">
        <div class="opinion_item group"> 
            <div class="opinion_item-content-text">                            
                <span>
                    <img src="./img/draws/comillas.png" alt="" class="opinion_item-image">
                </span>
                <span class="opinion_item-text">
                    <slot name="description"></slot>
                </span>                                                        
            </div>      

            <div class="opinion_item-footer">                                                         
                <header class="opinion_item-name">
                    <slot name="name"></slot>
                </header>
                <div>
                    <div class="opinion_item-content-avatar">
                        <slot name="image"></slot>
                    </div> 
                </div>   
            </div>                      
        </div>
    </div>
    `
})


/* ACERCA DE */
Vue.component('app-work', {
    template: `
    <article class="swiper-slide evidence_item">
        <div class="evidence_item-content_image">
            <slot name="image"></slot>
        </div>
        <div class="evidence_item-content_text px-10">
            <header class="subtitle text-center">                    
                <slot name="title"></slot>
            </header>
            <hr class="title_line hidden mx-auto lg:block">
            <p>
                <slot name="description"></slot>
            </p>
        </div>
    </article>
    `
})

Vue.component('app-temary', {
    template: `
    <div class="grid" data-aos="zoom-in">
        <article class="temary_item">
            <div class="temary_item-content_header">
                <p class="subtitle">
                    <slot name="title"></slot> 
                </p>
            </div>
            <div class="temary_item-content">
                <ul class="temary_item-content-list">
                    <slot name="content"></slot> 
                </ul>
            </div>
        </article>
    </div>    
    `
})


/* INFORMACIÓN DE INGRESO */
Vue.component('app-requirement', {
    template: `
    <div class="requirement_item">        
        <p>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="requirement_item-content-icon-svg" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="content_text-dark">
                <slot name="description"></slot>
            </div>
        </p>
    </div>
    `
})


/* ALUMNOS */
Vue.component('app-vacant', {
    template: `
    <article class="card_item">        
        <header class="card_item-header">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="card_item-title-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            </div>
            <p>
                <slot name="title"></slot>
            </p>
        </header>  
        <div class="card_item-body">      
            <div class="card_item-content-info">                                                      
                <p class="card_item-company">
                    <slot name="company"></slot>
                </p>                 
            </div>    
            <div class="card_item-detail">                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="card_item-detail-icon" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>                      
                <p>
                    <slot name="place"></slot>
                </p>  
            </div>
            <div class="card_item-detail">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="card_item-detail-icon"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>           
                </div>            
                <span>
                    <slot name="date"></slot>
                </span>  
            </div>   
            <div class="card_item-footer justify-end">                        
                <slot name="link"></slot>           
            </div>
        </div>        
    </article>
    `
})


/* PROFESORES */
Vue.component('app-teacher', {
    template: `  
    <div class="grid" data-aos="zoom-in">
        <article class="teacher_item group">                        
            <div class="teacher_item-content-image">                
                <div class="teacher_item-bg-image">
                    <slot name="image"></slot>
                </div>            
            </div>
            <div class="teacher_item-content-text">
                <header class="teacher_item-title">
                    <slot name="name"></slot>
                </header>
                <div class="teacher_item-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="teacher_item-icon" viewBox="0 0 24 24">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    <p>                        
                        <slot name="grade"></slot>
                    </p>
                </div>    
                <div class="teacher_item-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="teacher_item-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>                    
                    <slot name="email"></slot>                
                </div>  
                <div class="teacher_item-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="teacher_item-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <p>
                        <slot name="office"></slot>                        
                    </p>
                </div>                                                     
                <div class="flex flex-row justify-center lg:justify-end">
                    <slot name="link"></slot> 
                </div>
            </div>
        </article>
    </div>     
    `
})

new Vue({
    el: '#app'
})