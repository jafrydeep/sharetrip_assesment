'use client'
import React from 'react'
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import FlightCard from '@/components/FlightCard'

export interface TripDetailsType {
  length: number
  type: string
  dates: string
  stops: string
  data: TripDetail[]
}
interface TripDetail {
  title: string
  terminal?: number
  airport: string
  alert?: string
  data: any
}
const HomePage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Booking History', href: '/' },
    { label: 'Flight', href: '/' },
    { label: 'STFL17121182045413' },
  ]

  const tripDetails: TripDetailsType = {
    type: 'Round Trip',
    dates: '25 Mar - 4 Apr 2023',
    stops: '1 Stop',
    data: [
      {
        title: 'Departure from Dhaka',
        terminal: 1,
        airport: 'Hazrat Shahjalal International Airport',
        alert: 'Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality',
        data: {
          destination: 'DAC - DXB',
          duration: '12 hr 20 min',
          time: '07:30 PM',
          time2: '08:50 AM',
          date: '28 Mar, Friday',
          date2: '29 Mar, Saturday',
          service: 'Turkish Airlines',
          flight: 'TUR467',
          class: 'ECONOMY-Y (O)',
          industry: 'Airbus Industrie 737-800-738',
        },
      },
      {
        title: 'Layover at Dubai: 12 hr 20 min ',
        airport: 'Dubai International Airport',
        data: {
          destination: 'DAC - DXB',
          duration: '12 hr 20 min',
          time: '07:30 PM',
          time2: '08:50 AM',
          date: '28 Mar, Friday',
          date2: '29 Mar, Saturday',
          service: 'Turkish Airlines',
          flight: 'TUR467',
          class: 'ECONOMY-Y (O)',
          industry: 'Airbus Industrie 737-800-738',
        },
      },
      {
        title: 'Destination at New York',
        terminal: 4,
        airport: 'John F Kennedy International Airport',
        data: {}
      },
    ],
    length: 0
  }
  return (
    <Layout>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Flight Card */}
      <FlightCard tripDetails={tripDetails} />
    </Layout>
  )
}

export default HomePage
