import React, { useEffect, useState, useRef } from 'react';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';

const MyDocument = () => {
  // const { search } = useLocation();
  // const query = new URLSearchParams(search);
  // const actionQuery = query.get('session');

  // const [queryParams, setQueryParams] = useState({});
  // const [init, setInit] = useState(false);

  // useEffect(() => {
  //   if(!init){
  //     const params = new URLSearchParams(window.location.search);
  //     const queryParamsObject = Object.fromEntries(params.entries());
  //     setQueryParams(queryParamsObject);
  //     setInit(true);
  //     console.log(queryParams);
  //   }
  // }, [queryParams]);

  const params = new URLSearchParams(window.location.search);
  const queryParamsObject = Object.fromEntries(params.entries());
  console.log(queryParamsObject);

  return (
    <div className='w-100 h-100'>
      <PDFViewer width={"100%"} height={"800"} showToolbar={true}>
        <Document>
          <Page size="LEGAL">
            <View style={{ margin: 50 }}>
              <Text>Property Information</Text>
              <Text>{queryParamsObject.propertyName}</Text>
              <Image
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd7JsARcFhCLY8YvWYgC11qxhmpzRikM12g&s"}
                style={{ width: 100, height: 100 }}
                fixed={true}
              />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

const MyDocumentCanvas = () => {
  const elementRef = useRef(null);

  const handleDownload = () => {
    html2canvas(elementRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download   
 = 'my-image.png';
      link.click();
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Image</button>
      <div ref={elementRef}>
        {/* Your HTML content to be converted to an image */}
        <h1>Hello, World!</h1>
        <p>This is a sample text.</p>
      </div>
    </div>
  );
};

function App() {
  return <MyDocument />
  // return <MyDocumentCanvas />
  // return (
  //   <Router>
  //     <Routes>
  //       <Route element={<MyDocument />} path="/" />
  //       <Route element={<div style={{ fontSize: "20px" }}>404</div>} path="*" />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
