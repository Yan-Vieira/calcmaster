import Page from '@components/page'

import SimpleRuleOfThreeIcon from '@assets/SimpleRuleOfThreeIcon'
import TimeDifferenceIcon from '@assets/TimeDifferenceIcon'
import UnitConverterIcon from '@assets/UnitConverterIcon'
import PxToEmIcon from '@assets/pxToEmIcon'

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

        <Page.TLink
          href='/unit-converter'
          image={<UnitConverterIcon />}
          text='Conversor de unidades'
        />

        <Page.TLink
          href='/px-to-em'
          image={<PxToEmIcon />}
          text='Conversor de px para em'
        />
      </Page.Row>

      <Page.Row
        customStyle={{
          marginTop: '70px'
        }}
      >
        <p
          style={{
            marginTop: '50px',
            fontWeight: '600',
            textAlign: 'center',
            color: 'var(--col_4)',
            opacity: '0.4'
          }}
        >
          Novas ferramentas em breve
        </p>
      </Page.Row>
    </Page.Wrapper>
  )
}