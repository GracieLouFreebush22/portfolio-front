import "../css/CreativePage.css";
function CreativePage(): JSX.Element {
  return (
    <>
      <h2>
        Over the last few years Open processing has been a vital tool for
        applying new cocepts in a fun and imaginatve way.{" "}
      </h2>
      <div className="ctn-art">
        <div className="iso-groove">
          <h3 className="artTitle"> "Iso-Groovy-Lines" </h3>
          <iframe
            src="https://openprocessing.org/sketch/1785912/embed/"
            title="iso"
            width="500"
            height="600"
          >
            {" "}
          </iframe>
        </div>
        <div className="random-mover">
          <h3 className="artTitle"> "Random Mover</h3>
          <iframe
            src="https://openprocessing.org/sketch/1785898/embed/"
            width="500"
            height="600"
            title="mover"
          ></iframe>
        </div>
        <div className="ping-pong">
          <h3 className="artTitle"> Pong Game</h3>
          <iframe
            src="https://openprocessing.org/sketch/1811809/embed/"
            width="500"
            height="600"
            title="pong"
          ></iframe>
        </div>
        <div className="grid-circles">
          <h3 className="artTitle"> Grid Circles</h3>
          <iframe
            src="https://openprocessing.org/sketch/1818543/embed/"
            width="500"
            height="600"
            title="grid"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default CreativePage;
