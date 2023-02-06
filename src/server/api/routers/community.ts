import { prisma } from "./../../db";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
// Random comment
const communityType = ["PUBLIC", "RESTRICTED", "PRIVATE"] as const;
const roleType = ["USER", "ADMIN", "MODERATOR"] as const;

export const communityRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        type: z.enum(communityType),
        nsfw: z.boolean(),
        image: z.string(),
        description: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await prisma.community.create({
        data: {
          ...input,
          users: {
            create: [
              {
                user: {
                  connect: {
                    id: input.userId,
                  },
                },
                role: "ADMIN",
              },
            ],
          },
        },
      });
      return "community created successfully";
    }),
  update: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        type: z.enum(communityType),
        role: z.enum(["ADMIN"]),
        nsfw: z.boolean(),
        image: z.string(),
        description: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.usersonCommunities.update({
        where: {
          userId_communityName: {
            userId: input.userId,
            communityName: input.name,
          },
        },

        data: {
          community: {
            update: {
              name: input.name,
              type: input.type,
              nsfw: input.nsfw,
              image: input.image,
              description: input.description,
            },
          },
        },
      });
    }),
});
