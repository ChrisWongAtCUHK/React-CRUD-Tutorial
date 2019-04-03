const listEmployees = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'john.png'
    }]

export function getEmployees() {
    return listEmployees;
};

export function getEmployee(id) {
    return listEmployees.find(e => e.id.toString() === id);
};

function importAll(r) {
    let images = {};
    for (var item of r.keys()) {
      images[item.replace('./', '')] = r(item); 
    }
    return images;
  }
  
export function getImages() {
    return importAll(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/));
}
  