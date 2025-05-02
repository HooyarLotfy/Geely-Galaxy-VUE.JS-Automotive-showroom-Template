$(document).ready(function() {
    // Slider functionality
    const $items = $('.slider .list .item');
    const $next = $('#next');
    const $prev = $('#prev');
    const $thumbnails = $('.thumbnail .item');
    const countItem = $items.length;
    let itemActive = 0;
    let refreshInterval;

    $next.on('click', function() {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    });

    $prev.on('click', function() {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    });

    function showSlider() {
        $('.slider .list .item.active, .thumbnail .item.active').removeClass('active');
        $items.eq(itemActive).addClass('active');
        $thumbnails.eq(itemActive).addClass('active');
        setPositionThumbnail();

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            $next.click();
        }, 6000);
    }

    function setPositionThumbnail() {
        const $thumbnailActive = $('.thumbnail .item.active');
        const rect = $thumbnailActive[0].getBoundingClientRect();
        if (rect.left < 0 || rect.right > $(window).width()) {
            $thumbnailActive[0].scrollIntoView({ behavior: "smooth", inline: "nearest" });
        }
    }

    $thumbnails.on('click', function() {
        itemActive = $(this).index();
        showSlider();
    });

    $(document).on('keydown', function(event) {
        if (event.key === "ArrowRight") {
            $next.click();
        } else if (event.key === "ArrowLeft") {
            $prev.click();
        }
    });

    // Initialize slider auto-scroll
    refreshInterval = setInterval(() => {
        $next.click();
    }, 6000);
});

$(document).ready(function() {
    // Mobile menu functionality
    const $navbar = $('#navbar');
    
    $('#open-sidebar-button').on('click', function() {
        $navbar.addClass('show');
        $('body').css('overflow', 'hidden');
        $('#close-sidebar-button, #overlay, .nav__list i').show();
        $(this).hide();
    });

    $('#close-sidebar-button, #overlay, .nav__list i').on('click', function() {
        $navbar.removeClass('show');
        $('body').css('overflow', '');
        $('#open-sidebar-button').show();
    });

    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $navbar.removeClass('show');
            $('body').css('overflow', '');
        }
    });
});

// Lenis smooth scroll initialization
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Smooth scroll and button click handlers
document.querySelectorAll('.slider-btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        const select = document.getElementById('service');
        
        lenis.scrollTo('.contact-section', {
            offset: -50,
            duration: 1.5,
            easing: (t) => Math.sin((t * Math.PI) / 2),
        });

        setTimeout(() => {
            if (buttonText.includes('Order')) {
                select.value = 'dealer-contact';
            } else if (buttonText.includes('Test')) {
                select.value = 'test-drive';
            }
            select.focus();
        }, 1500);
    });
});

// Auto-type functionality for E8.html
if (window.location.pathname.toLowerCase().includes('e8.html')) {
    const btn1 = document.getElementById('slider-btn1');
    const btn2 = document.getElementById('slider-btn2');
    const textarea = document.getElementById('message');
    const e8Text = 'Interested in E8 model';

    function autoTypeE8() {
        lenis.scrollTo('.contact-section', {
            offset: -50,
            duration: 1.5,
            easing: (t) => Math.sin((t * Math.PI) / 2),
        });
        setTimeout(() => {
            textarea.value = e8Text;
            textarea.focus();
        }, 1500);
    }

    if (btn1) btn1.addEventListener('click', autoTypeE8);
    if (btn2) btn2.addEventListener('click', autoTypeE8);
}

if (window.location.pathname.toLowerCase().includes('star8.html')) {
    const btn1 = document.getElementById('slider-btn3');
    const btn2 = document.getElementById('slider-btn4');
    const textarea = document.getElementById('message');
    const Star8Text = 'Interested in Star 8 model';

    function autoTypeStar8() {
        lenis.scrollTo('.contact-section', {
            offset: -50,
            duration: 1.5,
            easing: (t) => Math.sin((t * Math.PI) / 2),
        });
        setTimeout(() => {
            if (textarea) {
                textarea.value = Star8Text;
                textarea.focus();
            }
        }, 1500);
    }

    if (btn1) btn1.addEventListener('click', autoTypeStar8);
    if (btn2) btn2.addEventListener('click', autoTypeStar8);
}
if (window.location.pathname.toLowerCase().includes('l380.html')) {
    const btn1 = document.getElementById('slider-btn5');
    const btn2 = document.getElementById('slider-btn6');
    const textarea = document.getElementById('message');
    const L380Text = 'Interested in L380 model';

    function autoTypeL380() {
        lenis.scrollTo('.contact-section', {
            offset: -50,
            duration: 1.5,
            easing: (t) => Math.sin((t * Math.PI) / 2),
        });
        setTimeout(() => {
            if (textarea) {
                textarea.value = L380Text;
                textarea.focus();
            }
        }, 1500);
    }

    if (btn1) btn1.addEventListener('click', autoTypeL380);
    if (btn2) btn2.addEventListener('click', autoTypeL380);
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Features Section Animation
const featuresTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".features-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        scrub: false,
    }
});

featuresTimeline
    .from(".features-container", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    })
    .from(".feature-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: {
            each: 0.1,
            ease: "power2.out"
        }
    }, "-=0.3")
    .from(".features-text", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4");

// Contact Form Animation
const contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        scrub: false,
    }
});

contactTimeline
    .fromTo(".contact-title", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(".contact-form", 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
    )
    .fromTo(".form-group", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
    )
    .fromTo(".submit-btn", 
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
    )
    .fromTo(".form-status", 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.3"
    );

// Footer animations
gsap.to(".footer-scanline", {
    y: 60,
    repeat: -1,
    yoyo: true,
    duration: 2.2,
    ease: "power1.inOut"
});

gsap.to(".footer-smoke .smoke:nth-child(1)", {
    x: -40,
    y: -30,
    scale: 1.25,
    opacity: 0.23,
    repeat: -1,
    yoyo: true,
    duration: 6,
    ease: "sine.inOut"
});
gsap.to(".footer-smoke .smoke:nth-child(2)", {
    x: 30,
    y: -22,
    scale: 1.18,
    opacity: 0.18,
    repeat: -1,
    yoyo: true,
    duration: 7.5,
    ease: "sine.inOut"
});
gsap.to(".footer-smoke .smoke:nth-child(3)", {
    x: -25,
    y: -18,
    scale: 1.22,
    opacity: 0.21,
    repeat: -1,
    yoyo: true,
    duration: 8.5,
    ease: "sine.inOut"
});

// Contact form submission functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) {
        console.error("Contact form or status element not found");
        return;
    }

    // Handle form submission for Basin
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        status.innerHTML = "Sending message...";

        // Gather form data
        const formData = new FormData(form);

        // Send form data to Basin endpoint via AJAX
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                status.innerHTML = "Thank you! Your message has been sent.";
                form.reset();
            } else {
                response.json().then(data => {
                    status.innerHTML = data.error || "Oops! There was a problem submitting your form.";
                }).catch(() => {
                    status.innerHTML = "Oops! There was a problem submitting your form.";
                });
            }
        })
        .catch(() => {
            status.innerHTML = "Oops! There was a problem submitting your form.";
        });
    });
    });

