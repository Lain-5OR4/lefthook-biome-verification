interface User {
	name: string;
	age: number;
	email?: string;
}

// biome-ignore lint/correctness/noUnusedVariables: <explanationw>
function formatUser(user: User): string {
	const emailPart = user.email ? ` (${user.email})` : "";
	return `${user.name}, ${user.age}${emailPart}`;
}

// biome-ignore lint/correctness/noUnusedVariables: <explanationw>
const users: User[] = [
	{ name: "Alice", age: 30, email: "alice@example.com" },
	{ name: "Bob", age: 25 },
];

// users.forEach(user => {
//   console.log(formatUser(user));
// });
