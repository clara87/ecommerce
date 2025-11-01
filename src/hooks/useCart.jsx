import { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        console.log("un contexto no difinido")
        throw new Error("useCart debe ser usado dentro de un Provider")
    }
    return context

}
export default useCart