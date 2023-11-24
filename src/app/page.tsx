import Page from '@components/page'

import IconCalculator from '@/assets/IconCalculator'

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
          justifyContent: 'space-evenly',
          paddingTop: '130px'
        }}
      >
        <Page.PLink href='/calculator'>
          <Page.Row>
            <IconCalculator />
          </Page.Row>

          <Page.Row
            customStyle={{
              marginTop: '10px'
            }}
          >
            <p>Calculadora</p>
          </Page.Row>
        </Page.PLink>
      </Page.Row>
    </Page.Wrapper>
  )
}