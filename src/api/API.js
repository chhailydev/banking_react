import axios from "axios";

const accessToken = {
  headers: {
    "client-key": "banking",
    "token-key": "123",
  },
};

export const GoApi = async (endpoint) => {
  try {
    const response = await axios.get(`http://localhost:8080${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Get data error: ", error);
  }
};

export const GetApi = async (endpoint) => {
  try {
    const response = await axios.get(
      `http://localhost:8000${endpoint}`,
      accessToken,
    );
    return response.data;
  } catch (error) {
    console.error("message", error);
  }
};

export const PostApi = async (endpoint, data) => {
  try {
    const response = await axios.post(
      `http://localhost:8000${endpoint}`,
      data,
      accessToken,
    );
    return response.data;
  } catch (error) {
    console.error("Sending error", error);
  }
};
