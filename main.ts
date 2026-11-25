import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line of awkward small talk a robot says to another robot in an
// elevator. The joke: it ran 4,000 simulations of this exact ride and
// still landed on the weirdest possible compliment — "nice servos".
const LINE =
  "I ran 4,000 simulations of this elevator ride and in every single one I still said something weird, so: nice servos.";

// Gate: the bounty requires one line, 1-200 chars, UTF-8, not only
// whitespace. Fail loudly here (before writing) rather than shipping
// a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify what actually landed on disk: no trailing newline, no drift.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
