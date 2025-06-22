import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard id='123' name='Neura the Brainy Explorer' topic='Neural Network of Brain' subject='Science' duration={45} color='#ffda6e' />
        <CompanionCard id='456' name='Robo the Tech Guru' topic='AI and Robotics' subject='Technology' duration={30} color='#ffda6e' />
        <CompanionCard id='789' name='Luna the Space Enthusiast' topic='Astrophysics' subject='Science' duration={60} color='#ffda6e' />
      </section>
      <section className='home-section'>
        <CompanionList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
        <CTA /> 
      </section>
    </main>
  )
}

export default Page