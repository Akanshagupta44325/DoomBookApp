const loginform = document.getElementById('loginForm');
        loginform.addEventListener('submit',(event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
        });
const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener ('submit',(event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
});
function fetchBooks() {
    
}
