import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios"
import styles from "./Checkout.module.css"


export default function Checkout() {
    initMercadoPago('APP_USR-1350f145-a406-4674-bd19-5a5799cec260', {
        locale: "es-AR"
    });

    const [preferenceId, setPreferenceId] = useState(null)
    const cart = useSelector(state => state.cart)

    console.log(cart)

    const items = cart.map(shoe => {
      return {
        title: shoe.item.name,
        quantity: shoe.qty,
        unit_price: shoe.item.price
      }
    })

    console.log(items);
    
    const createPreference = async () => {

        try {
            const response = await axios.post(`https://e-commerse-fc.onrender.com/api/createorder`, {
              items: [
                {
                  title: "Producto 1",
                  quantity: 2,
                  unit_price: 5
                }
              ]
            })

            const {id} = response.data
            console.log(`ID: ${id}`)
            return id
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () => {
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
        }
    }
    
    return(
        <div className={styles.checkout}>
            <h1>soy checkout</h1>
            <button onClick={handleBuy} >COMPRAR</button>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
        </div>
    )

}
