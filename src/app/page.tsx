import Page from '@components/page'

import SimpleRuleOfThreeIcon from '@assets/SimpleRuleOfThreeIcon'
import TimeDifferenceIcon from '@assets/TimeDifferenceIcon'

export default function Home() {
  return (
    <Page.Wrapper>
      <Page.Row
        customStyle={{
          flexDirection: 'column',
          height: '68px',
          marginTop: '20px'
        }}
      >
        <h1>
          Qual será seu próximo <span style={{color: 'var(--col_5)'}}>cálc</span>ulo?
        </h1>
        <h4>
            Todas as ferramentas matemáticas que você precisa, em um só lugar!
        </h4>
      </Page.Row>

      <Page.Row
        customStyle={{
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          paddingTop: '18vh'
        }}
      >
        <Page.TLink
          href='/simple-rule-of-three'
          image={<SimpleRuleOfThreeIcon />}
          text='Regra de três simples'
        />

        <Page.TLink
          href='/time-difference'
          image={<TimeDifferenceIcon />}
          text='Diferença de tempo'
        />
      </Page.Row>
    </Page.Wrapper>
  )
}