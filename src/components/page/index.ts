import Wrapper from './wrapper'
import Row from './row/index'
import PLink from './plink'

/**
 * Objeto que reúne os elementos necessários para criar uma página.
*/
export default {
    /**
     * O corpo principal da página.
    */
    Wrapper,
    /**
     * Delimita um bloco vertical. Torna mais fácil a organização dos elementos na página.
    */
    Row,
    /**
     * Um componente \<Link\/> já estilizado. Poupa a necessidade de estilizar os links diretamente na página.
    */
    PLink
}