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
    process.env.PRIVATE_KEY,
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
          name,
          email,
          attending,
          entree,
          plusOne,
          plusOneEntree,
          plusOneName,
          dietaryRestrictions,
        ],
      ],
    },
  });
};

export default async (req, res) => {
  if (req.method !== "POST") res.status(404).send("Only accept POST requests");

  console.log(Buffer.from(PRIVATE_KEY_BASE64, "base64").toString());

  const response = await appendGoogleSheet(req.body);

  if (response.status === 200) {
    res.status(204).send();
  } else {
    res.status(404).send(response.data);
  }
  // res.status(200).send(process.env.PRIVATE_KEY);
};
