export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(
    'https://rebelmosquito-679106251063943741.myfreshworks.com/crm/sales/api/contacts/',
    {
      method: 'POST',
      headers: {
        Authorization: `Token token=${process.env.CRM_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  const data = await res.json();

  return Response.json(data);
}
