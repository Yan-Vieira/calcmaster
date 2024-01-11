'use client'

import Page from '@components/page'
import CurrencyConverter from '@components/tools/currency-converter'

import useWindowWidth from '@hooks/useWindowWidth'
import useCurrencyConverter from '@/calc-handlers/currency-converter/useCurrencyConverter'

export default function CurrencyConverterPage () {

    const windowWidth = useWindowWidth()
    const currencyConverter = useCurrencyConverter()

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{paddingTop: '30px'}}
            >
                <h2>Conversor de moeda</h2>
            </Page.Row>

            <Page.Row
                customStyle={{
                    marginTop: '20vh',
                    flexDirection: windowWidth <= 800 ? 'column' : 'row'
                }}
            >
                <CurrencyConverter.Input
                    name='valueA'
                    state={currencyConverter.values}
                    setState={currencyConverter.setValues}
                    params={currencyConverter.params}
                    setParams={currencyConverter.setParams}

                />

                <CurrencyConverter.Input
                    name='valueB'
                    disabled={true}
                    state={currencyConverter.values}
                    setState={currencyConverter.setValues}
                    params={currencyConverter.params}
                    setParams={currencyConverter.setParams}
                />
            </Page.Row>
        </Page.Wrapper>
    )
}