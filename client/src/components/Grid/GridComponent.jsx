import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHolding } from '@fortawesome/free-solid-svg-icons';
 

export default function GridComponent(props) {
  const { header, description } = props;
  return (
    <div className="col-md-4 col-sm-12 p-5">
      <FontAwesomeIcon icon={faHandHolding}  size="6x"/>
      <i className={'fa fa-hand-holding'} ></i>
      <h3>{header}</h3>
      <p>{description}</p>
      <h1>User</h1>
    </div>
  );
}
