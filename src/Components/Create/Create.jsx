import mockBrands from "../../mockDB/mockBrands"
import mockGenders from "../../mockDB/mockGenders"

export default function Create(){

    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="brand">Marca</label>
                    <input type="text" />
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
                        {mockGenders.map((gender,index) => (<option key={index} value={gender}>
                                {gender}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

            
            </form>
        </div>
    )
}