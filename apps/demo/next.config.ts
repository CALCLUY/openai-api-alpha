import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	allowedDevOrigins: ["127.0.0.1", "*.e2b.app"],
	transpilePackages: [
		"@openai-oauth/core",
		"@openai-oauth/react",
		"@openai-oauth/web",
	],
}

export default nextConfig
