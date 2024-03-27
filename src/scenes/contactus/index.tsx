import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();
    const onSubmit = async(e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

  return <section
    id="contactus"
    className='mx-auto w-5/6 pt-24 pb-32'
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
    >
        {/* HEADER TEXT */}
        <motion.div
            className='md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{ delay:0.5, duration: 0.5 }}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }} 
        >
            <HText>
                <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className='my-5'>Cras egestas orci eget lacus pretium, a finibus arcu porta. Aenean lectus tellus, scelerisque vitae faucibus sit amet, laoreet sed lectus. Mauris in facilisis urna. Sed felis turpis, posuere non dolor nec, tristique sagittis metus. Aenean cursus nibh quis velit faucibus, sed viverra urna laoreet.</p>
        </motion.div>

        {/* FORM and IMAGE */}
        <div className='mt-10 justify-between gap-8 md:flex'>
            {/* FORM */}
            <motion.div
                className='mt-10 basis-3/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }} 
            >
                <form 
                    action="https://formsubmit.co/0787fb44965b02ac9d3fd6e7577325d5"
                    target='_blank'
                    onSubmit={onSubmit}
                    method='POST'
                >
                    <input className={inputStyle} placeholder='NAME' {...register("name", {
                        required: true
                    })} />
                    {errors.name && (
                        <p className='mt-1 text-primary-500'>
                            {errors.name.type === 'required' && "Name is required."}
                        </p>
                    )}

                    <input className={inputStyle} placeholder='EMAIL' {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[A-Z]{2,}$/i,
                    })} />
                    {errors.email && (
                        <p className='mt-1 text-primary-500'>
                            {errors.email.type === 'required' && "Email is required."}
                            {errors.email.type === 'pattern' && "Invalid email address."}
                        </p>
                    )}

                    <textarea rows={4} cols={50} className={inputStyle} placeholder='MESSAGE' {...register("message", {
                        required: true,
                        maxLength: 2000
                    })} />
                    {errors.message && (
                        <p className='mt-1 text-primary-500'>
                            {errors.message.type === 'required' && "Message is required."}
                            {errors.message.type === 'maxLength' && "Message can be 2000 character long."}
                        </p>
                    )}

                    <button
                        type='submit'
                        className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                    >
                        Submit
                    </button>
                </form>
            </motion.div>
            {/* IMAGE */}
            <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{delay:0.2, duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }} 
            >
                <div className='md:before:content-aspiretext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                    <img 
                        alt='contact image'
                        src={ContactUsPageGraphic}
                    />
                </div>
            </motion.div>
        </div>
    </motion.div>
  </section>
}

export default ContactUs