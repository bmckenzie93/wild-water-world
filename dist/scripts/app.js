// Member Constructor
function Member(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// UI Constructor
function UI() {};

// Prototype: Add Member Method
UI.prototype.addMember = function(member) {
  const memberList = document.querySelector('.member-list');

  if(memberList.children.length < 5) {
    const li = document.createElement('li');
    li.className = 'py-1 section-title-dark member-plaque';

    const closeLink = document.createElement('a');
    closeLink.className = 'section-info-dark'

    const closeIcon = document.createElement('i');
    closeIcon.className = 'far fa-times-circle remove';
    closeLink.appendChild(closeIcon);
    memberList.appendChild(li);

    const memberName = document.createElement('span');
    memberName.className = 'member-name';
    memberName.appendChild(document.createTextNode(`${member.firstName} ${member.lastName}, ${member.age}`));

    li.appendChild(memberName);
    li.appendChild(closeLink);
    memberList.appendChild(li);
    document.querySelector('#counter').innerHTML = memberList.children.length;
  } else {
    alert('Team Member Limit Reached: (5 of 5)');
  }
} 

// Prototype: Clear Fields Method
UI.prototype.clearFields = function() {
  document.querySelector('#member-first').value = '';
  document.querySelector('#member-last').value = '';
  document.querySelector('#member-age').value = '';
}

// Prototype: Remove Member from List
UI.prototype.removeMember = function(target) {
  if(target.classList.contains('remove')) {
    target.parentElement.parentElement.remove();
    document.querySelector('#counter').innerHTML = document.querySelector('.member-list').children.length;
  }
}

// Event: Add Team Member
document.querySelector('#add-member-btn').addEventListener('click', function(e) {
  // Get values
  const firstName = document.querySelector('#member-first').value,
        lastName = document.querySelector('#member-last').value,
        age = document.querySelector('#member-age').value;

  // Validate Form: All Fields Complete
  if(firstName === '' || lastName === '' || age === '') {
  alert('Please fill in all fields..');
  } else {

    // Instantiate New Member
    const member = new Member(firstName, lastName, age);
    
    // Instantiate New UI
    const ui = new UI();

    // Add New Member to Member List
    ui.addMember(member);

    // Clear Fields
    ui.clearFields();
  }
});


// Event: Delete Team Member from List
document.querySelector('.member-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.removeMember(e.target);
})

