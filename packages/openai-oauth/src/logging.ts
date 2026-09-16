import type {
	OpenAIOAuthServerLogEvent,
	OpenAIOAuthServerOptions,
} from "./types.js"

export const createRequestLogger = (
	settings: OpenAIOAuthServerOptions,
): ((event: OpenAIOAuthServerLogEvent) => void) | undefined => {
	if (typeof settings.requestLogger === "function") {
		return settings.requestLogger
	}

	if (process.env.CODEX_OPENAI_SERVER_LOG_REQUESTS !== "1") {
		return undefined
	}

	return (event) => {
		console.log(
			JSON.stringify({
				source: "openai-oauth",
				timestamp: new Date().toISOString(),
				...event,
			}),
		)
	}
}

export const emitRequestLog = (
	logger: ((event: OpenAIOAuthServerLogEvent) => void) | undefined,
	event: OpenAIOAuthServerLogEvent,
) => {
	try {
		logger?.(event)
	} catch {}
}
