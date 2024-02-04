'use client'

const sections = [
  {name:"home",section:"Home"},
  {name:"about",section:"About"},
{name:"project",section:"Projects"},
{name:"contact",section:"Contact"}]

const Links = () => {
  return (
    <div className='flex z-50 flex-col text-white absolute w-full h-full items-center justify-center gap-10 '>
      {sections.map ((section) => (
        <a  className='cursor-pointer text-4xl' key={section.name} href={`#${section.name}`}>{section.section}</a>
      ))}
    </div>
  )
}

export default Links