import { useState } from "react"
import "../styles/benefits.css"
import { BenefitsLeft } from "./benefitsLeft"
import { BenefistRight } from "./benefistRight"

export const Benefits = () => {
  

    const benefitsData = [
        {title: "Online Courses", description: " Dive into a vast selection of expertly crafted courses designed to meet various learning needs. Whether you're interested in technology, business, arts, or personal development, you can access top-notch content from any location, at any time. Enjoy the freedom to learn at your own pace with engaging interactive materials, including videos, quizzes, and practical exercises that enhance your understanding and retention of the subject matter.", icon:"fa-solid fa-graduation-cap"},

        {title: "Earn A Certificates", description: "Elevate your professional profile with our valuable certificates. Each course you complete will earn you a certificate that recognizes your achievements and validates your new skills. These certificates are designed to be a significant addition to your resume, LinkedIn profile, or portfolio, helping you stand out in the job market and demonstrate your commitment to continued professional development.", icon:"fa-solid fa-chalkboard"},
        
        {title: "Learn with Experts", description: " Gain unparalleled insights and knowledge from seasoned industry professionals. Our courses are led by experienced experts who bring real-world experience and practical wisdom into the classroom. They offer valuable tips, answer your questions, and provide personalized feedback to ensure that you not only learn the theoretical aspects but also how to apply your knowledge effectively in real-world scenarios", icon:"fa-solid fa-brain"},
        {title: "Flexible Learning", description: "Experience a learning environment that adapts to your life’s demands. Our platform provides the flexibility to start, pause, and resume your courses whenever it suits you. This means you can integrate learning seamlessly into your daily routine, whether you're balancing work, family, or other commitments. With 24/7 access to course materials and resources, you have the power to create a learning schedule that fits your personal and professional goals.", icon:"fa-solid fa-lines-leaning"},
    ]
    const [select, SetSelect] = useState(benefitsData[0])
    const handleSelect = (data)=>{
        SetSelect(data)
    }
    

  return (
    <>
                    {/* benefits container */}
    <div className="benefits-container">

                    {/* content benefits left */}
        <div className="benefits-content-left">
            <div className="beneits-leftf">
            <h3 className="benefitsH3">Benefits About Online <br /> Learning Expertise</h3>

            {benefitsData.map((item,index)=>(
                <>
                <BenefitsLeft
                key={index}
                title={item.title}
                icon={item.icon}
                isActive={select.title === item.title}
                onClick={()=>handleSelect(item)}
                />
                </>
            ))}
            </div>
        </div>
                    {/* content benefits right */}
        <div className="benefits-content-right">
            
            <BenefistRight 
                title={select.title} 
                description={select.description} />
        </div>
    </div>
    </>
  )
}
