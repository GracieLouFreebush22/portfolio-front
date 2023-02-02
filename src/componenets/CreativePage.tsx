import "./CreativePage.css"
function CreativePage(): JSX.Element{

    return (
        <>
        <h2>Over the last few years Open processing has been a vital tool for applying new cocepts in a fun and imaginatve way.  </h2>
        <div className="ctn-art">
            <div className="iso-groove">
                <h3> "Iso-Groovy-Lines" </h3>
                <iframe src="https://openprocessing.org/sketch/1785912/embed/" width="500" height="600"> </iframe>
                <p> A piece of work adapted from an example of Isolines. Scale of the lines displayed adjusted by user's mouse movements. Knowledge gained includes use of dynamic data.</p>
            </div>
            <div className="random-mover">
                <h3> "Random Mover</h3>
                <iframe src="https://openprocessing.org/sketch/1785898/embed/" width="500" height="600"></iframe>
                <p> One of my first projects back in Open Processing, practicing randomised movement! </p>
            </div>
            <div className="ping-pong">
                <h3> Pong Game</h3>
                <iframe src="https://openprocessing.org/sketch/1811809/embed/" width="500" height="600"></iframe>
                <p> One of my first projects back in Open Processing, practicing randomised movement! </p>
            </div>
            <div>
                <h3> Grid Circles</h3>
                <iframe src="https://openprocessing.org/sketch/1818543/embed/" width="500" height="600"></iframe>
            </div>
            <div>
                <h3> Pong </h3>
                <iframe src="https://openprocessing.org/sketch/1811809/embed/" width="500" height="600"></iframe>
            </div>
        </div>
        </>
        
    )
}

export default CreativePage