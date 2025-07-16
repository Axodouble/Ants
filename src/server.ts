import { serve } from "bun";

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path =
      url.pathname === "/" ? "/src/index.html" : `/src${url.pathname}`;

    try {
      const file = Bun.file(`.${path}`);
      return new Response(file);
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
});
