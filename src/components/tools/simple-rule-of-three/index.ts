import {Wrapper, Row, Line} from './styledComponents'
import Input from './input'
import Proportionality from './proportionality'

const SROT = {
    /**
     * The body from simple rule of three tool.
    */
    Wrapper,
    Row,
    /**
     * A line used to separate \<SROT.Input\/> in same row.
    */
    Line,
    /**
     * Hold a value used in the simple rule of three operation.
    */
    Input,
    /**
     * sets whether the simple rule of three is directly or inversely proportional.
    */
    Proportionality
}

export default SROT