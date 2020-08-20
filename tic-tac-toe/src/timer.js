import React, { useState, useEffect } from 'react';

export default function Timer (props) {


    useEffect(() => {
    let interval = null;
    if (props.countTime) {
    interval = setInterval(() => {
        props.setTimer(timer => timer + 1)
        console.log(props.timer);
    }, 1000);
    } else if (!props.countTime && props.timer !== 0) {
    clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [props.countTime, props.timer]);

    
    

    return <div>game duration: {props.timer}</div>
    
    
    }