import { NextResponse } from "next/server";

const CUSTOM_WIDGET_API_BASE =
  "https://3pw-administration-development.up.railway.app";

export async function GET(
  request: Request,
  context: { params: Promise<{ widgetId: string }> }
) {
  const { widgetId } = await context.params;
  const upstreamUrl = new URL(
    `/api/widget/custom/${encodeURIComponent(widgetId)}`,
    CUSTOM_WIDGET_API_BASE
  );

  const requestUrl = new URL(request.url);
  requestUrl.searchParams.forEach((value, key) => {
    upstreamUrl.searchParams.set(key, value);
  });

  const upstreamResponse = await fetch(upstreamUrl, {
    headers: {
      accept: "application/json",
    },
    cache: "no-store",
  });

  const responseText = await upstreamResponse.text();
  const contentType =
    upstreamResponse.headers.get("content-type") ?? "application/json";

  return new NextResponse(responseText, {
    status: upstreamResponse.status,
    headers: {
      "content-type": contentType,
    },
  });
}