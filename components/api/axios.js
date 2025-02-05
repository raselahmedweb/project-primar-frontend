import axios from "axios";
const apiReq = async ({ endPoint, method, data, CT }) => {
    return await axios({
      url: `${process.env.API_URL}/${endPoint}`,
      method: method,
      data: data,
      headers: {
        "Content-Type": CT || "multipart/form-data",
      },
      withCredentials: true,
    });
  };
export default apiReq;
