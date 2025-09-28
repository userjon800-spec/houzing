import { Container } from "./style";

function Input({
  type,
  value,
  defaultValue,
  onChange,
  placeholder,
  name,
  height,
  width,
}) {
  return (
    <Container
      onChange={onChange}
      type={type}
      height={height}
      value={value}
      defaultValue={defaultValue}
      width={width}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
