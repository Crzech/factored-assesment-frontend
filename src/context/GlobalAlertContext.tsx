import React, { FunctionComponent, ReactNode, useState } from "react";

type GlobalAlertContextPropsType = {
  children: ReactNode;
};

const initialState = {
  title: "Success",
  subtitle: null,
  show: false,
  type: 'success',
};
type AlertInfoType = {
  title: string | null;
  subtitle: string | null;
  show: boolean;
  type: string;
};
export const globalAlertContext = React.createContext<{
  alertInfo: AlertInfoType;
  setAlertInfo: React.Dispatch<AlertInfoType> | Function;
}>({
  alertInfo: initialState,
  setAlertInfo: () => {},
});

const GlobarAlertContext: FunctionComponent<GlobalAlertContextPropsType> = ({
  children,
}) => {
  const [alertInfo, setAlertInfo] = useState(initialState);
  return (
    <globalAlertContext.Provider value={{ alertInfo, setAlertInfo }}>
      {children}
    </globalAlertContext.Provider>
  );
};

export default GlobarAlertContext;
