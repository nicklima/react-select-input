import { Item } from "../styles";

const Option = ({ handle, current, value, bgColor }) => {
  return (
    <Item
      bgColor={bgColor}
      isActive={current === value}
      onClick={() => handle(value)}
    >
      <span>{value}</span>
    </Item>
  );
};

export default Option;
