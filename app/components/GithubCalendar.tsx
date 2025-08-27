// components/GitHubCalendar.tsx

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip'; // Impor Tooltip saja

const GitHubCalendarComponent = () => {
  const username = 'bagussyahrijal'; // Ganti dengan username GitHub Anda

  return (
    <div className="border-[0.5px] hover:scale-105 transition-transform duration-500 rounded-lg p-6 my-10 w-full max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold font-satoshi mb-5 text-white text-center">
        GitHub Contribution
      </h2>

      <GitHubCalendar
        username={username}
        blockSize={10}
        blockMargin={5}
        colorScheme="dark"
        fontSize={16}
        style={{ color: '#ffffff', fontFamily:'Satoshi'}} // Pastikan warna font untuk label bulan terlihat
        // Prop renderBlock untuk kustomisasi setiap blok/kotak
        renderBlock={(block, activity) => {
          // Setiap blok akan memiliki atribut data-tooltip ini
          return React.cloneElement(block, {
            'data-tooltip-id': 'react-tooltip',
            'data-tooltip-html': `${activity.count} kontribusi pada ${activity.date}`,
          });
        }}
      />
      
      {/* Komponen Tooltip ditempatkan di luar Kalender.
        'id' harus cocok dengan 'data-tooltip-id' di atas.
      */}
      <Tooltip id="react-tooltip" />

    </div>
  );
};

export default GitHubCalendarComponent;