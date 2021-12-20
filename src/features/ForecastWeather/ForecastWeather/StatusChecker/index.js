import { Loading } from "../Loading";
import { Error } from "../Error";

export const StatusChecker = ({ children, isLoading, isError, isSuccess}) => {
  return (
      isLoading ? 
      <Loading /> 
      : isError ? 
      <Error /> 
      : isSuccess ?
      children
      : <></>
  );
};
