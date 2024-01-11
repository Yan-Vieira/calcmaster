'use client'

import Page from '@components/page'
import PxToEm from '@components/tools/px-to-em'

import useWindowWidth from '@/hooks/useWindowWidth'
import usePxToEm from '@/calc-handlers/px-to-em/usePxToEm'

export default function PxToEmConverterPage () {

    const windowWidth = useWindowWidth()
    const pxToEm = usePxToEm()

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{paddingTop: '30px'}}
            >
                <h2>Conversor de pixels para EM</h2>
            </Page.Row>
            <Page.Row
                customStyle={{
                    marginTop: '20vh',
                    flexDirection: windowWidth <= 800 ? 'column' : 'row'
                }}
            >
                <PxToEm.Input
                    name='pxInput'
                    state={pxToEm.values}
                    setState={pxToEm.setValues}
                />

                <p style={{
                    color: 'var(--col_4)',
                    marginTop: windowWidth > 800 ? '25px' : '0'
                    }}
                >
                    É igual a
                </p>

                <PxToEm.Input
                    name='emInput'
                    state={pxToEm.values}
                    setState={pxToEm.setValues}
                />
            </Page.Row>

            <Page.Row>
                <PxToEm.DefaultSizeInput
                    state={pxToEm.defaultSize}
                    setState={pxToEm.setDefaultSize}
                />
            </Page.Row>
        </Page.Wrapper>
    )
}