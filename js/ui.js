class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-body mb-3">
            <img src="${user.avatar_url}" alt="${user.name}" class="img-fluid mb-2" id="user-img" />
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block"
              >View Profile</a
            >
          </div>
        </div>
        <div class="col-md-9">
            <div class="card card-body d-inline-block">
              <span class="badge badge-color-2">Public Repos : ${user.public_repos}</span>
              <span class="badge badge-color-1">Public Gists : ${user.public_gists}</span>
              <span class="badge badge-success">Followers : ${user.followers}</span>
              <span class="badge badge-color">Following : ${user.following}</span>
            </div>
            <div class="card card-body mt-3">
              <ul class="list-group">
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Compnay: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
      <div id="repos"></div>
    </div>  
    `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
        <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-color">Stars : ${repo.stargazers_count}</span>
          <span class="badge badge-color-1">Watchers : ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks : ${repo.forks_count}</span>
        </div>
        </div>
      </div> 
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    //clearing alert
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    //getting parent
    const parent = document.querySelector('.searchContainer');
    //getting Before Element
    const searchCard = document.querySelector('.search');
    //inseting before searchCard
    parent.insertBefore(div, searchCard);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
