import { prisma } from "./../../db";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
// Random comment
export const userRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string(),
        avatar: z.string(),
        display_name: z.string(),
        banner_image: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await prisma.profile.create({
        data: { ...input },
      });
      return "Created successfully";
    }),
  update: protectedProcedure
    .input(
      z.object({
        username: z.string().optional(),
        email: z.string().optional(),
        avatar: z.string().optional(),
        display_name: z.string().optional(),
        banner_image: z.string().optional(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.profile.update({
        where: {
          id: input.userId,
        },
        data: { ...input },
      });
    }),
});
