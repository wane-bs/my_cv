import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HarvardCVTemplate from './HarvardCVTemplate';

import { PDFDownloadLink } from '@react-pdf/renderer';

const PDFDownloadButton = ({ data, language = 'en' }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <button className="btn btn-primary">Loading PDF...</button>;
  }

  return (
    <PDFDownloadLink
      document={<HarvardCVTemplate data={data} language={language} />}
      fileName={`Trung_Hieu_CV_${language.toUpperCase()}.pdf`}
      className="btn btn-primary inline-flex items-center gap-2"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generating PDF...' : 'Download PDF CV (Harvard Style)'
      }
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
