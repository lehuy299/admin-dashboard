import { useEffect, useState } from "react";

const withDarkMode = (Component) => (props) => {
    const [enabled, setEnabled] = useState(false);
  
    useEffect(() => {
      const className = 'dark';
      const bodyClass = window.document.body.classList;
  
      enabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled]);
  
    return <Component {...props} dark_mode={enabled} setDarkMode={setEnabled} />;
  };
  
  export default withDarkMode;