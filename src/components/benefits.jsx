import "../styles/benefits.css"

export const Benefits = () => {
  return (
    <>
                    {/* benefits container */}
    <div className="benefits-container">

                    {/*image position left  */}
        <div className="benefits-image">
            <div className="image"></div>
        </div>

                    {/* content position right */}
        <div className="benefits-content">
            <h3 className="benefitsH3">Benefits About Online <br /> Learning Expertise</h3>
            <div className="box-one">
            <i className="fa-solid fa-chalkboard"></i>
                <div className="box">
                    <span>Online Courses</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            <div className="box-two">
            <i className="fa-solid fa-graduation-cap"></i>
                <div className="box">
                    <span>Earn A Certificates</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            <div className="box-three">
            <i className="fa-solid fa-brain"></i>
                <div className="box">
                    <span> Learn with Expert</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
