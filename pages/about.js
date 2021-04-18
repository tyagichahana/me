import style from "../styles/about.module.scss";
import clsx from "clsx";

export default function About() {
  return (
    <>
      <div>
        <div className="section">
          <div className="flex spc-btwn borderBtm alignItm">
            <section className="col-2">
              <h1 className="black">about me</h1>
              <p className="introText darkGrey headingM">
                I am UI Devloper based in Banglore,India
              </p>
              <p className="text black">
                I enjoy turning complex problems into simple, beautiful and
                intuitive designs. When I'm not coding, you'll find me doing
                yoga, art & craft, cooking or working out in the gym.
              </p>
              <p className="text black">
                I know HTML5, CSS3, Javascript, Next.js, bootstrep, Reactjs,
                angularjs and sometime i do backend as well.
              </p>
            </section>
            <section className={clsx("col-2", style.aboutImage)} />
          </div>
        </div>
        <section className="section greyBg">
          <h1 className="introText darkGrey">My Skill Graph</h1>
          <div className={style.skillGraph} />
        </section>
        <section className="section">
          <h1 className="introText darkGrey">My Skill Graph</h1>
          <div className={style.skillGraph} />
        </section>
        <section className="section greyBg flex spc-btwn alignItm">
          <div className={style.funFact}></div>
          <div>
            <h1 className="introText">Random Facts</h1>
            <ul>
              <li className="text">I drink a lot of coffee ☕</li>
              <li className="text">I love Yoga and Gyming ♥</li>
              <li className="text">
                I love doing art&craft and making best out of waste 🎨
              </li>
              <li className="text">
                I love traveling and saving memories in photos 🌏
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
