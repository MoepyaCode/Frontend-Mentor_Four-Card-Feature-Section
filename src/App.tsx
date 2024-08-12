import { Assets } from './assets'
import { Container, Main, Wrapper } from './components'

export default function App() {
  type CardPropsType = {
    title: string,
    description: string,
    image: string,
    color: string
  }

  function cardComponent(cardContent: CardPropsType) {
    return (
      <Wrapper style={{ borderTop: `3.55px solid ${cardContent.color}` }} className='w-full max-w-[350px] min-h-[222px] px-[28px] pb-[28px] pt-[calc(27px-3.55px)] rounded-[8px] flex flex-col flex-nowrap justify-between shadow-[0_15px_30px_-11px_rgba(131,166,210,.5)]'>
        <Wrapper className='text-[#4D4F62]'>
          <h3 className='font-semibold text-[20px]'>{cardContent.title}</h3>
          <p className='text-[13px] leading-[23px] tracking-[0.09px] opacity-50'>{cardContent.description}</p>
        </Wrapper>
        <img className='max-w-[57px] aspect-square self-end' src={cardContent.image} alt="" />
      </Wrapper>
    )
  }

  function cardsContent() {
    const cardsContent: CardPropsType[] = [
      {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        image: Assets.iconSupervisor,
        color: '#44D3D2'
      },
      {
        title: 'Team Builder',
        description: 'Scans our talent network to create the optimal team for your project',
        image: Assets.iconTeamBuilder,
        color: '#EA5454'
      },
      {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        image: Assets.iconKarma,
        color: '#FCAE4A'
      },
      {
        title: 'Calculator',
        description: 'Uses data to analyze previous projects and provide accurate estimates',
        image: Assets.iconCalculator,
        color: '#549EF2'
      }
    ]
    return (
      <Wrapper className='flex flex-col xl:flex-row items-center wrap gap-[25px]'>
        {cardComponent(cardsContent[0])}
        <Wrapper className='flex flex-col md:flex-row xl:flex-col flex-nowrap gap-[25px]'>
          {cardComponent(cardsContent[1])}
          {cardComponent(cardsContent[2])}
        </Wrapper>
        {cardComponent(cardsContent[3])}
      </Wrapper>
    )
  }

  return (
    <Main className='font-poppins bg-[#FAFAFA] grid place-items-center min-w-full px-[32px] py-[85px] lg:px-[165px] lg:py-[80px] xl:py-0'>

      <Container className='w-full grid place-items-center gap-[76px] lg:gap-[64px]'>

        <Wrapper className='text-center grid place-items-center gap-[16px] md:gap-[13px] text-[#4D4F62] max-w-[540px]'>
          <Wrapper className='text-[24px] md:text-[36px] tracking-[0.17px]'>
            <h2 className='font-extralight'>Reliable, efficient delivery</h2>
            <h1 className='font-semibold'>Powered by Technology</h1>
          </Wrapper>
          <p className='text-[15px] leading-[25px] tracking-[0.1px] opacity-50'>
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
          </p>
        </Wrapper>

        {cardsContent()}
      </Container>

    </Main>
  )
}
