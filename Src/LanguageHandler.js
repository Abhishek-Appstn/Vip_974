import { useSelector } from 'react-redux'

const LanguageHandler = () => {
  const language=useSelector(state=>state.language.value)
  console.log("langly",language);
  
 
return language=='Arabic'?true:false


}

export default LanguageHandler