import Link from "next/link"

export default function Home(){
  return (
    <div>
      <section className="py-24">
        <div className="container">
          <h1 className="text-center text-4xl font-bold mb-10">
            hello
          </h1>
        </div>
      </section>

     
          <Link href="/about">
              Go to About Page
          </Link>
    
    </div>
  )
}