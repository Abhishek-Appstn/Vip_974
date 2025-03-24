import { useSelector } from 'react-redux'

const LoginHandler = ({mobileNumber,Otp}) => {
    const StoreMobile=useSelector(state=>state.User.mobileNumber)
    return(mobileNumber===StoreMobile?true:false)
}

export default LoginHandler