export default function About() {
  return (
    <div id="about-us">
      <div className="section-wrap">
        <p className="label reveal">OUR STORY</p>
        <h2 className="section-title reveal reveal-delay-1">
          <strong>Amsterdam had everything.</strong>
          <span className="gray"> Except this.</span>
        </h2>

        <div className="about-cols">
          <div className="about-body reveal reveal-delay-2">
            <p>
              The future of AI is not limited to software. It's embodied: robots that perceive, reason, and act in the physical
              world. And unlike most of the AI industry right now, you can't vibe-code your way to a robot that works.
              Robotics demands real engineering, real hardware, and people who know the difference between a demo and a
              deployed system.
            </p>
            <p>
              We looked at Amsterdam and saw labs, AI talent, and a serious robotics ecosystem, but no
              community connecting the people who want to work at the physical frontier. The labs are there, the
              competitions are there, the students and engineers are there.
            </p>
            <p>
              We want to build that in Amsterdam. Not a closed study association, but an open society for students, PhDs,
              professionals, industry engineers, and makers who are serious about robotics.
            </p>
            <p className="about-closer">That's why MARS exists.</p>
          </div>

          <div className="about-img-col reveal reveal-delay-2">
            <img
              src="/assets/images/amsterdam2.png"
              alt="Amsterdam"
              className="about-city-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
