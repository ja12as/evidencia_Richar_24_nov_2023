/* const string = "Texto";
const number = 12345;
const boolean = true;
const array = ['Clase','Viernes 13',145,true];
const funcion = () => 1 + 1;
const objeto = {nombre: 'zacarias'};
const fecha = new Date();
 */

import PropTypes from 'prop-types';
export const PrimerComponente = ({titulo, subtitulo}) => {
    console.log(titulo);
    console.log(subtitulo)
    return(
        <>

        <h1>props:</h1>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>

        {/*     <p>{string}</p>
            <p>{number}</p>
            <p>{boolean}</p>
            <p>{array}</p>
            <p>{funcion}</p>
            <p>{JSON.stringify(objeto)}</p>
            <p>{JSON.stringify(fecha)}</p> */}
        </>
    );
};

PrimerComponente.propTypes = {
    titulo : PropTypes.string.isRequired,
    subtitulo : PropTypes.string.isRequired,
}

PrimerComponente.defaultProps = {
    titulo: "clase react con richard",
    subtitulo:"viernes 13 octubre"

}