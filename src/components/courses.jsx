import softwareIMG from "/software-course.png"
import photoshopIMG from "/photoshop-course.png"
import webIMG from "/web-course.png"
import "../styles/courses.css"
export const Courses = () => {
  return (
    <>
    
    <div className="container">
        <h3>OUR COURSES</h3>
        <h2>Explore Our Popular Online Courses</h2>
        <div className="courses-content">

            <div className="course-card card-1">
                <div className="head-img">
                    <img src={softwareIMG} alt="software course" />
                </div>
                <h2>Introducing to Software Engineering</h2>
                <i className="fa-regular fa-star"></i>
                <p>5,0</p>
                <p> by Saroj Nepal</p>
            </div>

            <div className="course-card card-2">
                <div className="head-img">
                    <img src={photoshopIMG} alt="photoshop course" />
                </div>
                <h2>Enhancing Adobe Photoshop CC 2020 Skills</h2>
                <i className="fa-regular fa-star"></i>
                <p>5,0</p>
                <p>by John Smith</p>
            </div>

            <div className="course-card card-3">
                <div className="head-img">
                     <img src={webIMG} alt="web course" />
                </div>
                <h2>HTML, CSS, and Javascript for Web Developers</h2>
                <i className="fa-regular fa-star"></i>
                <p>5,0</p>
                <p>by Ram Gurung</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
