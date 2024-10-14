let data = [
	{
		id: 1,
		name: 'John Doe',
		age: 30,
		address: '123 Main St',
		city: 'New York',
		phone: '555-1234',
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 25,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678',
	},
	{
		id: 3,
		name: 'Michael Johnson',
		age: 40,
		address: '789 Pine Rd',
		city: 'Chicago',
		phone: '555-8765',
	},
	{
		id: 4,
		name: 'Emily Davis',
		age: 35,
		address: '321 Cedar St',
		city: 'New York',
		phone: '555-4321',
	},
];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan alamat New York
//TODO 4 : dapatkan data dengan umur >= 30

// TODO 1: dapatkan semua data
let allData = data;
console.log('Semua Data:', allData);

// TODO 2: dapatkan data dengan nama tertentu (contoh: 'Jane Smith')
let nameFilter = data.filter(person => person.name === 'Jane Smith');
console.log('Data dengan nama Jane Smith:', nameFilter);

// TODO 3: dapatkan data dengan alamat New York
let cityFilter = data.filter(person => person.city === 'New York');
console.log('Data dengan alamat di New York:', cityFilter);

// TODO 4: dapatkan data dengan umur >= 30
let ageFilter = data.filter(person => person.age >= 30);
console.log('Data dengan umur >= 30:', ageFilter);
