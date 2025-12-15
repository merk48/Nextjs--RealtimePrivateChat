import { redis } from "@/lib/redis";
import { Elysia, t } from "elysia";
import { nanoid } from "nanoid";
import { authMiddleware } from "./auth";
import { z } from "zod";
import { NextResponse } from "next/server";

const ROOM_TTL_SECONDS = 60 * 10; // 10 min

const rooms = new Elysia({ prefix: "/room" }).post("/create", async () => {
  const roomId = nanoid();

  // write to db
  await redis.hset(`meta:${roomId}`, {
    connected: [],
    createdAt: Date.now(),
  });

  // auto deletion
  await redis.expire(`meta:${roomId}`, ROOM_TTL_SECONDS);

  return { roomId };
});

const messages = new Elysia({ prefix: "messages" }).use(authMiddleware).post(
  "/",
  async ({ body, auth }) => {
    const { sender, text } = body;
    const { roomId, token, connected } = auth;

    const roomExists = await redis.exists(`meta:${roomId}`);

    if (!roomExists) {
      throw new Error("Room does not exist");
    }

    if (sender === token) {
    } else {
    }

    await redis.hset(`meta:${roomId}`, {
      sender,
      text,
    });
  },
  {
    query: z.object({ roomId: z.string() }),
    body: z.object({
      sender: z.string().max(100),
      text: z.string().max(1000),
    }),
  }
);

const app = new Elysia({ prefix: "/api" }).use(rooms).use(messages);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
