import { FC } from "react";
import { useAuth } from "../hooks/useAuth.ts";
import img from '../assets/protectedPage-icon.png'

interface Props {
  children: JSX.Element
}

const ProtectedRoute: FC = ({children}) => {
  const isAuth = useAuth()
  return (
    <>
      {isAuth ? (
        children) : (<div className="mt-20 flex flex-col items-center justify-center gap-10 ">
          <h1 className="text-2xl">To view this page you must be logged in</h1>
          <img className="w-1/3" src={img} alt="img"/>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;