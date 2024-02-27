import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeart, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40}/>,
        title: 'Dasboard',
        subtitle: 'Visualization'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40}/>,
        title: 'Counter',
        subtitle: 'Counter client side'
    },
    {
      path: '/dashboard/pokemons',
      icon: <IoFootball size={40}/>,
      title: 'Pokemons',
      subtitle: 'Static generation'
  },
    {
      path: '/dashboard/favourites',
      icon: <IoHeart size={40}/>,
      title: 'Favourites',
      subtitle: 'Global states'
  },
]

export const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{width:"400px"}}
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 ' >
      <div id='logo' className='my-4 px-6'>
        <h1 className='text-lg md:text-2xl font-bold text-white flex flex-row items-center'>
            <IoLogoReact className="mr-1"/>
            <span>Dash</span>
            <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>
          Manage your actions and activities
        </p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image className='rounded-full w-10 h-10' 
                   src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c' 
                   alt='' 
                   width={500}
                   height={500}
                   priority
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Fernando Herrera</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        
        { menuItems.map(item => (
            <SidebarMenuItem key={item.path} {...item}/>

        ))

        }

      </div>
    </div>
  );
};
