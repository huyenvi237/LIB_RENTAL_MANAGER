import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { itemNames } from '../components/ListItemName';


export default function Delete(props) {
    
  return (
    <div>
        <h2>{itemNames}</h2>
        <h2>{props.id}</h2>
    </div>
  )
}
