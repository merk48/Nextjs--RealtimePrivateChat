# Nextjs Realtime Private Chat

Built with the Next.js (App Router) , upstash-redis , upstash-realtime , TypeScript & Tailwind

> **Live demo:** [https://merk48-realtime-private-chat.vercel.app](https://merk48-realtime-private-chat.vercel.app)
>
> **Repo:** [https://github.com/merk48/Nextjs--RealtimePrivateChat](https://github.com/merk48/Nextjs--RealtimePrivateChat)

---

## Summary

A compact, real-time **private chat** application built with Next.js and TypeScript. It demonstrates a modern full‑stack dev setup with an App Router Next.js front-end, real-time messaging (via a WebSocket/realtime provider), and deployment-ready configuration for Vercel.

---

## Features

* Real‑time private (1:1) chat between users.
* Clean UI (TypeScript + Next.js App Router).
* Ready for deployment to Vercel.
* Mobile‑friendly layout (responsive).

---

## Quickstart (local)

1. **Clone the repo**

```bash
git clone https://github.com/merk48/Nextjs--RealtimePrivateChat.git
cd Nextjs--RealtimePrivateChat
```

2. **Install dependencies**

```bash
npm install
# or
# yarn
# pnpm
```

3. **Create environment variables**

Copy the example env file and update values:

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the required keys. Typical variables you may need to set (replace with exact keys from `.env.example`):

> See the repository file `.env.example` for the exact variable names used by this project.


4. **Run in development**

```bash
npm run dev
# open http://localhost:3000
```

5. **Build & run production locally**

```bash
npm run build
npm run start
```

---

## Contributing

Contributions are welcome! A simple workflow:

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit your changes and push
4. Open a pull request

Add a description of the change, why it helps, and any migration steps if needed.

---

## To-do / Improvements (suggested)

* Add unit / integration tests for message handling.
* Add end‑to‑end tests (Cypress / Playwright) for chat flows.
* Add message search, typing indicators, and message edit/delete.
* Add user presence / read receipts.

---

