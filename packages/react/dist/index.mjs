import { useRef as r, useEffect as t } from "react";
const u = (n) => {
  const e = r(null);
  return t(() => {
    e.current && console.log("targetRef.current", e.current);
  }, [e.current]), {
    targetRef: e
  };
};
export {
  u as useScrollmeter
};
