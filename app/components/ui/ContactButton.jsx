"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BlogButton = () => {
    const router = useRouter()

    function handleClick(){
        router.push('/posts')
    }

    return (
        <button onClick={handleClick}>
            Blog
        </button>
    )
}

export default BlogButton;