import { useState, useEffect } from 'react'

export default function useCalculator() {

    const [screen, setScreen] = useState({
        prevLine: '',
        currLine: ''
    })

    const [currExpression, setCurrExpression] = useState<string[]>([])

    useEffect(() => {
        setScreen(state => ({
            ...state,
            prevLine: `${currExpression.join(' ')} `,
            currLine: ''
        }))
    }, [currExpression])

    const keyboard = {
        keyHandlers: {
            "number": (value:string) => {
                setScreen(state => ({
                    ...state,
                    currLine: `${state.currLine}${value}`
                }))
            },
            "operator": (value:string) => {
                setCurrExpression(state => [...state, screen.currLine, value])
            },
            "equals": () => {
                console.log(`current expression: ${currExpression}`)

                setCurrExpression([])
            }
        } as KeyHandlers,

        getKeyHandler: (keyName:string) => {
            if (! keyboard.keyHandlers[keyName]) {
                console.warn(`No handler for key: ${keyName}`)
            }
        
            return keyboard.keyHandlers[keyName] || null
        }
    }

    return {
        screen,
        keyboard: {
            getKeyhandler: keyboard.getKeyHandler
        }
    }
}