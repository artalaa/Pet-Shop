const products = document.querySelectorAll('.product-item img');

products.forEach(product => {
    product.addEventListener('click', () => {
        const productContainer = product.closest('.product-item');
        productContainer.style.transform = 'scale(1.1)';
        setTimeout(() => {
            productContainer.style.transform = 'scale(1)';
        }, 200);
    });
});


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
