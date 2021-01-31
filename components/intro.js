export default function Intro({metaTags}) {
    console.log(metaTags.filter((metaObject)=>metaObject.attributes == 'og:image'))
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Independently Located.
      </h1>
      <div className="text-center md:text-right text-lg mt-5 md:pl-8">
          {/*TODO: add the logo here*/}
          {/*<img src={}/>*/}
      </div>
    </section>
  )
}
