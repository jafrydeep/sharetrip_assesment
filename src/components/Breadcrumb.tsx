'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import leftArrow from '../assets/images/left-arrow.png';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className='md:h-[5%]'>
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap md:flex-nowrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center">
                {!isLast ? (
                  <>
                    <Link href={item.href || '#'} className='hover:text-[#1882FF] text-[#5A6573] hover:underline cursor-pointer decoration-transparent'>
                      {item.label}
                    </Link>
                    <span className="mx-2 text-[#77818C]">
                      <Image src={leftArrow} alt="left arrow" width={6} height={6} />
                    </span>
                  </>
                ) : (
                  <span className="text-[#1882FF] font-medium">{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>

  );
};

export default Breadcrumb;
