import Logo from '@/assets/Logo.png';

const Footer = () => {
  return <footer className='bg-primary-100 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img
                alt='logo'
                src={Logo}
            />
            <p className='my-5'>
                Cras dictum purus ligula, at interdum tortor venenatis in. Vivamus pretium pharetra diam, sit amet hendrerit metus varius et. Quisque scelerisque est ut mollis aliquam. Vestibulum at tortor sed lorem mattis cursus vel vel dolor. Curabitur sed venenatis sem.
            </p>
            <p className='my-5'>
                All Rights Reserved.
            </p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Test1</p>
            <p className='my-5'>Test2</p>
            <p className='my-5'>Test3</p>
            <p>ILereI Ireoji Ioepop</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Link1</p>
            <p>Link2</p>
        </div>
    </div>
  </footer>
}

export default Footer