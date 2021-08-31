const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = (data) => {
    const buddies = data.results;
    const buddyDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy)
        const p = document.createElement('p')
        p.innerText = `age:${buddy.dob.age} ${buddy.name.last},email:${buddy.email}`;
        buddyDiv.appendChild(p);
    }
}