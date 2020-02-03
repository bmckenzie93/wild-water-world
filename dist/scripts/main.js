// Get UI Variables
const firstName = document.querySelector('#member-first');
const lastName = document.querySelector('#member-last');
const age = document.querySelector('#member-age');
const addMemberBtn = document.querySelector('#add-member-btn');
const counter = document.querySelector('#counter');
const memberList = document.querySelector('.member-list');
const signUpBtn = document.querySelector('#sign-up-btn');

// Add Team Member Event
addMemberBtn.addEventListener('click', addMember);

// Remove Team Member Event
memberList.addEventListener('click', removeMember);


// Add Member function
function addMember(e) {
  if(firstName.value === '' || lastName.value === '' || age.value === ''){
    alert('Please fill all fields');
  }

  if(counter.innerHTML < 5) {
    const newMember = document.createElement('li');
    newMember.className = 'py-1 section-title-dark member-plaque';

    const closeLink = document.createElement('a');
    closeLink.className = 'section-info-dark'

    const closeIcon = document.createElement('i');
    closeIcon.className = 'far fa-times-circle remove';
    closeLink.appendChild(closeIcon);
    memberList.appendChild(newMember);

    const memberName = document.createElement('span');
    memberName.className = 'member-name';
    memberName.appendChild(document.createTextNode(`${firstName.value} ${lastName.value}, ${age.value}`));

    newMember.appendChild(memberName);
    newMember.appendChild(closeLink);

    countMembers();

    firstName.value = '';
    lastName.value = '';
    age.value = '';  
  } else {
    alert('Team Member Limit Reached: (5 of 5)')
  }
}

// Remove Team Member Function
function removeMember(e) {
  if(e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
  }

  countMembers();
}

// Count Team Members function
function countMembers() {
  const newMembers = document.querySelectorAll('.member-plaque');

  for(i=0; i < memberList.length; i++){
    newMembers.push(newMember[i]);
  }
  counter.innerHTML = newMembers.length;
}
