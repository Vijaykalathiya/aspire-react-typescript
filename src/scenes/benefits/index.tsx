import ActionButton from '@/shared/ActionButton';
import BenefitCard from '@/shared/BenefitCard';
import HText from '@/shared/HText';
import { IBenefitCard, SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

const benefitsCards: Array<IBenefitCard> = [
    {
        icon: <HomeModernIcon  className='h-6 w-6'/>,
        title: "State of the Art Facilities",
        description: "description of the state of the Art Facilities",
        link: {
            text: "Learn More",
            href: SelectedPage.ContactUs
        }
    },
    {
        icon: <UserGroupIcon  className='h-6 w-6'/>,
        title: "100's of Diverse Classes",
        description: "description of 100's of Diverse Classes",
        link: {
            text: "Learn More",
            href: SelectedPage.ContactUs
        }
    },
    {
        icon: <AcademicCapIcon  className='h-6 w-6'/>,
        title: "Expert and Pro Trainers",
        description: "description of Expert and Pro Trainers",
        link: {
            text: "Learn More",
            href: SelectedPage.ContactUs
        }
    }
];

const Benefits = ({ setSelectedPage }: Props) => {
  return <section
    id="benefits"
    className='mx-auto min-h-full w-5/6 py-20'
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
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
            className='md:w-3/5 my-5'
        >
            <HText> MORE THAN JUST A GYM. </HText>
            <p className='my-5 text-sm'>
                We offer a variety of services to help you achieve your fitness goals. From personal training sessions
                We offer a variety of benefits that will  make your fitness journey more enjoyable and effectiveAt Fitnessity.
            </p>
        </motion.div>

        {/* benefits blocks */}
        <motion.div 
            initial="hidden"
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            variants={container}
            className='md:flex items-center justify-between gap-8 mt-5'>
            {
                benefitsCards.map((card, index) => (
                    <BenefitCard key={`benefits-card-${index}`} cardInfo={card} setSelectedPage={setSelectedPage} />
                ))
            }
        </motion.div>

        {/* GRAPHICS AND DESCRIPTIONS */}
        <div className='md:flex mt-16 items-center justify-between gap-20 md:mt-28'>
            {/* GRAPHICS */}
            <img 
                className='mx-auto'
                alt='benefits-page-graphic'
                src={BenefitsPageGraphic}
            />

            {/* DESCRIPTION */}
            <div>
               {/* TITLE */}
               <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0},
                            }} 
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className='text-primary-500'>FIT</span>
                                .
                            </HText>
                        </motion.div>
                    </div>
               </div>
                {/* DESCRIPTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0},
                    }} 
                >
                    <p className='my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p className='mb-5'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </motion.div>
                {/* BUTTON */}
                <div className='relative mt-16'>
                    <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  </section>
}

export default Benefits