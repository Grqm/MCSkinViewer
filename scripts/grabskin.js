function getUUID(username) {
    fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`, {
        method: 'GET',
        headers : {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    }).then (res => res.json())
    .then (data => {
        return data;
    });
}