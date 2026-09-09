import { TEAM } from '../content';
import logoVideo from '../assets/logo.mp4';
import logoPoster from '../assets/logo-poster.jpg';

export default function Title() {
  return (
    <div className="title-wrap">
      {/* The team's animated lockup. It is drawn on white, so it gets its own
          card rather than bleeding into whichever theme the room's laptop uses.
          Cropped to the middle band, where the mark and wordmark actually sit. */}
      <div className="lockup">
        <video
          src={logoVideo}
          poster={logoPoster}
          autoPlay
          muted
          playsInline
          aria-label="DriverLink logo"
        />
      </div>

      <h1>Hiring a driver shouldn't<br />depend on who you know.</h1>

      <p className="lede">
        A recruitment platform connecting licensed professional drivers already living in
        Saudi Arabia with the companies that need them. Website and mobile application on
        one shared database.
      </p>

      <div className="team">
        {TEAM.map((m) => (
          <div key={m.name}>
            <div className="nm">{m.name}</div>
            <div className="rl">{m.role}</div>
          </div>
        ))}
      </div>

      <div className="credits">
        <span>Software Engineering group project, Phase 1, Presentation 1</span>
        <span>Dr. Abdulaziz Attaallah, 13 September 2026</span>
      </div>
    </div>
  );
}
