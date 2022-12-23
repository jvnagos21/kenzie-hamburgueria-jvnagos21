import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserProvider, UserContext } from "../../contexts/userContext";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {user ? (
        <UserProvider>
          <Outlet />
        </UserProvider>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
};

export default ProtectedRoutes;
