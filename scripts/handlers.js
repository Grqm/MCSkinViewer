document.getElementById('submitUsername').addEventListener('click', function() {
    let username = document.getElementById('username');
    if (username.value) {
        console.log(getUUID(username.value));
    }
});