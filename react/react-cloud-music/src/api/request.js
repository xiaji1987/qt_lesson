import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://neteasecloudmusicapi.zhaoboy.com'
})
axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误')
  }
)

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};
