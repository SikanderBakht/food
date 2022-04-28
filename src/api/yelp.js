import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9QQQw2MvmLqoKK06MfcqJ6EP3rq5BHLid8aeAGt_3iq6pSLqoHGi1qN1JQpch8BUC9Pvu0uLXDIJPe86TOPhubptiGAOLLvWK0L-pzNNNpY-yAn1_vGp84LNxzJqYnYx'
    }
})