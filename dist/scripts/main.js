// Get UI Variables
const firstName = document.querySelector('#member-first');
const lastName = document.querySelector('#member-last');
const age = document.querySelector('#member-age');
const addMemberBtn = document.querySelector('#add-member-btn');
const memberCount = document.querySelector('#member-count');
const memberList = document.querySelector('.member-list');
const signUpBtn = document.querySelector('#sign-up-btn');

// Add Team Member Event
addMemberBtn.addEventListener('click', addMember);


// Add Member function
function addMember(e){
  if(firstName.value === '' || lastName.value === '' || age.value === ''){
    alert('Please fill in all fields');
  }

  const newMember = document.createElement('p');
  newMember.className = 'py-1';
  newMember.appendChild(document.createTextNode(firstName));
  memberList.appendChild(newMember);
  firstName.value === '';
  lastName.value === '';
  age.value === '';
console.log(newMember);
}