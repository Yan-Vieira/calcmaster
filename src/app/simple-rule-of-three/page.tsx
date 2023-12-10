'use client'

import Page from '@/components/page'
import SROT from '@/components/tools/simple-rule-of-three'

import useRuleOfThree from '@/calc-handlers/rule-of-three/useRuleOfThree'

export default function simpleRuleOfThreePage () {

    const ruleOfThree = useRuleOfThree()

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{paddingTop: '30px'}}
            >
                <h2>Regra de três simples</h2>
            </Page.Row>

            <Page.Row
                customStyle={{
                    paddingTop: '20vh'
                }}
            >
                <SROT.Wrapper>
                    <SROT.Row>
                        <SROT.Input
                            name="valueA"
                            state={ruleOfThree.values.valueA}
                            setState={ruleOfThree.setValues}
                            valueX={ruleOfThree.values.valueX}
                            valueXOwner={ruleOfThree.valueXOwner}
                            setValueXOwner={ruleOfThree.setValueXOwner}
                        />

                        <SROT.Line />

                        <SROT.Input
                            name="valueB"
                            state={ruleOfThree.values.valueB}
                            setState={ruleOfThree.setValues}
                            valueX={ruleOfThree.values.valueX}
                            valueXOwner={ruleOfThree.valueXOwner}
                            setValueXOwner={ruleOfThree.setValueXOwner}
                            direction='reverse'
                        />
                    </SROT.Row>
                    <SROT.Row>
                        <SROT.Input
                            name="valueC"
                            state={ruleOfThree.values.valueC}
                            setState={ruleOfThree.setValues}
                            valueX={ruleOfThree.values.valueX}
                            valueXOwner={ruleOfThree.valueXOwner}
                            setValueXOwner={ruleOfThree.setValueXOwner}
                        />
                        <SROT.Line />
                        <SROT.Input
                            name="valueD"
                            state={ruleOfThree.values.valueD}
                            setState={ruleOfThree.setValues}
                            valueX={ruleOfThree.values.valueX}
                            valueXOwner={ruleOfThree.valueXOwner}
                            setValueXOwner={ruleOfThree.setValueXOwner}
                            direction='reverse'
                        />
                    </SROT.Row>
                </SROT.Wrapper>
            </Page.Row>


        </Page.Wrapper>
    )
}