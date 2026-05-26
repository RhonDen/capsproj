import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const verifyAdmin = async () => {
      try {
        await axios.get('/api/admin/check-auth');
        if (isMounted) {
          setIsAuth(true);
        }
      } catch {
        if (isMounted) {
          setIsAuth(false);
        }
      }
    };

    verifyAdmin();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isAuth === null) {
    return <div className="p-8 text-center text-police">Verifying admin session...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
