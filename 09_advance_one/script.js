const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
let avatarUrl;

xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        avatarUrl = data.avatar_url;
    }
}
xhr.send();

document.querySelector(".btn").addEventListener('click', function() {
    const card = document.querySelector("#card");
    card.innerHTML = `<img src="${avatarUrl}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover;">`;
});