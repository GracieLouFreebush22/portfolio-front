function HomePage(): JSX.Element {
  const handleHome = () => {
    console.log("i am home button");
  };
  const handleFullStack = () => {
    console.log("I am full stack button");
  };
  const handleCreative = () => {
    console.log("I am creative button");
  };
  const handleTeaching = () => {
    console.log("I am teaching button");
  };

  return (
    <div>
      <h1> Grace Kuperman </h1>
      <button onClick={() => handleHome()}> HOME </button>
      <button onClick={() => handleFullStack()}> FULL-STACK </button>
      <button onClick={() => handleCreative()}> CREATIVE </button>
      <button onClick={() => handleTeaching()}> TEACHING </button>
      <h2> Explore Content... </h2>
    </div>
  );
}

export default HomePage;
