import React, { useState, useEffect } from 'react';

const ErrorBoundry = (props) => {
  const ErrorFallbackUI = (errorType) => {
    console.log('Check error type', errorType);
    switch (errorType.errorType) {
      case 'API':
        return <h4>API ERROR!</h4>;
      case 'NETWORK':
        return <h1>CHECK INTERNET CONNECTION</h1>;
      default:
        return <h4>SOMETHING WENT WRONG...</h4>;
    }
  };

  return props.hasError ? (
    <ErrorFallbackUI errorType={props.errorType} />
  ) : (
    props.children
  );
};

export default ErrorBoundry;
