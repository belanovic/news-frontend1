

const LINK = process.env.NODE_ENV ==  `https://linux-news-backend.onrender.com`;

console.log(process.env.REACT_APP_COPY + 'ovo je environment variable')

const HOST_BACKEND = process.env.NODE_ENV == 'production'? `https://linux-news-backend.onrender.com` : 'http://localhost:4000'


export default HOST_BACKEND;