/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var personInitials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return (personInitials);
}
