import { useParams } from "react-router";

const HeroPage = () => {
  const params = useParams();
  console.log({ params });
  return <div>HeroPage</div>;
};

export default HeroPage;
