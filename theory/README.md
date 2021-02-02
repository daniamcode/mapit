Nota: Parto de la base de que no he entendido muy bien una cosa del ejercicio: Del esquema, no veo dónde se dice si se solicita o no cada servicio, y cuántas veces se hace. Supondré que sólo se pide una vez, y que las llamadas a estos servicios me devolverán true o false para saber si el servicio en cuestión se ha pedido o no.    
    
    Issues detectados:

    1. Si pudiera cambiar el diagrama, PremiumContent debería ser parte de los servicios.
    2. Dada la actual arquitectura, additionalFee es parte del objeto PremiumContent, y no de MultimediaContent, por lo que el código propuesto es incorrecto.
    3. La llamada al servicio la haría a través de Redux, para no mutar el estado.
    4. El método getTotal debería estar en un fichero aparte del componente, por claridad y para poder ser reutilizado.
    5. En vez de "if else" usaría "switch", que es más útil para manejar múltiples casos en un futuro.
    6. Los casos los trataría como constantes fuera del fichero, para modificarlas en un solo lugar.
    7. "typeof" es incorrecto aquí, hay que evaluar cada caso, no su tipo.
    8. El doble igual es peligroso, es mejor triple igual pues es más restrictivo, pues se tiene en cuenta el tipo además del valor.
    
    Observación: Con los últimos avances de JavaScript, prefiero usar hooks y funciones, en vez de clases, por lo que modificaré el código en ese sentido. Esto reducirá el tamaño de los bundles, pues en general se usa menos código. 



import { useSelector, useDispatch } from "react-redux";
import { getMultimediaContent } from "../redux/actions/streamingActions";
import getTotal from "../scripts/getTotal";

const RegisteredUser = () => {
    //a través de Redux ejecuto getMultimediaContent, y me traigo los estados que necesito (streamingPrice y downloadPrice, que podrán ser cero si el contenido no es de ese tipo; y además aditionalFee, que debería ser parte del servicio y no entiendo muy bien viendo el esquema porqué no es así)
    
    const dispatch = useDispatch();
    dispatch(getMultimediaContent())

    const streamingPrice = useSelector((state) => state.streamingReducer.streamingPrice);
    const downloadPrice = useSelector((state) => state.streamingReducer.downloadPrice);

    //dentro de la acción de redux debo determinar si el MultimediaContent es premium y en función de eso devolveré cero o el aditionalFee que viene del "servicio" correspondiente

    const aditionalFee = useSelector((state) => state.streamingReducer.aditionalFee);

    price = getTotal(streamingPrice, downloadPrice, aditionalFee)
    return (
        <h3>The total price is {price}</h3>
    )
}

export default RegisteredUser
    
//la lógica se hace en las actions de redux. Si el servicio es de un tipo u otro se devuelve el precio o cero. 

//la función getTotal se podría simplificar más aún a partir del objeto arguments y así sumar todas las entradas, sean cuantas sean, en un bucle que contemple el length de arguments.

function getTotal(streamingPrice, downloadPrice, aditionalFee) {
    return streamingPrice + downloadPrice + aditionalFee
}

Por ejemplo, si streamingPrice es 10 euros, downloadPrice es 0, no porque valga cero sino porque es false, y aditionalFee es 5 euros, la suma sería de 15 euros.

