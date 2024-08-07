import'../styles/benefits.css'

// eslint-disable-next-line react/prop-types
export const BenefitsLeft = ({isActive,icon,title,onClick}) => {
  return (
            < >
                <div
                className={isActive ? "box-left active": "box-left"} 
                onClick={()=>onClick()}>
                <i className={icon}></i>
                <span>{title}</span>
                </div>   
            </>
  )
}
