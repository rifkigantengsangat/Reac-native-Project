import React,{useContext,createContext,useState} from 'react';

const StoreContext = createContext()

export const StoreContextProvider = ({children})=>{
    const [store,setStore] =useState([])
    const formatRupiah =(rp)=>{
        const format = rp.toString().split('').reverse().join('')
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
        return rupiah
    }
    return (
        <StoreContext.Provider value={{ setStore,store,formatRupiah }}>
           {children}
        </StoreContext.Provider>
    )
}
export const Store = ()=>{
   return useContext(StoreContext)
}