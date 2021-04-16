import style from "../styles/about.module.scss";
import clsx from "clsx";

export default function About() {
  return (
    <>
      <div>
        <div className="section">
          <div className="flex spc-btwn borderBtm">
            <section className="col-2">
              <h1 style={{ color: `$black` }}>about me</h1>
              <p className="introText">
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
        <section className="section greyBg">graph and part of coding</section>
        <section className="section">skill graph</section>
        <section className="section greyBg">fun fact</section>
      </div>
    </>
  );
}
