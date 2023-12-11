import Wrapper from './wrapper'
import Row from './row/index'
import TLink from './t-link'

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
     * A \<Link\/> component dedicated to targeting the application tools from the homepage.
    */
    TLink
}