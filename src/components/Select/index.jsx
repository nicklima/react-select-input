import { useState } from "react";

import Option from "./Option";
import { Hidden, Select, Value, Dropdown, List } from "./styles";

const SelectDropdown = ({ settings }) => {
  const [choice, setChoice] = useState({
    isActive: false,
    value: "Select Option"
  });
  const { value, isActive } = choice;

  const theme = {
    border: "#fff",
    text: "#000",
    bgColor: "#242424",
    caret: "#ff0",
    height: "240px",
    input: "#fff",
    transparent: false,
    arrow: "#000",
    scroll: "orange",
    scrollTrack: "#f5f5f5",
    ...settings
  };

  const {
    arrow,
    border,
    bgColor,
    height,
    input,
    scroll,
    scrollTrack,
    text,
    transparent
  } = theme;

  const changeState = (value) => {
    setChoice({
      value,
      isActive: false
    });
  };

  const showSelect = () => {
    setChoice({
      ...choice,
      isActive: !choice.isActive
    });
  };

  return (
    <Select borderColor={border} inputColor={input} transparent={transparent}>
      <Hidden
        tabindex="0"
        onFocus={() => showSelect()}
        onBlur={() => showSelect()}
      />
      <Value color={text} arrow={arrow} onClick={() => showSelect()}>
        {value}
      </Value>
      <Dropdown bgColor={bgColor} isActive={isActive}>
        <List height={height} scrollColor={scroll} scrollTrack={scrollTrack}>
          {Array.from({ length: 10 }).map((item, i) => {
            return (
              <Option
                value={`Option ${i + 1}`}
                current={value}
                key={i}
                handle={changeState}
              />
            );
          })}
        </List>
      </Dropdown>
    </Select>
  );
};

export default SelectDropdown;
