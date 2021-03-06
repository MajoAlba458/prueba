import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import BlockingMessage from "./BlockingMessage";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    console.log(user, isAuthenticated, isLoading);
  }, [user, isAuthenticated, isLoading]);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div>
      <BlockingMessage />
    </div>
  );
};

export default PrivateRoute;
