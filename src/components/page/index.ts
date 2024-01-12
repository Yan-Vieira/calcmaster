import Wrapper from './wrapper'
import Row from './row/index'
import TLink from './t-link'

/**
 * Object that holds all page components.
*/
const Page = {
    /**
     * O corpo principal da página.
    */
    Wrapper,
    /**
     * Delimita um bloco vertical. Torna mais fácil a organização dos elementos na página.
    */
    Row,
    /**
     * A \<Link\/> component dedicated to targeting a tool, from the homepage.
    */
    TLink
}

export default Page