import React, { useState } from 'react';
import './style.css';
import ErrorBoundry from './component/ErrorBoundry';

export default function App() {
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState('API');
  return (
    <ErrorBoundry hasError={hasError} errorType={errorType}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          setErrorType('API');
          setHasError(!hasError);
        }}
      >
        CLICK
      </button>
    </ErrorBoundry>
  );
}
