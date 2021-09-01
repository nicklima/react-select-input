import { Item } from "../styles";

const Option = ({ handle, current, value }) => {
  return (
    <Item isActive={current === value} onClick={() => handle(value)}>
      <span>{value}</span>
    </Item>
  );
};

export default Option;
