
const Helpers = ({data,type}) => {
 const emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 const mobilePattern=/^[0-9]{7,}$/;
 const otpPattern= /^[0-9]{5}$/;
    switch (type) {
        case "email":
             return emailPattern.test(data)
             case "mobilenumber":
                return mobilePattern.test(data)
       case 'otp':
        return otpPattern.test(data)
        default:
            break;
    }


}

export default Helpers