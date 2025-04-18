import { useEffect, useState } from "react";

const useCustom = (defaultVal) => {
  const [value, setValue] = useState(defaultVal || "");

  useEffect(() => {
    setValue("updated");
  }, []);
  return value;
};

export default useCustom;
