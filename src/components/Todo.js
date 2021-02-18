import React from 'react';

export default function Todo(props) {
  const {id, name, completed} = props;
  return (
      <li id={id} className={`complete-${completed}`}>{name}</li>
  );
}
