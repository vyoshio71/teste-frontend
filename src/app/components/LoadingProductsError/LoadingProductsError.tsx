// components/ErrorIndicator.tsx
import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import "./LoadingProductsError.scss";

const LoadingProductsError: React.FC = () => {
  return (
    <div className="errorContainer">
      <AiOutlineWarning className="styles.errorIcon" />
      <p>Ops! Algo deu errado ao carregar os produtos.</p>
    </div>
  );
};

export default LoadingProductsError;
