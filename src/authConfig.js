export const msalConfig = {
  auth: {
    clientId: "8890232f-e9b0-41af-bd87-26e046a56366",
    authority: "https://login.microsoftonline.com/496c6716-d07f-46ce-b75c-d66f5f955766",
    redirectUri: "https://jolly-sea-0e2165800.2.azurestaticapps.net/"
  },
    cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};