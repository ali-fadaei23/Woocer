// import { Fragment } from "react";
// import { useEffect } from "react";
// import { withRouter } from "react-router-dom";

// function ScrollToTop({ history, children }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, []);

//   return <Fragment>{children}</Fragment>;
// }

// export default withRouter(ScrollToTop);

// import { useEffect, useRef } from "react";
// import { withRouter } from "react-router-dom";

// const ScrollIntoView = ({ children, location }) => {
//   const prevLocation = useRef();

//   useEffect(() => {
//     if (prevLocation.current !== location.pathname) {
//       window.scrollTo(0, 0);
//       prevLocation.current = location.pathname;
//       location.state = location.prevState;
//     }
//   }, [location.pathname]);

//   return children;
// };

// export default withRouter(ScrollIntoView);
