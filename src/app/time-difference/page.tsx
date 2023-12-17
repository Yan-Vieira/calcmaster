'use client'

import Page from "@components/page"
import TimeDifference from "@components/tools/time-difference"

import useWindowWidth from "@hooks/useWindowWidth"
import useTimeDifference from "@/calc-handlers/time-difference/useTimeDifference"

export default function TimeDifferencePage () {

    const windowWidth = useWindowWidth()
    const timeDifference = useTimeDifference()

    return (
        <Page.Wrapper>
            <Page.Row
                customStyle={{paddingTop: '30px'}}
            >
                <h2>Calculadora de diferença de tempo</h2>
            </Page.Row>

            <Page.Row
                customStyle={{
                    marginTop: '20vh',
                    flexDirection: windowWidth <= 800 ? 'column' : 'row'
                }}
            >
                <TimeDifference.Input
                    name='inputA'
                    type={timeDifference.params.diffBetween}
                    state={timeDifference.values}
                    setState={timeDifference.setValues}
                />

                <TimeDifference.SwitchButton
                    values={timeDifference.values}
                    params={timeDifference.params}
                    setState={timeDifference.setIntermediary}
                />

                <TimeDifference.Input
                    name='inputB'
                    type={timeDifference.params.diffBetween}
                    state={timeDifference.values}
                    setState={timeDifference.setValues}
                />
            </Page.Row>

            <Page.Row customStyle={{marginTop: '20px',}}>
                <TimeDifference.InputResult
                    placeholder="Resultado"
                    params={timeDifference.params}
                    state={timeDifference.results}
                    setState={timeDifference.setParams}
                />
            </Page.Row>

            {timeDifference.params.diffBetween === 'date' && (
                <Page.Row
                    customStyle={{
                        height: '30px',
                        paddingTop: '30px',
                    }}
                >
                    <button
                        style={{
                            fontSize: '0.8em',
                            color: 'red',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                        }}
                        
                        onMouseEnter={(e) => (e.target as HTMLButtonElement).style.textDecoration = 'underline'}
                        onMouseLeave={(e) => (e.target as HTMLButtonElement).style.textDecoration = 'none'}
                    >
                        Atenção: a presente ferramenta não considera variações no calendário (anos bissextos, meses com 30 dias etc.)
                    </button>
                </Page.Row>
            )}
        </Page.Wrapper>
    )
}