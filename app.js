const url = "https://api.github.com/users";
const srchBtnEl = document.getElementById("srchbtn");
const user = document.getElementById("srchinput");
const profileEL = document.getElementById("profile");
const loadingEL = document.getElementById('loading')

const generateProfile = (profile) => {
  return `
        <div class="card-container">
        <div class="avtar flex">
          <div class="avatar-img flex">
            <img
              id="avImg"
              src="${profile.avatar_url}"
              alt=""
            />
            <div class="avtar-desc">
              <h1>${profile.name}</h1>
              <h2>${profile.login}</h2>
            </div>
          </div>
          <a href="${profile.html_url} target="_blank""
          <button class="btn">Check profile</button>
          </a>
        </div>
        <div class="about">
          <h2>About</h2>
          <h3>${profile.bio}</h3>
        </div>
        <div class="last">
          <div class="follower">
            <h2>Folloer</h2>
            <h3>${profile.followers}</h3>
          </div>
          <div class="following">
            <h2>Following</h2>
            <h3>${profile.following}</h3>
          </div>
          <div class="repos">
            <h2>Repos</h2>
            <h3>${profile.public_repos}</h3>
          </div>
        </div>
      </div>
      `;
};

const fecthProfile = async () => {
  try {
    const res = await fetch(`${url}/${user.value}`);
    const data = await res.json();

    if (data.bio) {
        loadingEL.innerHTML = ""
        profileEL.innerHTML = generateProfile(data);
        
    }
    else{
loadingEL.innerHTML= data.message
profileEL.innerText= ""
    }

  } catch (error) {
    console.log(error);
  }
};

srchBtnEl.addEventListener("click", fecthProfile);
