import { TripDetailsType } from '@/pages'
import React from 'react'
import infoIcon from '@/assets/images/info.png'
import planeIcon from '@/assets/images/plane.png'
import locationIcon from '@/assets/images/location.png'
import locationEndIcon from '@/assets/images/loc2.png'
import Image from 'next/image'

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
            {/* 1st */}
            <div className="flex gap-2">
              <div className="py-3">
                <Image src={index !== tripDetails?.data?.length - 1 ? locationIcon : locationEndIcon} alt="info" width={16} height={16} />
              </div>
              <div
                className="flex-1 md:flex  items-center justify-between
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
            </div>
            {/* 2nd */}
            <div className="flex gap-2">
              {index !== tripDetails?.data?.length - 1 && (
                <div className={'dividerContainer'}>
                  <div className={'divider'}></div>
                  <div className={'planeIcon'}>
                    <Image src={planeIcon} alt="plane" width={24} height={24} />
                  </div>
                  <div className={'divider'}></div>
                </div>
              )}
              <div className="flex flex-col">
                <div className="px-3 flex-1 flex md:flex-wrap justify-start gap-y-3">
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
                {/* 3rd => Alert */}
                {tripDetail?.alert && (
                  <div className="my-3 flex items-center border-1 bg-[#FFEEDB] border-[#FFE1C2] text-[#3E4957] px-3 py-2 rounded-lg text-sm gap-2">
                    <div>
                      <Image src={infoIcon} alt="info" width={24} height={24} />
                    </div>
                    {tripDetail?.alert}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FlightCardBody
