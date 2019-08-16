"user strict";

const env = 'dev';

const defaultAlertMessage = "亲，网络相亲去了，马上就回来。";

const defualtShareText = {
  en: "ikcamp英语学习口语听力四六级"
};

const defualtbarTitle = {
  en: "ikcamp英语学习"
};

const defualtImg = {
  articleImg: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=371610547,2249903511&fm=26&gp=0.jpg",
  coverImg: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=371610547,2249903511&fm=26&gp=0.jpg"
};

let core = {
  defaultAlertMessage: defaultAlertMessage,
  defualtShareText: defualtShareText['en'],
  defualtbarTitle: defualtbarTitle['en'],
  defualtImg: defualtImg,
  isDev: env === 'dev',
  isProduction: env === 'production'
};
export default core;