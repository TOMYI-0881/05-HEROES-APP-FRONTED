import { useLocation, useParams } from "react-router";

const HeroPage = () => {
  const { idSlug = "" } = useParams();
  console.log({ idSlug });

  const { pathname: LALA } = useLocation();
  console.log({ LALA });
  return <div>HeroPage</div>;
};

export default HeroPage;
