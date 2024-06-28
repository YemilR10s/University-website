import "../styles/banner.css"

export const Banner = () => {

  return (
    <>
    
    <div className="banner-container">

        <div className="box1 banner-box">
        <i className="fa-solid fa-user-graduate"></i>
        <div className="left">
            <span>5,000</span>
            <p>SUCCESS STORIES</p>
        </div>
        </div>
        <div className="box2 banner-box">
        <i className="fa-solid fa-chalkboard-user"></i>
        <div className="left">
            <span>220</span>
            <p>TRUSTED TUTORS</p>
        </div>
        </div>
        <div className="box3 banner-box">
        <i className="fa-solid fa-calendar-days"></i>
        <div className="left">
            <span>3,000</span>
            <p>SCHEDULES</p>
        </div>
        </div>
        <div className="box4 banner-box">
        <i className="fa-solid fa-laptop"></i>
        <div className="left">
            <span> 587</span>
            <p>COURSES</p>
        </div>
        </div>
    </div>
    
    </>
  )
}
