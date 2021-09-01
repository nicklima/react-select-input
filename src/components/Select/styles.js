// Selected Dropdown based on
// https://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling

import styled from "styled-components";
import { darken, lighten } from "polished";

export const Hidden = styled.input`
  opacity: 0;
  pointer-events: none;
  position: absolute;
`;

export const Select = styled.div`
  background: ${({ transparent, inputColor }) =>
    transparent ? "" : inputColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(50, 50, 50, 0.1);
  color: ${({ text }) => text};
  cursor: pointer;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 280px;
  outline: none;
  position: relative;
  width: 100%;

  &.up {
    z-index: 6;
  }
`;

const arrowColor = (props) => {
  const { arrow, color } = props;
  if (arrow) return arrow;
  return color;
};

export const Value = styled.div`
  align-items: center;
  display: flex;
  font-weight: 400;
  padding: 15px 10px;
  position: relative;
  color: ${({ color }) => color};

  &:after {
    border-color: ${(props) => arrowColor(props)} transparent;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    content: "";
    height: 0;
    margin-top: -3px;
    position: absolute;
    right: 15px;
    top: 50%;
    width: 0;
  }
`;

/* DROPDOWN LIST */
export const Dropdown = styled.div`
  background: ${({ bgColor }) => bgColor};
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: inherit;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-weight: normal;
  left: 0;
  list-style: none;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  padding: 5px;
  position: absolute;
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  right: 0;
  top: 140%;
  transition: all 0.5s ease-in;
  z-index: 5;

  &:before {
    border-color: rgba(0, 0, 0, 0.1) transparent;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    bottom: 100%;
    content: "";
    height: 0;
    position: absolute;
    right: 13px;
    width: 0;
  }

  &:after {
    border-color: ${({ bgColor }) => bgColor} transparent;
    border-style: solid;
    border-width: 0 6px 6px 6px;
    content: "";
    height: 0;
    position: absolute;
    bottom: 100%;
    right: 15px;
    width: 0;
  }
`;

export const List = styled.ul`
  max-height: ${({ height }) => height};
  overflow-y: auto;
  padding: 0;
  list-style: none;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ scrollTrack }) => scrollTrack};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ scrollColor }) => scrollColor};
    border-radius: 20px;
  }
`;

const darkColor = (alpha, color) => darken(alpha, color);
const lightColor = (alpha, color) => lighten(alpha, color);

export const Item = styled.li`
  background: ${({ isActive, bgColor }) =>
    isActive ? darkColor(0.3, bgColor) : ""};
  border-top: 1px solid ${({ bgColor }) => darkColor(0.5, bgColor)};
  box-shadow: inset 0 1px 0 ${({ bgColor }) => lightColor(0.02, bgColor)};
  color: var(--white);
  display: flex;
  margin: 0 5px;
  padding: 12px;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:first-child {
    border: 0;
    box-shadow: inset 0 0 0 transparent;
  }

  &:first-of-type a {
    border-radius: 7px 7px 0 0;
  }

  &:last-of-type a {
    border: none;
    border-radius: 0 0 7px 7px;
  }

  &:hover {
    background: ${({ bgColor }) => darkColor(0.3, bgColor)};
  }
`;
