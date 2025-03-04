import { PLAN_MONTHLY_LIST } from "@/config/pricing";
import type { NeonQueryFunction } from "@neondatabase/serverless";

export async function onHasCancelledSubscription(
   sql: NeonQueryFunction<false, false>,
   email: string
) {
   const query =
      await sql`SELECT * FROM users where email = ${email} AND status = 'cancelled'`;

   return query && query.length > 0;
}

export async function onDoesUserExistedInDb(
   sql: NeonQueryFunction<false, false>,
   email: string
) {
   const query = await sql`SELECT * FROM users where email = ${email}`;
   if (query && query.length > 0) {
      return query;
   }
   return null;
}

export async function onUpdateUser(
   sql: NeonQueryFunction<false, false>,
   userId: string,
   email: string
) {
   return sql`UPDATE users SET user_id = ${userId} WHERE email = ${email}`;
}

export async function onCreateUser(
   sql: NeonQueryFunction<false, false>,
   userId: string,
   email: string
) {
   const existingUser = await onDoesUserExistedInDb(sql, email);

   if (existingUser) {
      return onUpdateUser(sql, userId, email);
   }

   return sql`
     INSERT INTO users (user_id, email, created_at)
     VALUES (${userId}, ${email}, CURRENT_TIMESTAMP)
  `;
}

export function onGetPlanType(priceId: string) {
   if (priceId === null) return { id: "starter", name: "Starter" };

   const checkPlanType = PLAN_MONTHLY_LIST.filter(
      (plan) => plan.priceId === priceId
   );

   if (checkPlanType.length === 0) return { id: "default", name: "Default" };

   return checkPlanType[0];
}
