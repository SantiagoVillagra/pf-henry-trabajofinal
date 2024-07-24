import sneakers from "../../mockDB/mockDB"
import Card from "../Card/Card"
import styles from "./Home.module.css"

export default function Home() {

    return (
        <div className={styles.Home}>
            {sneakers?.map(({ID, Name, Price, Image}) => {
                return (
                    <Card
                        key= {ID}
                        ID= {ID}
                        Name= {Name}
                        Price= {Price}
                        Image= {Image}
                    />
                )
            })}
        </div>
    )
}