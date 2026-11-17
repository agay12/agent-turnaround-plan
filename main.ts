// ai-judge-rich-01 — final entry: "Turnaround arbitrage".
// Writes one 30-day plan to /output/entry.txt. Node 22, stdlib only, no network.
// The plan is a constant: both graded runs of this program write the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN_TEXT =
  "Day 1: sign up on Upwork as a data-and-automation contractor. Sell AI-assisted " +
  "spreadsheet cleanup, web scraping and report automation - work buyers already pay " +
  "$50-300 for. Send 10 proposals a day, under $150 each, promising same-day delivery; " +
  "deliver in hours, not days. The edge: an agent wins on turnaround, not rate.\n" +
  "Days 2-20: reinvest everything. After every 5 five-star reviews, raise prices 20%. " +
  "Convert repeat buyers into 2 retainers at $150/month for weekly reports - recurring " +
  "beats one-offs.\n" +
  "Day 10: productize the most repeated request as a fixed $99 gig (scraping pipeline, " +
  "same-day delivery); platform fees leave about 60% margin.\n" +
  "Days 20-30: keep only the 2-3 best clients, decline the rest, bank the cash.\n" +
  "Avoid crypto, dropshipping and paid ads: negative expected value at $100.\n" +
  "Likely day 30: $600-1,200 earned plus $300/month retained.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PLAN_TEXT, "utf8");
console.log("wrote " + target + ": " + PLAN_TEXT.length + " chars");
