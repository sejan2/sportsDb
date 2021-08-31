document.getElementById('error-message').style.display = "none"
const searchTeam = () => {
    const searchTeam = document.getElementById('search-team');
    searchText = searchTeam.value;

    searchTeam.value = '';
    if (searchText == '') {
        searchTeam.value = "please write Something"
    }
    else {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.teams))
            .catch(error => displayError(error))
    }
}
const displayError = (error) => {
    document.getElementById('error-message').style.display = "block"
}


const displaySearchResult = teams => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    teams.forEach(team => {
        // console.log(team)

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="clickId(${team.idTeam})" class="card">
                <img src="${team.strTeamBadge}" class="card-img-top " alt="" style="width: 18rem">
                <div class=" card-body">
                    <h5 class="card-title">${team.strAlternate}</h5>
                    <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>
                </div>
        </div>`
        searchResult.appendChild(div);

    })
}
const clickId = (leagueId) => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${leagueId}`
    fetch(url)
        .then(res => res.json())
        .then(data => dispalyData(data.teams[0]))
}
const dispalyData = team => {
    // console.log(team);
    const mealDetails = document.getElementById('team-detail');
    mealDetails.textContent = '';
    const divId = document.createElement('div')
    divId.classList.add('card');
    divId.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${team.strTeamBadge}" class="card-img-top" alt="..." style="margin-left:50px;">
                <div class="card-body">
                    <h5 class="card-title">${team.strLeague}</h5>
                    <p class="card-text">${team.strStadiumDescription.slice(0, 100)}</p>

                </div>
            </div>`;
    mealDetails.appendChild(divId);
}
