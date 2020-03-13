class Github {
  constructor() {
    this.client_id = '080cc0bf3ecbfe9227a4';
    this.client_secret = '31993b6c2de3aa5e3c08713afd0210983e32bb9c';
    this.respos_count = 5;
    this.respos_sort = 'created : asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https:api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https:api.github.com/users/${user}/repos?per_page=${this.respos_count}&sort=${this.respos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();
    return {
      profile: profileData,
      repos: reposData
    };
  }
}
