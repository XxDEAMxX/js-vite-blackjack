/**
 * Metodo para pedir una carta
 * @param {array<String>} deck 
 * @returns {String} retorna un String de una carta
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}