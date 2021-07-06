/* eslint-disable radix */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import leftCaret from "public/caret-left.png";
import rightCaret from "public/caret-right.png";
import {
  CounterContainer,
  CounterView,
  CaretContainer,
} from "./Counter.styles";
import { CounterParams } from "./Counter.interface";

const Counter: React.FC<CounterParams> = ({ setNumber }) => {
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    if (count < 1) {
      setCount(1);
      return;
    }
    setNumber(count);
  }, [count]);

  const handleInputPlusChange = () => {
    setCount(count + 1);
  };

  const handleInputMinusChange = () => {
    setCount(count - 1);
  };

  return (
    <CounterContainer>
      <CaretContainer>
        <Image
          onClick={handleInputMinusChange}
          src={leftCaret}
          alt="caret Left"
          width={25}
          height={50}
        />
      </CaretContainer>

      <CounterView> {count}</CounterView>
      <CaretContainer>
        <Image
          onClick={handleInputPlusChange}
          src={rightCaret}
          alt="caret Right"
          width={25}
          height={50}
        />
      </CaretContainer>
    </CounterContainer>
  );
};

export default Counter;
