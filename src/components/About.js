export default function About() {
  return (
    <div className='about component p-5'>
          <div className="aboutImage d-flex flex-column align-items-center ">
            <img src={require('../assests/me.jpg')} className="profile mb-5" alt="me" />
          </div>

          <div className="aboutTextBlock">
            <h2 className="component-title fw-bold">About Me</h2>
            <hr></hr>
            <p className="aboutText">I am a full stack developer that enjoys creating responsive applications using modern tools such as React and NodeJs, with focus on user experience. 
            I graduated college in 2015 with a bachelor’s degree majoring in chemistry. I worked 7 years as a winemaker for the country's second largest wine company, where I was responsible for all the white wine varietals at their largest facility. 
            I began to pursue my passion of web development early 2022 and completed The Odin Project. From there I started to freelance and acquired a web developer role at Safety Arms Systems where I designed and developed their company website.
            </p>
            {/* <p className="aboutText">I am a full stack developer that enjoys creating responsive applications using modern tools such as React and NodeJs, with focus on user experience. 
            I graduated college in 2015 with a bachelor’s degree majoring in chemistry. I worked 7 years as a winemaker for the country's second largest wine company, where I was responsible for all the white wine varietals at their largest facility. 
            I began to pursue my passion of web development early 2022 and completed The Odin Project. From there I started to freelance and acquired a web developer role at Safety Arms Systems where I designed and developed their company website.
            </p> */}
            <p className="aboutText">My passion is problem solving and ultimately to develop things that propel businesses forward. 
            I love the outdoors and my other hobbies include golf, video games, garage gyms and anything that is Star Wars.</p>
          </div>
    </div>
  )
}