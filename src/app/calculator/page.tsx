'use client'

import Page from '@components/page'

import Calculator from "@/components/tools/calculator"

export default function calculatorPage () {

    const supKeys = [
        {value: '+/-'},
        {value: '('}
    ] as CalculatorKey[]

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{
                    paddingTop: '20px'
                }}
            >
                <h1>Calculadora</h1>
            </Page.Row>
            
            <Page.Row
                customStyle={{
                    marginTop: '40px'
                }}
            >
                <Calculator.Wrapper>
                    <Calculator.Screen>

                    </Calculator.Screen>

                    <Calculator.Keyboard
                        templateColumns='100%'
                        templateRows='repeat(2, 1fr)'
                    >
                        <Calculator.KeyGroup
                            templateColumns='repeat(4, 1fr)'
                            templateRows='repeat(5, 1fr)'
                        >
                            {supKeys.map(key => (
                                <Calculator.Key
                                    key={key.value}
                                    value={key.value}
                                    onClick={(value) => console.log(value)}
                                />
                            ))}
                        </Calculator.KeyGroup>
                    </Calculator.Keyboard>
                </Calculator.Wrapper>
            </Page.Row>
        </Page.Wrapper>
    )
}