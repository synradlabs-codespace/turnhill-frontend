import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);

    if (!data) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Basic logging
    console.log("[API] Contact inquiry received:", data);

    try {
      // 1. Check for credentials
      const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
      const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
      const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

      if (!privateKey || !clientEmail || !spreadsheetId) {
        console.warn("[API] Google Sheets credentials missing. Skipping sheet update.");
        // We still return 200 because we don't want to break the UI for missing backend config
        // In a real production app, you might want to alert the team here.
        return new Response(JSON.stringify({ ok: true, status: "logged_only" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // 2. Authenticate
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      // 3. Prepare Row
      // Matches columns: Date, Name, Mobile, Email, Company, Position, Website, CompanySize, Timeline, Brief, Consent
      const row = [
        new Date().toISOString(),
        data.fullName || "",
        data.mobile || "",
        data.companyEmail || "",
        data.company || "",
        data.position || "",
        data.website || "",
        data.companySize || "",
        data.timeline || "",
        data.brief || "",
        data.consent ? "Yes" : "No",
      ];

      // 4. Append to Sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A1", // Starts appending after the last existing row in Sheet1
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [row],
        },
      });

      console.log("[API] Successfully saved to Google Sheet");

      return new Response(JSON.stringify({ ok: true, status: "saved" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

    } catch (sheetError: any) {
      console.error("[API] Google Sheet Error:", sheetError?.message || sheetError);
      // Fallback: still success to user, but logged error
      return new Response(JSON.stringify({ ok: true, status: "sheet_error" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

  } catch (err) {
    console.error("[API] Internal Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

