import { InferRealtimeEvents, Realtime } from "@upstash/realtime";
import { z } from "zod";
import { redis } from "@/lib/redis";

const message = z.object({
  id: z.string(),
  sender: z.string(),
  text: z.string(),
  timestamp: z.number(),
  roomId: z.string(),
  token: z.string().optional(),
});

const schema = {
  // event called chat
  chat: {
    // scenario 1 send message
    message: message,
    // scenario 2 destroy chat
    destroy: z.object({ isDestroyed: z.literal(true) }),
  },
};

export const realtime = new Realtime({ schema, redis });

export type RealtimeEvents = InferRealtimeEvents<typeof realtime>;

export type Message = z.infer<typeof message>;
