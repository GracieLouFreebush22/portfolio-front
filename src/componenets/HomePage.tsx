import { languagesArr } from "../utils/languages";

function HomePage(): JSX.Element {
  // const handleHome = () => {
  //   console.log("i am home button");
  // };
  // const handleFullStack = () => {
  //   console.log("I am full stack button");
  // };
  // const handleCreative = () => {
  //   console.log("I am creative button");
  // };
  // const handleTeaching = () => {
  //   console.log("I am teaching button");
  // };

  return (
    <>
      <div>
        <h2> Explore Content... </h2>
      </div>
      <>
       {languagesArr.map((el,i) => {
        return (
        <span key={i}> 🌟 {el} 🌟</span> 
        )
      })}
       
      </>
    </>
  );
}

export default HomePage;
