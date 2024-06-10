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

