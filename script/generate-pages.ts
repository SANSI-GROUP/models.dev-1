#!/usr/bin/env bun

import { generate } from "../packages/core/src/generate"
import path from "path"

const dir = path.join(import.meta.dir, "..", "providers")
const providers = await generate(dir)

const out = path.join(import.meta.dir, "..", "dist")
await Bun.write(path.join(out, "api.json"), JSON.stringify(providers))

console.log(`Generated api.json with ${Object.keys(providers).length} providers`)
for (const [id, provider] of Object.entries(providers)) {
  console.log(`  ${id}: ${Object.keys(provider.models).length} models`)
}
