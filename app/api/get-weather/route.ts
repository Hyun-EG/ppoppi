export async function POST(req: Request) {
  const { lat, lon } = await req.json();

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ err: "데이터 가져오기 실패" }), {
      status: res.status,
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
