

export const SectionDiv = (props: any) => {
  return (
    <div className="w-full flex items-center md:text-left">
        <div className="md:ml-[200px] w-[900px]">
            <h1 className="text-blue_color text-3xl mb-4 font-bold">{props.title}</h1>
            <p className="text-blue_color text-2xl">{props.words}</p>
        </div>
    </div>
  )
}
