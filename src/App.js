import React, { useEffect, useState } from 'react';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';

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

function App() {
  return <MyDocument />
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
