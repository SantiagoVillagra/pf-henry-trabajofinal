import mockBrands from "../../mockDB/mockBrands"
import mockGenders from "../../mockDB/mockGenders"
import sports from "../../mockDB/mockSports";
import mockSports from "../../mockDB/mockSports"

export default function Create(){

    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="brand">Marca</label>
            <select name="deporte" id="deporte">
              <option value="" disabled selected>
                Selecciona una marca
              </option>
              {mockBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="modelo">Modelo</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="precio">Precio</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="talles">Talles</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="genero">Genero</label>
            <select name="genero" id="genero">
              <option value="" disabled selected>
                Selecciona un genero
              </option>
              {mockGenders.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="Deporte">Deporte</label>
            <select name="deporte" id="deporte">
              <option value="" disabled selected>
                Selecciona un deporte
              </option>
              {mockSports.map((sports, index) => (
                <option key={index} value={sports}>
                  {sports}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Descripcion</label>
            <textarea
              id="description"
              name="description"
              class="custom-textarea"
              placeholder="Añade la descripcion..."
            ></textarea>
          </div>
        </form>
      </div>
    );
}