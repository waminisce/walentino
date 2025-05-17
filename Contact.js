const menu = document.getElementById("togglebtn");
const navMenu = document.getElementById('navmenu');
const form = document.getElementById('form');
const nameEl = document.getElementById('name');
const subjectEl = document.getElementById("Subject")
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("Email");
const messageEl = document.getElementById('message')
const BTNSubmit = document.getElementById('submit');
const result = document.getElementById("result")



menu.addEventListener('click', (e) => {
    e.preventDefault(); 
    navMenu.classList.toggle('show-header3'); 
});


// let contact = {}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = nameEl.value.trim();
    const subject = subjectEl.value.trim();
    const phone = phoneEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();
    
    const contact = {name, subject, phone, email, message}

     name in localStorage ? alert('this name is already exist!') : localStorage.setItem(name,JSON.stringify(contact))

    
     let test = localStorage.getItem(name)
    //  result.innerHTML += `${test}`

    
})


// Define an object to store contact information.
// const contact = {
//     name: '',
//     subject: '',
//     phone: '',
//     email: '',
//     message: ''
// };

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
    // Get input values and trim whitespace.
    // contact.name = Name.value.trim();
    // contact.subject = Subject.value.trim();
    // contact.phone = phone.value.trim();
    // contact.email = Email.value.trim();
    // contact.message = message.value.trim();

    // Check if any field is empty.
    // if (!contact.name || !contact.subject || !contact.phone || !contact.email || !contact.message) {
    //     alert('Please fill in all the fields.');
    //     return;
    // }

    // Check if the name already exists in localStorage
    // if (localStorage.getItem(contact.name)) {
    //     alert('This name already exists in localStorage.');
    // } else {
        // Store the contact object in localStorage with the name as the key.
//         localStorage.setItem(contact.name, JSON.stringify(contact));
//         alert('Your message has been saved!');
//     }
// });