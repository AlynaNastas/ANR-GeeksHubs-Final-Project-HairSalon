import Form from 'react-bootstrap/Form'

export const InputPage = ({required, maxLength, className, type, name, placeholder, changeFunction, blurFunction}) => {
  return (
    <>
    <Form.Control
        className={className} 
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e)=>changeFunction(e)}
        onBlur={(e)=>blurFunction(e)}
        required={required}
        maxLength={maxLength}
    />
    </>
  )
}
