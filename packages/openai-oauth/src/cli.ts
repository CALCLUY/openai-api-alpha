#!/usr/bin/env node

import { runCli } from "./cli-app.js"

void runCli().catch((error) => {
	console.error(
		error instanceof Error ? error.message : "Failed to start openai-oauth.",
	)
	process.exit(1)
})
