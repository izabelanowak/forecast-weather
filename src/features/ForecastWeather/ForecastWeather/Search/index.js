import { Button, Input, Wrapper } from "./styled";

export const Search = () => {
  return (
    <Wrapper>
    <Input placeholder="Type your city…"></Input>
    <Button>Search</Button>
    </Wrapper>
  );
};