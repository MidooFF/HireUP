import React, { useCallback, useEffect, useState } from "react";

const useAnimate = (initState: any, delay: number) => {
  let tempState: any = {};
  let confirmState = false;
  const [finalState, setFinalState] = useState<any>(initState);

  console.log(typeof initState);

  const updateState = (payload: any) => {
    if (typeof payload === "object") {
      Object.assign(tempState, payload);
    } else {
      tempState = payload;
    }
    confirmState = true;
    return;
  };

  useEffect(() => {
    if (confirmState) {
      console.log("true");
      confirmState = false;
    }
  }, [tempState, confirmState]);

  return [finalState, updateState] as [typeof finalState, typeof updateState];
};

export default useAnimate;
