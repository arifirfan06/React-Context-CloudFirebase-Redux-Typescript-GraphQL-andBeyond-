import { CtgCtn, CtgBodyCtn, BackImg } from "./CategoryItemStyled";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()
  const navHandler = () => {
    navigate(route)
  }
  return (
    <CtgCtn onClick={navHandler}>
      <BackImg imageUrl={imageUrl} />
      <CtgBodyCtn>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CtgBodyCtn>
    </CtgCtn>
  );
};

export default CategoryItem;
