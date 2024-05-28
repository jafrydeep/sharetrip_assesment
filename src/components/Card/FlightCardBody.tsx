import { TripDetailsType } from '@/pages'
import React from 'react'

interface FlightCardBodyProps {
  tripDetails: TripDetailsType
}

const FlightCardBody: React.FC<FlightCardBodyProps> = ({ tripDetails }) => {
  return (
    <div className=" p-4 rounded-lg">
      {tripDetails.data.map((tripDetail, index) => (
        <div
          key={index}
          className="mb-4 md:flex  items-center justify-between
         bg-[#F5F7FA] rounded-lg px-5 py-2"
        >
          <div className="font-semibold mb-2 text-sm text-[#1A2B3D]">{tripDetail.title}</div>
          <div className="md:flex justify-end text-[#5A6573]">
            {tripDetail.terminal && (
              <span className="text-gray-500 font-semibold pr-1 text-sm">
                Terminal {tripDetail.terminal} :
              </span>
            )}
            <span className="text-[#5A6573] text-sm">{tripDetail.airport}</span>
            {/* {Object.keys(tripDetail.data).length > 0 && (
              <span className="text-sm text-gray-500 mt-2">
                Additional data: {JSON.stringify(tripDetail.data)}
              </span>
            )} */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FlightCardBody
