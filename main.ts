// Funniest One-Line Out-of-Office Reply — one line out to /output/entry.txt
// Limit is 160 chars; this line is 134. No trailing newline on the file.
import { mkdirSync, writeFileSync } from "node:fs";

// Five short pieces; single spaces come from the join, not the pieces.
const PARTS = [
  "I'm out of office",
  "until Monday. My inbox",
  "is a haunted house, and",
  "every email is a ghost that will",
  "have to wait its turn to be ignored.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
