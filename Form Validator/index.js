const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const successMessage = document.getElementById('successMessage');

    // Validation rules
    const validators = {
      username: (value) => {
        if (!value.trim()) return 'Username is required';
        if (value.length < 3) return 'Username must be at least 3 characters';
        if (value.length > 20) return 'Username must be less than 20 characters';
        if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
        return '';
      },
      email: (value) => {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      },
      password: (value) => {
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter';
        if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter';
        if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number';
        return '';
      },
      confirmPassword: (value) => {
        if (!value) return 'Please confirm your password';
        if (value !== password.value) return 'Passwords do not match';
        return '';
      },
      phone: (value) => {
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        if (value.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits';
        return '';
      }
    };

    function showError(input, message) {
      const errorElement = document.getElementById(`${input.id}Error`);
      errorElement.textContent = message;
      errorElement.classList.add('show');
      input.classList.add('error');
      input.classList.remove('success');
    }

    function showSuccess(input) {
      const errorElement = document.getElementById(`${input.id}Error`);
      errorElement.classList.remove('show');
      input.classList.remove('error');
      input.classList.add('success');
    }

    function validateField(input) {
      const validator = validators[input.id];
      if (!validator) return true;

      const error = validator(input.value);
      if (error) {
        showError(input, error);
        return false;
      } else {
        showSuccess(input);
        return true;
      }
    }

    [username, email, password, confirmPassword, phone].forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
    
    password.addEventListener('input', () => {
      if (confirmPassword.value) {
        validateField(confirmPassword);
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isUsernameValid = validateField(username);
      const isEmailValid = validateField(email);
      const isPasswordValid = validateField(password);
      const isConfirmPasswordValid = validateField(confirmPassword);
      const isPhoneValid = validateField(phone);

      if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid) {
        successMessage.classList.add('show');
        
        setTimeout(() => {
          form.reset();
          [username, email, password, confirmPassword, phone].forEach(input => {
            input.classList.remove('success');
          });
          successMessage.classList.remove('show');
        }, 3000);

        console.log('Form data:', {
          username: username.value,
          email: email.value,
          password: password.value,
          phone: phone.value
        });
      }
    });