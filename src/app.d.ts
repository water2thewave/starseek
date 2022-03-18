/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	interface Session {
		defaultRole: 'cosmos',
		defaultDataFile: 'cosmos.json',	// loaded for every new role
	}
	// interface Stuff {}
}
