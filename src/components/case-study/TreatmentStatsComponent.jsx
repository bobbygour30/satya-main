import React from 'react';

const TreatmentStatsComponent = () => {
  const stats = [
    { value: '94', unit: '%', label: 'DENSITY RESTORED' },
    { value: '3', label: 'PROTOCOLS USED' },
    { value: '28', label: 'MONTH JOURNEY' },
    { value: '12', unit: '+', label: 'TREATMENT SESSIONS' },
  ];

  return (
    <div className="w-full bg-[#C8734B]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center justify-center 
              py-16 px-6 
              border-white/10
              /* Mobile & Tablet Borders */
              border-b 
              ${index % 2 === 0 ? 'sm:border-r' : ''}
              /* Desktop Borders */
              lg:border-b-0
              ${index !== stats.length - 1 ? 'lg:border-r' : ''}
            `}
          >
            {/* Number and Unit Container */}
            <div className="flex items-start justify-center mb-2">
              <span className="text-6xl md:text-7xl font-serif text-[#F3EFE0] leading-none">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="text-2xl md:text-3xl font-serif text-[#F3EFE0] mt-1 ml-0.5">
                  {stat.unit}
                </span>
              )}
            </div>

            {/* Label */}
            <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] text-[#F3EFE0]/90 font-medium text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentStatsComponent;