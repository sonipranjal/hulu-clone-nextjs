import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  // console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap items-center">
      {results.map((item) => (
        <Thumbnail key={item.id} result={item} />
      ))}
    </FlipMove>
  );
};

export default Results;
