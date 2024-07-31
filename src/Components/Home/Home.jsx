import sneakers from "../../mockDB/mockDB";
import brands from "../../mockDB/mockBrands";
import genders from "../../mockDB/mockGenders";
import sports from "../../mockDB/mockSports";
import Card from "../Card/Card";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import { getAllShoes, orderAndFilterAction, addToCartAction } from "../../Redux/Actions";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import css from "../../../src/custom-theme.css";
import { Paginator } from "primereact/paginator";

export default function Home() {

  const [first, setFirst] = useState(0); // Índice del primer elemento de la página actual
  const [rows, setRows] = useState(6); // Número de elementos por página
  const [isLoading, setIsLoading] = useState(true)

  const allShoes = useSelector((state) => state.allShoes);
  const orderAndFilter = useSelector((state) => state.orderAndFilter);

  const totalRecords = orderAndFilter.length;

  const handlePageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // Cálculo de los datos que se mostrarán en la página actual
  const paginatedData = orderAndFilter.slice(first, first + rows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllShoes(sneakers));
    dispatch(
      orderAndFilterAction({
        ordenQuePaso: order,
        filtrosQuePaso: filters,
      })
    )
    setIsLoading(false)
  }, [dispatch]);
  
  const brandsDefault = {};

  brands.map((brand) => {
    brandsDefault[brand] = false;
  });

  const gendersDefault = {};

  genders.map((gender) => {
    gendersDefault[gender] = false;
  });

  const sportsDefault = {};

  sports.map((sport) => {
    sportsDefault[sport] = false;
  });

  const filtersDefault = {
    sports: sportsDefault,
    brands: brandsDefault,
    genders: gendersDefault,
  };

  const [filters, setFilters] = useState(filtersDefault);
  const [order, setOrder] = useState({ order: null });

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: {
        ...filters[event.target.name],
        [event.target.value]: !filters[event.target.name][event.target.value],
      },
    });
    dispatch(
      orderAndFilterAction({
        ordenQuePaso: order,
        filtrosQuePaso: {
          ...filters,
          [event.target.name]: {
            ...filters[event.target.name],
            [event.target.value]:
              !filters[event.target.name][event.target.value],
          },
        },
      })
    );
  };

  const onClick = (order) => {
    setOrder({ order: order });
    dispatch(
      orderAndFilterAction({
        ordenQuePaso: { order: order },
        filtrosQuePaso: filters,
      })
    );
  };

  if (!isLoading && !orderAndFilter.length) {
    Swal.fire({
      title: "No se encontraron resultados",
      showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
          `
      },
      hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
          `
      }
  });
  }

  return (
    <div className={styles.Home}>
      <div className={styles.FiltrosYOrden}>
        <h2>Filtra tus zapatillas por:</h2>

        <div>
          <h4 className={styles.boldLabel}>PRECIO</h4>
          {/* <button onClick={() => onClick("menor")} className={styles.buttonPrice}>Menor precio</button> */}
          {/* <button onClick={() => onClick("mayor")} className={styles.buttonPrice}>Mayor precio</button> */}
          <Button
            label="Menor precio"
            raised
            onClick={() => onClick("menor")}
            className="buttonPrice"
          ></Button>
          <Button
            label="Mayor precio"
            raised
            onClick={() => onClick("mayor")}
            className="buttonPrice"
          ></Button>
        </div>

        <label htmlFor="sports" className={styles.boldLabel}>
          DEPORTE
        </label>
        {sports?.map((sport) => (
          <div key={sport} className={styles.ParInputLabel}>
            <Checkbox
              inputId={sport}
              name="sports"
              value={sport}
              onChange={handleChange}
              checked={filters.sports[sport]}
            />
            <label htmlFor={sport} className="ml-2">
              {sport}
            </label>
          </div>
        ))}
        <div>
          <label htmlFor="brands" className={styles.boldLabel}>
            MARCA
          </label>
          {brands?.map((brand) => (
            <div key={brand} className={styles.ParInputLabel}>
              <Checkbox
                inputId={brand}
                name="brands"
                value={brand}
                onChange={handleChange}
                checked={filters.brands[brand]}
              />
              <label htmlFor={brand} className="ml-2">
                {brand}
              </label>
            </div>
          ))}
        </div>
        <label htmlFor="genders" className={styles.boldLabel}>
          GENERO
        </label>
        {genders?.map((gender) => (
          <div key={gender} className={styles.ParInputLabel}>
            <Checkbox
              inputId={gender}
              name="genders"
              value={gender}
              onChange={handleChange}
              checked={filters.genders[gender]}
            />
            <label htmlFor={gender} className="ml-2">
              {gender}
            </label>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.Cards}>
          {paginatedData.map(({ ID, name, price, image, brand }) => (
            <Card
              key={ID}
              ID={ID}
              brand={brand}
              name={name}
              price={price}
              image={image}
            />
          ))}
        </div>

        {/* Paginador */}
        <Paginator
          className={styles.paginatorContainer}
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
