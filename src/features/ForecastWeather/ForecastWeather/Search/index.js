import { Button, Icon, Input, Wrapper } from "./styled";

export const Search = () => {
  return (
    <Wrapper>
      <Input placeholder="Type your city…"></Input>
      <Button><Icon />Search</Button>
    </Wrapper>
  );
};