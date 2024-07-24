import sneakers from "../../mockDB/mockDB"
import Card from "../Card/Card"
import styles from "./Home.module.css"

export default function Home() {

    return (
        <div className={styles.Home}>
            {sneakers?.map(({ID, name, price, image}) => {
                return (
                    <Card
                        key= {ID}
                        ID= {ID}
                        name= {name}
                        price= {price}
                        image= {image}
                    />
                )
            })}
        </div>
    )
}