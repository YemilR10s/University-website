import { Banner } from "../components/banner"
import { Benefits } from "../components/benefits"
import { Courses } from "../components/courses"
import "../styles/header.css"
export const HeaderPage = () => {


  return (
    <>
                    {/* Header container */}
    <div className="header-container">
                    {/* header content */}
      <div className="content">
                    {/* content items */}
      <div className="hero-content">
        <h2 className="headerH2">Welcome To Academia</h2>
        <h1 className="headerH1">Bests Online Education Experience
        </h1>
        <p className="headerP">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
                      {/* header-buttons */}
        <div className="header-buttons">
          <button className="button-started">
            Get Started Now 
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className="button-courses">
            View Courses
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>
                    {/* hero img */}
      <div className="hero-img">
        <div className="img"></div>
      </div>
      </div>
    </div>
    <Benefits/>
    <Banner/>
    <Courses/>
    </>
  )
}
