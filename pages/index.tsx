import React, { useState } from 'react';
import { Button, Htag, Paragraph, Rating, Tag } from "../components";


export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <Paragraph size='l'>Большой</Paragraph>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='m' color='green'>green</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
