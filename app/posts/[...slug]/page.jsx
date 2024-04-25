import Pageviews from "@/app/components/ui/Pageviews";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import React, { Suspense } from "react";

// export async  function generateStaticParams() {
//     const posts = await getAllPosts();
//     return posts.map((post)=>({
//         slug:[post.slug]
//     }))
// }


const Page = async ({params})=>{
    console.log(params);
   const {slug} =params;
    
    const {content,frontmatter} = await getPostBySlug(slug[0]);
     
    return (
        <session classname="py-24">
        <div className="container ">
            <header className="rounded bg-gray-100 p-8">
                <h1 className="font-serif text-3xl">
                    {frontmatter.title}
                </h1>
                <p className="mb-6 text-sm font-light uppercase ">
                    {frontmatter.author}
                </p>
                <Suspense fallback = {<div>Loading views count ...</div>}>
                <Pageviews slug={slug} />
                </Suspense>
            </header>
            <main className="prose mt-12">

                {content}
            </main>
        </div>
    </session>
    )
}

export default Page;