import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/server/schema";

const sql = neon(process.env.DB_URL!);
export const db = drizzle(sql, { schema, logger: true });
