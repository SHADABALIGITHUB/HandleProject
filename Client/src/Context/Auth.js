import { createContext } from "react";

export const AuthContext = createContext({isauth:false});

// export const AuthProvider = ({ children }) => {
//     const [isauth, setIsAuth] = useState(false);

//     const checkAuth = async () => {
//         try {
//             const res = await axiosInstance.get("/auth/status");
//             setIsAuth(res.data.authenticated);
//         } catch (error) {
//             setIsAuth(error.response.data.authenticated);
//         }
//     }

//     useEffect(() => {
//       checkAuth();
//     }, [])

//     return (
//         <AuthContext.Provider value={{ isauth, setIsAuth, checkAuth }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };