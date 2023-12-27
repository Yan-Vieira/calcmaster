'use client'

import Page from '@components/page'
import UnitConverter from '@components/tools/unit-converter'

import useUnitConverter from '@/calc-handlers/unit-converter/useUnitConverter'

export default function UnitConverterPage () {

    const unitConverter = useUnitConverter()

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{paddingTop: '30px'}}
            >
                <h2>Conversor de unidades</h2>
            </Page.Row>

            <Page.Row
                customStyle={{paddingTop: '20vh'}}
            >
                <UnitConverter.Wrapper>
                    <UnitConverter.Row>
                        <UnitConverter.Input
                            name='valueA'
                            state={unitConverter.values}
                            setState={unitConverter.setValues}
                            params={unitConverter.params}
                            currentUnits={unitConverter.unitsList.getUnitsFromMeasure(unitConverter.params.unitType)}
                            setParams={unitConverter.setParams}
                        />

                        <UnitConverter.SwitchButton
                            values={unitConverter.values}
                            params={unitConverter.params}
                            setState={unitConverter.setIntermediary}
                        />

                        <UnitConverter.Input
                            name='valueB'
                            state={unitConverter.values}
                            setState={unitConverter.setValues}
                            params={unitConverter.params}
                            setParams={unitConverter.setParams}
                            currentUnits={unitConverter.unitsList.getUnitsFromMeasure(unitConverter.params.unitType)}
                            direction='reverse'
                            disabled={true}
                        />

                    </UnitConverter.Row>

                    <UnitConverter.Row>
                        <UnitConverter.UnitTypeMenu
                            state={unitConverter.params}
                            setState={unitConverter.setParams}
                            measures={unitConverter.unitsList.getTranslatedMeasures()}
                        />
                    </UnitConverter.Row>
                </UnitConverter.Wrapper>
            </Page.Row>
        </Page.Wrapper>
    )
}