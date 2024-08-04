import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./Search.module.css";
import { getAllShoes } from "../../Redux/Actions";

export default function Search() {
    const [filteredShoes, setFilteredShoes] = useState([]);
    const allShoes = useSelector(state => state.allShoes);
    const searchedShoes = useSelector(state => state.searchedShoes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllShoes());
    }, [dispatch]);

    useEffect(() => {
        if (searchedShoes.length > 0) {
            setFilteredShoes(searchedShoes);
        } else {
            setFilteredShoes(allShoes);
        }
    }, [searchedShoes, allShoes]);

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className={styles.cardSearch}>
            {filteredShoes.map(({ id, name, price, image, brand }) => (
                <div key={id} onClick={() => handleClick(id)}>
                    <Card
                        id={id}
                        brand={brand}
                        name={name}
                        price={price}
                        image={image}
                    />
                </div>
            ))}
        </div>
    );
}