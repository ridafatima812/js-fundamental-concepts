// ===============================
// c2.js — validateUser Function
// ===============================

function validateUser(data) {
    const errors = [];

    // Create a clean copy (do not mutate original)
    const user = {
        name: data.name,
        email: data.email,
        age: data.age,
        password: data.password,
        role: data.role ?? 'user'
    };

    // -----------------------
    // NAME VALIDATION
    // -----------------------
    if (typeof user.name !== 'string' || user.name.trim() === '') {
        errors.push('Name must be a non-empty string');
    }

    // -----------------------
    // EMAIL VALIDATION
    // -----------------------
    if (typeof user.email !== 'string' || !user.email.includes('@') || !user.email.includes('.')) {
        errors.push('Email must be a valid email address');
    }

    // -----------------------
    // AGE VALIDATION
    // -----------------------
    const convertedAge = Number(user.age);

    if (user.age === '' || isNaN(convertedAge)) {
        errors.push('Age must be a valid number');
    } else if (convertedAge < 13 || convertedAge > 120) {
        errors.push('Age must be between 13 and 120');
    } else {
        user.age = convertedAge; // clean value
    }

    // -----------------------
    // PASSWORD VALIDATION
    // -----------------------
    if (typeof user.password !== 'string' || user.password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    // -----------------------
    // ROLE VALIDATION
    // -----------------------
    const allowedRoles = ['admin', 'editor', 'user'];

    if (user.role !== undefined && !allowedRoles.includes(user.role)) {
        errors.push("Role must be 'admin', 'editor', or 'user'");
    }

    // -----------------------
    // FINAL RESPONSE
    // -----------------------
    if (errors.length > 0) {
        return {
            valid: false,
            errors
        };
    }

    return {
        valid: true,
        user
    };
}

// ===============================
// TEST CASES
// ===============================

console.log(validateUser({
    name: 'Ali',
    email: 'ali@test.com',
    age: '25',
    password: 'pass1234'
}));

console.log(validateUser({
    name: '',
    email: 'notanemail',
    age: 10,
    password: 'abc'
}));

console.log(validateUser({
    name: 'Sara',
    email: 'sara@x.io',
    age: 30,
    password: 'secure99',
    role: 'admin'
}));

console.log(validateUser({
    name: 'X',
    email: 'x@x.com',
    age: '17abc',
    password: 'hello123'
}));