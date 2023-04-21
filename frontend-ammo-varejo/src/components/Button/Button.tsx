import { ButtonStyled } from "./Button.styles"

export function Button(
  { ...props }
) {
  return (
    <ButtonStyled
      {...props} >
      {props.children}
    </ButtonStyled>
  )
}