import "../css/TeachingPage.css"

function TeachingPage(): JSX.Element {
  return (
    <>
    <div className="teaching-abt">
      <h2 className="ctn-teach-header">
          {" "}
          Welcome!
        </h2>
        <p>
          I have spent the last three years working part-time as a coding
          teacher both in person and online in London,UK and in Houston, Tx. During this time, I noticed that teaching staff 
          find it challenging to integrate computer programming into their curriuculum because it requires longer-term training for teaching staff. 
          Here are some of the projects I have made for my students!
        </p>
    </div>
     
      <div>
        <iframe
          src="https://scratch.mit.edu/projects/757610373/embed"
          width="485"
          height="402"
          title="bugs"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default TeachingPage;
