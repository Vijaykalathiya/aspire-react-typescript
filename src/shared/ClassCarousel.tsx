import { IClassType } from '@/shared/types';

type Props = {
    item: IClassType
}

const ClassCarousel = ({item}: Props) => {
    const overlayStyle = `p-5 absolute z-30 flex h-[380px] w-[450px] 
        flex-col items-center justify-center
        whitespace-normal bg-primary-500 text-center text-white 
        opacity-0 transition duration-500 hover:opacity-90`;

  return <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
    <div className={overlayStyle}>
        <p className='text-2xl'>{item.name}</p>
        <p className='mt-5'>{item.description}</p>
    </div>
    <img alt={item.name} src={item.image} />
  </li>
}

export default ClassCarousel