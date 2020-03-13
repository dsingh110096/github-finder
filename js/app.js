const github = new Github();
const ui = new UI();
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;
  if (userText !== '') {
    //making http call
    github.getUser(userText).then(data => {
      let key = e.keyCode || e.charCode;
      if (data.profile.message === 'Not Found') {
        if (key <= 46) {
        } else {
          ui.showAlert('User Not Found', 'alert alert-danger');
        }
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clearing profile
    ui.clearProfile();
  }
});
