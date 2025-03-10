import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth-slice";
 
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    useEffect(() => {
        dispatch(logout());
        navigate("/admin-login");
    }, [dispatch, navigate]);
 
    return null;
};
 
export default Logout;