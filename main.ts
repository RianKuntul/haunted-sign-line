// Funniest Sign on a Haunted Server Room Door.
// One line for the door of a haunted server room, 120 characters at most.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a sign blaming the room's ghost for the outages —
// the classic sysadmin advice, turned back on the haunting itself.
const ENTRY =
  "The ghost in Rack 4 keeps unplugging the servers. Please stop telling it to turn it off and on again.";

// The gate: 1 to 120 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
