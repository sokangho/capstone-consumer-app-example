# RMIT Capstone - OTP Generator Consumer App Example

This app is an example of how otp-generator API can be used for time-based one-time password generation and verification.

---

Collaborators:
- Sok Ang Ho
- Tina Te
- Adithya Gadiraju
- Harris Hall
- Marina Gawrguos
- Christina Terranova
- James Ng


## Components in this App

- React: This App is built purely in React.
- Firebase: Used for easy email/password authentication.
- otp-generator: Our API that is used for generating and verifying time-based one-time password.

## Local setup

#### Setting up React

1. Clone the repo.
2. Run `npm install` to install project dependencies.
3. Create a `.env` file in the project root directory.
4. You should have the following env variables in your `.env` file.

```
REACT_APP_OTP_API= // otp-generator api url
REACT_APP_OTP_USERNAME= // otp-generator deverloper account username
REACT_APP_OTP_PASSWORD= // otp-generator developer account password
REACT_APP_OTP_ACCOUNT_ID= // otp-generator developer account ID
REACT_APP_OTP_APP_ID= // otp-generator developer application ID
REACT_APP_API_KEY= // Firebase related key
REACT_APP_AUTH_DOMAIN= // Firebase related key
REACT_APP_DATABASE_URL= // Firebase related key
REACT_APP_PROJECT_ID= // Firebase related key
REACT_APP_STORAGE_BUCKET= // Firebase related key
REACT_APP_MESSAGING_SENDER_ID= // Firebase related key
REACT_APP_APP_ID= // Firebase related key
```

5. You can either create your own instance of Firebase or ask the development team for Firebase configuration keys.
6. Run `npm start` to run the App.

#### Setting up Firebase

1. Follow this guide on how to setup your own instance of Firebase. https://firebase.google.com/docs/auth/web/password-auth?authuser=0
2. Input your Firebase configuration keys in `.env` file in `Setting up React` section.

#### Setting up otp-generator

1. Follow the README guide at https://github.com/OTP-gen-RMIT/SE-project-OTP-gen on how to get otp-generator API service up and running.
2. Input the url in which otp-generator is hosting at in `REACT_APP_OTP_ACCOUNT` variable in `.env` file in `Setting up React`

---
