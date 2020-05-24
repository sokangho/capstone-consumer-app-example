import axios from 'axios';

// Obviously, you need to change the env variables of these values to
// fit what you have in your local database to run this app locally.
// otpUrl = the url which you run your backend server in
// username = developer account username
// password = developer account password
// accountId = account id of the developer for this app
// appId = application id of this app
// NOTE: developer must own the app
const otpUrl = process.env.REACT_APP_OTP_API;
const username = process.env.REACT_APP_OTP_USERNAME;
const password = process.env.REACT_APP_OTP_PASSWORD;
const appId = process.env.REACT_APP_OTP_APP_ID;

// hacky way of authenticating with otp service
// long term solution is to implement apikey authentication in otp-generator
const getJWT = async () => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      username,
      password,
    },
    url: `${otpUrl}/accounts/login`,
  };

  const res = await axios(options);

  if (res.status === 200) {
    return res.data.token;
  }
  return null;
};

const getAppInfo = async () => {
  const jwt = await getJWT();

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    url: `${otpUrl}/applications/${appId}`,
  };

  try {
    return await axios(options);
  } catch (e) {
    console.log(e);
  }
};

const registerAppUser = async (req) => {
  const jwt = await getJWT();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    data: {
      applicationId: Number(appId),
      email: req.email,
      username: req.username,
      mobileNumber: req.mobileNumber,
    },
    url: `${otpUrl}/applicationusers`,
  };

  try {
    return await axios(options);
  } catch (e) {
    console.log(e);
  }
};

const generateAndSendOtp = async (email) => {
  const jwt = await getJWT();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    data: {
      applicationId: Number(appId),
      appUserEmail: email,
    },
    url: `${otpUrl}/otp/generate`,
  };

  try {
    await axios(options);
  } catch (e) {
    console.log(e);
  }
};

const verifyOtp = async (email, otp) => {
  const jwt = await getJWT();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    data: {
      applicationId: Number(appId),
      appUserEmail: email,
      otp: String(otp),
    },
    url: `${otpUrl}/otp/verify`,
  };

  try {
    return await axios(options);
  } catch (e) {
    console.log(e);
  }
};

const otpService = {
  getAppInfo,
  registerAppUser,
  generateAndSendOtp,
  verifyOtp,
};

export default otpService;
