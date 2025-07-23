interface User {
	name: string;
	age: number;
	email?: string;
}

function formatUser(user: User): string {
	const emailPart = user.email ? ` (${user.email})` : "";
	return `${user.name}, ${user.age}${emailPart}`;
}

const users: User[] = [
	{ name: "Alice", age: 30, email: "alice@example.com" },
	{ name: "Bob", age: 25 },
];

users.forEach((user) => {
	console.log(formatUser(user));
});
