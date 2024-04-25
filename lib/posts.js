import fs from 'fs'
import path from 'path'
import {compileMDX} from 'next-mdx-remote/rsc'
import Newsletter from '@/app/components/Newsleter';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeoptions ={
    theme:'one-dark-pro',
    onVisitLine(node){
        if(node.children.length === 0){
            node.children = [{type:'text',value:' '}]
        }
    },
    onVisitHighlightedLine(node){
        node.properties.className.push('highlighted')
    },
    onVisitHighlightedWord(node){
        node.properties.className = ['highlight','word']
    }
}

const rootDirectory = path.join(process.cwd(), 'content');

const  components ={
    h1:props =>(
        <h1 {...props} className='text-cyan-600'>
            {props.children}
        </h1>
    ),
    Newsletter:Newsletter,
}

export async function getPostBySlug(slug){
    console.log(slug)
    
    const realSlug = slug.replace(/\.mdx$/, ''); // removes the .mdx from the file name
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const {content,frontmatter} =await compileMDX({
        source:fileContent,
        components,
        options:{
            parseFrontmatter:true,
            mdxOptions:{
                rehypePlugins:[[rehypePrettyCode,prettyCodeoptions]]
            }
        }
    })
    return {content,frontmatter ,slug:realSlug}
}

export async function getAllPosts(){
    const files = fs.readdirSync(rootDirectory);
    let posts =[];

    for(const file of files){
        const post = await getPostBySlug(file)
        posts.push(post)
    }
    await wait(2000)

    return posts
}

export async function wait (ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}