import { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      value,
      defaultValue,
      onChange,
      placeholder,
      name,
      height,
      width,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          onChange={onChange}
          type={type}
          height={height}
          value={value}
          defaultValue={defaultValue}
          width={width}
          placeholder={placeholder}
          name={name}
        />
      </Wrapper>
    );
  }
);

export default Input;
