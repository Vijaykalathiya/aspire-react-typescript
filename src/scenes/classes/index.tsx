import { IClassType, SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import ClassCarousel from '@/shared/ClassCarousel';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ourClassesList: Array<IClassType> = [
    {
        image: image1,
        name: "Wight Training Classes",
        description: "Cras pretium nulla nulla, quis vulputate orci dictum eu. Sed maximus ipsum erat, ut molestie augue mattis at. Maecenas tempus libero justo, non commodo est rutrum quis."
    },
    {
        image: image2,
        name: "Yoga Training Classes",
        description: "Cras pretium nulla nulla, quis vulputate orci dictum eu. Sed maximus ipsum erat, ut molestie augue mattis at. Maecenas tempus libero justo, non commodo est rutrum quis."
    },
    {
        image: image3,
        name: "Fitness Training Classes",
        description: "Cras pretium nulla nulla, quis vulputate orci dictum eu. Sed maximus ipsum erat, ut molestie augue mattis at. Maecenas tempus libero justo, non commodo est rutrum quis."
    },
    {
        image: image4,
        name: "Training Classes",
        description: "Cras pretium nulla nulla, quis vulputate orci dictum eu. Sed maximus ipsum erat, ut molestie augue mattis at. Maecenas tempus libero justo, non commodo est rutrum quis."
    },
    {
        image: image5,
        name: "Adventure Training Classes",
        description: "Cras pretium nulla nulla, quis vulputate orci dictum eu. Sed maximus ipsum erat, ut molestie augue mattis at. Maecenas tempus libero justo, non commodo est rutrum quis."
    },
    {
        image: image6,
        name: "Zoomba Training Classes",
        description: "Cras pretium nulla nulla, quis vulputate orci dictum eu. Sed maximus ipsum erat, ut molestie augue mattis at. Maecenas tempus libero justo, non commodo est rutrum quis."
    }
]

const Classes = ({setSelectedPage}: Props) => {
  return <section
    id="ourclasses" className='w-full bg-primary-100 py-40'
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0},
            }} 
            className='mx-auto w-5/6'
        >
            <div className='md:w-3/5'>
                <HText> OUR CLASSES </HText>
                <p className='py-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </motion.div>

        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {
                    ourClassesList.map((item, index) => (
                        <ClassCarousel key={`our-classes-${index}`} item={item} />
                    ))
                }
            </ul>
        </div>

    </motion.div>
  </section>
}

export default Classes