import React from "react";
import compareWords from "./compareWords";
import Row from "./Row";
import Square from "./Square";

type Props = {
  word: string;
  targetWord: string;
};
export default function RowCompleted({ word, targetWord }: Props) {
  const colors = compareWords(word, targetWord);

  return (
    <>
      <Row colors={colors} word={word} />
    </>
  );
}
