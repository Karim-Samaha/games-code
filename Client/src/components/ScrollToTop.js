import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { searchValue, loading } from "../redux/action";
const ScrollToTop = () => {
    const { pathnam } = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(searchValue("", []))
        dispatch(loading("true"))
    }, [pathnam])
    return null;
}
export default ScrollToTop;