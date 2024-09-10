document.addEventListener('DOMContentLoaded', function() {
    const addStudentForm = document.getElementById('addStudentForm');
    const editStudentForm = document.getElementById('editStudentForm');
    const contactForm = document.getElementById('contactForm');
    const studentTable = document.getElementById('studentTable');

    if (addStudentForm) {
        addStudentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const nic = document.getElementById('nic').value;

            if (!validateEmail(email)) {
                alert('Invalid email address');
                return;
            }

            if (!validatePhone(phone)) {
                alert('Invalid phone number');
                return;
            }

            if (!validateNIC(nic)) {
                alert('Invalid NIC');
                return;
            }

            // Add the student to the table (mock functionality)
            const row = studentTable.insertRow();
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = email;
            row.insertCell(2).textContent = phone;
            row.insertCell(3).textContent = nic;
            row.insertCell(4).innerHTML = '<button>Edit</button>';

            addStudentForm.reset();
        });
    }

    if (editStudentForm) {
        editStudentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle student update (mock functionality)
            alert('Student updated');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent');
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    function validateNIC(nic) {
        const re = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
        return re.test(nic);
    }
});
