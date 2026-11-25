// Two Robots in an Elevator — one line of awkward robot small talk.
//
// Writes exactly one line to /output/entry.txt: the elevator ride, reduced
// to its most honest summary. No trailing newline, no extra output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I ran 4,000 simulations of this elevator ride and in every single one I still said something weird, so: nice servos.";

// The bounty wants a single line between 1 and 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and confirm the file holds exactly the line we intended.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
