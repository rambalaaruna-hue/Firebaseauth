import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import BookSection from '../components/BookSection'
import PaymentSection from '../components/PaymentSection'
import UPISection from '../components/UPISection'
import PostpaidSection from '../components/PostpaidSection'
import CreditSection from '../components/CreditSection'
import FinancialSection from '../components/FinancialSection'
import MoneySection from '../components/MoneySection'
import InsuranceSection from '../components/InsuranceSection'
import LoanSection from '../components/LoanSection'
import BusinessSection from '../components/BusinessSection'
import InShopPayments from '../components/InShopPayments'
import BusinessTools from '../components/BusinessTools'
import MoneyTravelSection from '../components/MoneyTravelSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ServiceSection/>
    <BookSection/>
    <PaymentSection/>
    <UPISection/>
    <PostpaidSection/>
    <CreditSection/>
    <FinancialSection/>
    <MoneySection/>
    <InsuranceSection/>
    <LoanSection/>
    <BusinessSection/>
    <InShopPayments/>
    <BusinessTools/>
    <MoneyTravelSection/>
    <Footer/>
  

    </>
  )
}

export default Home