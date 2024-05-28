import { TripDetailsType } from '@/pages'
import React from 'react'

interface FlightCardBodyProps {
  tripDetails: TripDetailsType
}

const FlightCardBody: React.FC<FlightCardBodyProps> = ({ tripDetails }) => {
  return (
    <div className="p-4 rounded-lg">
      {tripDetails.data.map((tripDetail, index) => {
        let detailsData = tripDetail.data

        return (
          <div key={index} className="mb-4 flex flex-col gap-3">
            <div
              className="md:flex  items-center justify-between
         bg-[#F5F7FA] rounded-lg px-5 py-2"
            >
              <div className="font-semibold mb-2 text-sm text-[#1A2B3D]">
                {tripDetail.title}
              </div>
              <div className="mx-4 md:flex justify-end text-[#5A6573]">
                {tripDetail.terminal && (
                  <span className="text-gray-500 font-semibold pr-1 text-sm">
                    Terminal {tripDetail.terminal} :
                  </span>
                )}
                <span className="text-[#5A6573] text-sm">
                  {tripDetail.airport}
                </span>
              </div>
            </div>
            <div className="md:flex flex-wrap justify-start gap-y-3">
              <div className="w-[33%] flex flex-col text-sm">
                <span className="font-bold text-lg text-md text-[#1A2B3D]">
                  {detailsData?.destination}
                </span>
                <span className="font-normal text-md text-[#5A6573]">
                  {detailsData?.duration}
                </span>
              </div>

              <div className="w-[33%] flex flex-col text-sm">
                <span className="font-bold text-lg text-md text-[#1A2B3D]">
                  {detailsData?.time}
                </span>
                <span className="font-normal text-md text-[#5A6573]">
                  {detailsData?.date}
                </span>
              </div>

              <div className="w-[33%] flex flex-col text-sm">
                <span className="font-bold text-lg text-md text-[#1A2B3D]">
                  {detailsData?.time2}
                </span>
                <span className="font-normal text-md text-[#5A6573]">
                  {detailsData?.date2}
                </span>
              </div>

              <div className="w-[33%] flex flex-col text-sm">
                <span className="font-medium text-md text-[#3E4957]">
                  {detailsData?.service}
                </span>
                {detailsData?.flight && (
                  <span className="font-normal text-md text-[#5A6573]">
                    Flight No : {detailsData?.flight}
                  </span>
                )}
              </div>

              <div className="w-[33%] flex flex-col text-sm">
                <span className="font-medium text-md text-[#5A6573]">
                  {detailsData?.industry}
                </span>
                {detailsData?.class && (
                  <p className="font-normal text-md text-[#5A6573]">
                    Class :{' '}
                    <span className="font-semibold text-[#5A6573]">
                      {detailsData?.class}
                    </span>
                  </p>
                )}
              </div>
            </div>
            {tripDetail?.alert && (
              <p className="border-1 bg-[#FFEEDB] border-[#FFE1C2] text-[#3E4957] px-3 py-2 rounded-lg text-sm">
                {tripDetail?.alert}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FlightCardBody
