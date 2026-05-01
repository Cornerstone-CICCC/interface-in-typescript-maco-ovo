/*
5. Exercise: Creating Intersection Types

Define types Admin and Employee with appropriate properties of your choice.
Create an intersection type AdminEmployee that combines properties from both Admin and Employee.
Instantiate an object using the AdminEmployee type and display the properties.
*/

interface Admin {
	adminId: number;
	editPermission: boolean;
}

interface Employee {
	name: string;
	department: string;
	salary: number;
}

interface AdminEmployee extends Admin, Employee {}

const adminEmployee: AdminEmployee = {
	adminId: 123,
	editPermission: true,
	name: "John",
	department: "IT",
	salary: 75000,
};

console.log("AdminEmployee: ", adminEmployee);
