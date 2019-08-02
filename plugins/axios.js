import {Message} from 'element-ui'
export default function({$axios,redirect}){
    $axios.onError(err=>{
        const {statusCode, message}=res.response.data
        if(statusCode===400){
            Message.warning({message});
        }
    })
}