import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const UseRefPractice = () => {
    const lastParagraph = useRef();
    const moveDown = () => {
        console.log(lastParagraph.current);
    }
    const [render, setRender] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current+1
        console.log(count.current);
    }, [render])
    
    return (
        <>
            <button onClick={moveDown}>click me</button>
            <h1>{render}</h1>
            <button onClick={()=>{setRender(prev => prev + 1)}}>إعادة التحميل</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro fuga voluptatibus molestias sequi aliquid? Itaque qui aut necessitatibus animi vel provident modi mollitia, saepe ab doloribus blanditiis ut officia!</p>
            <p ref={lastParagraph}>hello world! ^-^</p>
        </>
    );
};

export default UseRefPractice;