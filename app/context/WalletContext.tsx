import { ReactNode, createContext, useContext } from "react";

const WalletContext = createContext();

export const useWalletContext = ()=>{
    return useContext(WalletContext);
}

export const WalletContextProvider = ({children}:{children:ReactNode}) =>{

    return <WalletContext.Provider value={{}}>
        {children}
    </WalletContext.Provider>
}
