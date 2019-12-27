import { google } from "googleapis";

const spreadsheetId = "1z3kuRYWMVd_jw74zKuHOhBkfiKr4-zUOaHclU6KTRLI";
const scope = "https://www.googleapis.com/auth/spreadsheets";
const range = "A:A";

const appendGoogleSheet = async ({
  name = "",
  email = "",
  attending = "",
  entree = "",
  plusOne = "",
  plusOneEntree = "",
  plusOneName = "",
  dietaryRestrictions = "",
}) => {
  const jwt = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    JSON.parse(`"${process.env.PRIVATE_KEY}"`),
    [scope]
  );

  await jwt.authorize();

  const sheets = google.sheets({
    version: "v4",
    auth: jwt,
  });

  return sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          name,
          email,
          attending,
          entree,
          plusOne,
          plusOneName,
          plusOneEntree,
          dietaryRestrictions,
        ],
      ],
    },
  });
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).send("Only accept POST requests");
  }

  if (!req.body) {
    res.status(404).send("Missing body");
  }

  const response = await appendGoogleSheet(req.body);

  if (response.status === 200) {
    res.status(204).send();
  } else {
    res.status(404).send(response.data);
  }
};
