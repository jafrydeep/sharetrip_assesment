import React from 'react'
import FlightCardTop from './Card/FlightCardTop'
import { TripDetailsType } from '@/pages/index'
import FlightCardBody from './Card/FlightCardBody'

interface FlightCardProps {
    tripDetails: TripDetailsType
}

const FlightCard: React.FC<FlightCardProps> = ({ tripDetails }) => {
   


    return (
        <div className="bg-white w-full rounded-xl shadow-lg">
            {/* Top */}
            <FlightCardTop
                number={1}
                route="DAC → JFK"
                tripDetails={tripDetails}
                duration="33h 20m"
            />
            {/* body */}
            <FlightCardBody tripDetails={tripDetails} />
        </div>
    )
}

export default FlightCard
