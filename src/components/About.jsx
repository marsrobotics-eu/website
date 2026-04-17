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
              The future of AI isn't just software. It's embodied: robots that perceive, reason, and act in the physical
              world. And unlike most of the AI industry right now, you can't vibe-code your way to a robot that works.
              Robotics demands real engineering, real hardware, and people who know the difference between a demo and a
              deployed system.
            </p>
            <p>
              We looked at Amsterdam and saw a city with world-class AI talent, a thriving startup ecosystem, and serious
              research institutions, but no builder community for the people who want to work at the physical frontier.
              That culture exists in Delft, in Zurich, in Munich. The labs are there, the competitions are there, the
              community is there.
            </p>
            <p>
              We want to build that in Amsterdam. Not a club, not a study association, a collective of people who are
              serious about robotics and want to be part of building it here, before it's obvious that this is where it
              happens.
            </p>
            <p className="about-closer">That's why ARC exists.</p>
          </div>

          <div className="about-img-col reveal reveal-delay-2">
            <img
              src="/assets/images/amsterdam.png"
              alt="Amsterdam"
              className="about-city-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
