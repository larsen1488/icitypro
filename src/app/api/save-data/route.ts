export async function POST(req: Request) {
  const body = await req.json();
  const { fio, phone, city, street, house, keysCount } = body;

  const formData = new URLSearchParams();
  formData.append("entry.668426054", fio);
  formData.append("entry.1582054950", phone);
  formData.append("entry.430665726", city);
  formData.append("entry.1034942599", street);
  formData.append("entry.1807739436", house);
  formData.append("entry.1501988261", keysCount);

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSedb3hMCzfu_eRDe6VaU1Vdy_2hMTssoKyAtPL4cDn0BBV-oA/formResponse",
      {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error("Ошибка при отправке:", err);
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}
