import { StyledBurger } from './Burger.styled';
import { bool, func } from 'prop-types';
const Burger = ({ open, setOpen }) => {
  return (
    // !はfalseであればtrueを返し、trueであればfalseを返す
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

// propTypesを使用することでpropsに値を入れ忘れていた時にエラーが出る
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Burger;
