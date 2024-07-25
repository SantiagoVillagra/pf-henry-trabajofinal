import sneakers from "../../mockDB/mockDB"
import brands from "../../mockDB/mockBrands"
import genders from "../../mockDB/mockGenders"
import sports from "../../mockDB/mockSports"
import Card from "../Card/Card"
import { useState } from "react"
import styles from "./Home.module.css"

export default function Home() {

    const brandsDefault = {}
    
    brands.map(brand => {
        brandsDefault[brand] = false
    })

    const gendersDefault = {}
    
    genders.map(gender => {
        gendersDefault[gender] = false
    })

    const sportsDefault = {}
    
    sports.map(sport => {
        sportsDefault[sport] = false
    })

    const filtersDefault = {
        sports: sportsDefault,
        brands: brandsDefault,
        genders: gendersDefault
    }

    const [ filters, setFilters ] = useState(filtersDefault)
    const [ order, setOrder] = useState({order: null})

    const handleChange = (event) => {
        setFilters({...filters, [event.target.name]: {...filters[event.target.name], [event.target.value]: !filters[event.target.name][event.target.value]}})
        console.log({ordenQuePaso: order, filtrosQuePaso: {...filters, [event.target.name]: {...filters[event.target.name], [event.target.value]: !filters[event.target.name][event.target.value]}}});

    }

    const onClick = (order) => {
        setOrder({order: order})
        console.log({ordenQuePaso: {order: order}, filtrosQuePaso: filters});
    }

    return (
        
        <div className={styles.Home}>

            <div className={styles.FiltrosYOrden}>
                <h3>Filtra tus zapatillas por:</h3>

                <div>
                    <p>PRECIO</p>
                    <button onClick={() => onClick("menor")}>Menor precio</button>
                    <button onClick={() => onClick("mayor")}>Mayor precio</button>
                </div>
                    

                <div>
                    <label htmlFor="sports">DEPORTE</label>
                    {sports?.map(sport => {
                        return (
                            <div className={styles.ParInputLabel}>
                                <input type="checkbox" name="sports" id={sport} value={sport} checked={filters.sports[sport]} onChange={handleChange}/>
                                <label htmlFor={sport}>{sport.toUpperCase()}</label>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <label htmlFor="brands">MARCA</label>
                    {brands?.map(brand => {
                        return (
                            <div className={styles.ParInputLabel}>
                                <input type="checkbox" name="brands" id={brand} value={brand} checked={filters.brands[brand]} onChange={handleChange}/>
                                <label htmlFor={brand}>{brand.toUpperCase()}</label>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <label htmlFor="genders">GENERO</label>
                    {genders?.map(gender => {
                        return (
                            <div className={styles.ParInputLabel}>
                                <input type="checkbox" name="genders" id={gender} value={gender} checked={filters.genders[gender]} onChange={handleChange}/>
                                <label htmlFor={gender}>{gender.toUpperCase()}</label>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className={styles.Cards}>
                {sneakers?.map(({ID, name, price, image, brand}) => {
                    return (
                        <Card
                            key= {ID}
                            ID= {ID}
                            brand= {brand}
                            name= {name}
                            price= {price}
                            image= {image}
                        />
                    )
                })}
            </div>        
        </div>

    )
}