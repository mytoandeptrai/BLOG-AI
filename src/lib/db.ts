import { neon } from "@neondatabase/serverless";

export default async function onDbConnection() {
   if (!process.env.DATABASE_URL) {
      throw new Error("Please provide Neon Database URL !!!!");
   }
   const sql = neon(process.env.DATABASE_URL);
   const version = await sql`SELECT Version()`;
   console.info(`Neon Database version: ${version[0].version}`);
   return sql;
}
