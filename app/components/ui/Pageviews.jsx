import { wait } from "@/lib/posts";
import React  from "react";

const Pageviews = async({slug})=>{
    
   // const views = await getPageViews(slug)

    await wait(2000)
    return (
        <div>
          Views :100
        </div>
    )
}

export default Pageviews