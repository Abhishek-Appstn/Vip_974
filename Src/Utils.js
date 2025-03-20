import DataConstants from "./assets/DataConstants";
const {LanguagetoCheck}=DataConstants

const getStyle = (key, value,language) => {
    const isArray = Array.isArray(LanguagetoCheck);
    if (isArray) {
        if (key == 'scaleX') {
            return LanguagetoCheck.includes(language) ? ({ transform: [{ [key]: value }] }) : null;
        }
        else return LanguagetoCheck.includes(language) ? { [key]: value } : null;
    } 
    if (key == 'scaleX') {
        return language === LanguagetoCheck ? ({ transform: [{ [key]: value }] }) : null;
    } else {
      return language === LanguagetoCheck ? {[key]: value } : null;
    }
  };
  
  const flexDirection = (language) => getStyle('flexDirection', 'row-reverse',language);
  const alignSelf = (language) => getStyle('alignSelf', 'flex-end',language);
  const alignItems = (language) => getStyle('alignItems', 'flex-end',language);
  const textAlign = (language) => getStyle('textAlign', 'right',language);
  const justifyContent = (language) => getStyle('justifyContent', 'flex-end',language);
  const ImageTransform = (language) => getStyle('scaleX', -1,language);

  
  export default { flexDirection, alignSelf, textAlign,justifyContent,ImageTransform,alignItems };
  