import { PrismaClient } from "@prisma/client";

import { env } from "../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

prisma.$use(async (params, next) => {
  if (params.action == "create" && params.model == "Account") {
    delete params.args.data["not-before-policy"];
  }

  const result = await next(params);
  // See results here
  return result;
});
