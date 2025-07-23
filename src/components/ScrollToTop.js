import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); 

    return null;
}
// This component will scroll to the top of the page whenever the pathname changes.
// It uses the useLocation hook from react-router-dom to get the current pathname and the useEffect hook to perform the scroll action when the pathname changes. 
// The component returns null as it does not need to render anything to the DOM. 
// This is useful for ensuring that users always start at the top of a new page when navigating through the application. 
// It can be included in the main layout of the application to ensure consistent behavior across all pages.