'use client'

import Page from '@components/page'
import Calculator from "@/components/tools/calculator"

import useCalculator from '@/calc-handlers/calculator/useCalculator'

export default function calculatorPage () {

    const calculator = useCalculator()

    const supKeys = [
        {value: '+/-'},
        {value: '('}
    ] as CalculatorKey[]

    const basicKeys = [
        {value: '7', type: 'number'},
        {value: '8', type: 'number'},
        {value: '9', type: 'number'},
        {value: '÷', type: 'operator'},
        {value: '4', type: 'number'},
        {value: '5', type: 'number'},
        {value: '6', type: 'number'},
        {value: '×', type: 'operator'},
        {value: '1', type: 'number'},
        {value: '2', type: 'number'},
        {value: '3', type: 'number'},
        {value: '-', type: 'operator'},
        {value: '.', type: 'number'},
        {value: '0', type: 'number'},
        {value: '=', type: 'equals'},
        {value: '+', type: 'operator'},
    ] as CalculatorKey[]

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{
                    paddingTop: '20px'
                }}
            >
                <h2>Calculadora</h2>
            </Page.Row>
            
            <Page.Row
                customStyle={{
                    marginTop: '40px'
                }}
            >
                <Calculator.Wr>
                    <Calculator.Scr>
                        <p>{calculator.screen.prevLine}</p>
                        <p>{calculator.screen.currLine}</p>
                    </Calculator.Scr>

                    <Calculator.KyB
                        templateColumns='100%'
                        templateRows='10% 90%'
                    >
                        <Calculator.KyG
                            templateColumns='repeat(4, 1fr)'
                            templateRows='100%'
                        >
                            {supKeys.map(key => (
                                <Calculator.Key
                                    key={key.value}
                                    value={key.value}
                                    type='function'
                                    onClick={calculator.keyboard.getKeyhandler(key.type)}
                                />
                            ))}
                        </Calculator.KyG>
                        <Calculator.KyG
                            templateColumns='repeat(4, 1fr)'
                            templateRows='repeat(4, 1fr)'
                        >
                            {basicKeys.map(key => (
                                <Calculator.Key
                                    key={key.value}
                                    value={key.value}
                                    type={key.type}
                                    onClick={calculator.keyboard.getKeyhandler(key.type)}
                                />
                            ))}
                        </Calculator.KyG>
                    </Calculator.KyB>
                </Calculator.Wr>
            </Page.Row>
        </Page.Wrapper>
    )
}