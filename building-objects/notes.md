## Function constructors & .prototype

`Person.prototype.getFullName = function() ...`

Actually refers to the prototype of any instances created using the new Person function, not the prototype of the actual Person function itself.

Better to add methods to the prototype rather than the constructor function, because it takes less memory. One place in memory rather than existing inside every instance of person.