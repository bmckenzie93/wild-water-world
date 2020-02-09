class Member {
  constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  }
}

class UI {
  addMember(member) {
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

  clearFields() {
    document.querySelector('#member-first').value = '';
    document.querySelector('#member-last').value = '';
    document.querySelector('#member-age').value = '';
  }

  removeMember(target) {
    if(target.classList.contains('remove')) {
      target.parentElement.parentElement.remove();
      document.querySelector('#counter').innerHTML = document.querySelector('.member-list').children.length;
    }
  }

  static submitTeam() {
    if(document.querySelector('.member-list').children.length === 5) {
      alert('Team signed up!');
    } else {
      alert('Team must have 5 members to sign up');
    }
  }
}

class Store {
  static getMembers() {
    let members;
    if(localStorage.getItem('members') === null) {
      members = [];
    } else {
      members = JSON.parse(localStorage.getItem('members'));
    }
    return members;
  }

  static displayMembers() {
    const members = Store.getMembers();

    members.forEach(function(member) {
      const ui = new UI;
      ui.addMember(member);
    });
  }

  static addMember(member) {
    const members = Store.getMembers();

    members.push(member);

    localStorage.setItem('members', JSON.stringify(members));
  }

  static removeMember(target) {
    const members = Store.getMembers();
    members.forEach(function(member, index) {
      console.log(`${member.firstName} ${member.lastName}, ${member.age}`)
      if(`${member.firstName} ${member.lastName}, ${member.age}` === target) {
        members.splice(index, 1);
      }
    });

    localStorage.setItem('members', JSON.stringify(members));
  }
}

// Event: Display Members from Local Storage
document.addEventListener('DOMContentLoaded', Store.displayMembers);

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

    // Add Member to Local Storage
    Store.addMember(member);

    // Clear Fields
    ui.clearFields();
  }
});

// Event: Delete Team Member from List
document.querySelector('.member-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.removeMember(e.target);

  Store.removeMember(e.target.parentElement.previousElementSibling.textContent);
  console.log(e.target.parentElement.previousElementSibling.textContent);
})

// Event: Sign Up 5 Person Team on Submit
document.getElementById('tournament-form').addEventListener('submit', function(e) {
  UI.submitTeam();
  e.preventDefault();
});