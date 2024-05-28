import { TripDetailsType } from '@/pages';
import React from 'react'

interface FlightCardTopProps {
    number: number
    route: string
    tripDetails: TripDetailsType;
    duration: string
}

const FlightCardTop: React.FC<FlightCardTopProps> = ({ number, route, tripDetails, duration }) => {
    return (
        <div className="md:flex items-center bg-white p-4 border-b-[#EBF0F5] border-b-2">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full">
                {number}
            </div>
            <div className="flex flex-col md:ml-4">
                <div className="text-lg font-semibold">{route}</div>
                <div className="text-sm text-gray-500">
                    {tripDetails.type} <span className="mx-1">•</span>
                     {tripDetails.dates}{' '}
                    <span className="mx-1">•</span> {tripDetails.stops}
                </div>
            </div>
            <span className="ml-auto bg-[#E8F3FF] border-[#1882FF] text-[#1882FF] px-3 py-1 rounded-full text-sm font-medium">
                {duration}
            </span>
        </div>
    )
}

export default FlightCardTop
