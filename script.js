document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Login successful! User ${user.name} is now here.`);
        $('#authModal').modal('hide');
        document.getElementById('loginNav').innerText = `Welcome, ${user.name}`;
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('signUpConfirmPassword').value;
    const name = prompt("Please enter your name:");
    if (password === confirmPassword) {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers.push({ email, password, name });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert('Sign Up successful!');
        $('#authModal').modal('hide');
        document.getElementById('loginNav').innerText = `Welcome, ${name}`;
    } else {
        document.getElementById('signUpError').style.display = 'block';
    }
});

document.getElementById('switchToSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    $('#signup-tab').tab('show');
});

let currentIndex = 0;
    const slides = document.querySelectorAll('.category-slide');
    
    function showSlide(index) {
        (document.querySelectorAll('.category-slide')).forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (document.querySelectorAll('.category-slide')).length;
        showSlide(currentIndex);
    }
 setInterval(nextSlide, 3000);


src;"https://code.jquery.com/jquery-3.6.0.min.js">
src;"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
    $(document).ready(function(){
        $('.product-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    // Create a PixiJS application
    let app = new PIXI.Application({ width: 1000, height: 400, backgroundColor: 0xFFFFFF });
    document.getElementById('pixiCanvas').appendChild(app.view);

    // Load images
    const loader = new PIXI.Loader();
    loader
        .add('grooming', 'grooming-1.jpg')
        .add('vetcare', 'vetcare-1.jpg')
        .add('boarding', 'boarding-1.jpg')
        .load(setup);

    function setup() {
        let groomingTexture = loader.resources.grooming.texture;
        let vetcareTexture = loader.resources.vetcare.texture;
        let boardingTexture = loader.resources.boarding.texture;

        // Create sprites
        let grooming = new PIXI.Sprite(groomingTexture);
        let vetcare = new PIXI.Sprite(vetcareTexture);
        let boarding = new PIXI.Sprite(boardingTexture);

        // Set size and position of sprites
        grooming.width = 300;
        grooming.height = 200;
        grooming.x = 50;
        grooming.y = 100;

        vetcare.width = 300;
        vetcare.height = 200;
        vetcare.x = 350;
        vetcare.y = 100;

        boarding.width = 300;
        boarding.height = 200;
        boarding.x = 650;
        boarding.y = 100;

        // Add filters (blur and color matrix)
        const blurFilter = new PIXI.filters.BlurFilter();
        blurFilter.blur = 2;

        const colorMatrix = new PIXI.filters.ColorMatrixFilter();
        colorMatrix.contrast(1.5);

        grooming.filters = [blurFilter, colorMatrix];
        vetcare.filters = [blurFilter, colorMatrix];
        boarding.filters = [blurFilter, colorMatrix];

        // Add interactive animations
        grooming.interactive = true;
        grooming.buttonMode = true;
        grooming.on('pointerover', () => { grooming.scale.set(1.1); });
        grooming.on('pointerout', () => { grooming.scale.set(1); });

        vetcare.interactive = true;
        vetcare.buttonMode = true;
        vetcare.on('pointerover', () => { vetcare.scale.set(1.1); });
        vetcare.on('pointerout', () => { vetcare.scale.set(1); });

        boarding.interactive = true;
        boarding.buttonMode = true;
        boarding.on('pointerover', () => { boarding.scale.set(1.1); });
        boarding.on('pointerout', () => { boarding.scale.set(1); });

        // Add sprites to the stage
        app.stage.addChild(grooming);
        app.stage.addChild(vetcare);
        app.stage.addChild(boarding);

        // Create a simple slider
        let currentIndex = 0;
        const sprites = [grooming, vetcare, boarding];

        function showSprite(index) {
            sprites.forEach((sprite, i) => {
                sprite.visible = (i === index);
            });
        }

        showSprite(currentIndex);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % sprites.length;
                showSprite(currentIndex);
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + sprites.length) % sprites.length;
                showSprite(currentIndex);
            }
        });
    }
});


