import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/anim/loading.json";

const Loader = () => {
    return <Lottie className='w-96 mx-auto' animationData={groovyWalkAnimation} />;

};

export default Loader;