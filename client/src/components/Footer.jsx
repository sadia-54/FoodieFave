import { assets } from '@assets/assets'

const Footer = () => {
  return (
    <div className='footer bg-[#323232] text-[#d9d9d9] pt-[80px] pb-[20px] px-[8vw] mt-[100px] flex flex-col items-center gap-[20px]'>
      <div className="footer-content grid grid-cols-3 gap-[80px] w-full">
        <div className="footer-content-left flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" className="w-[83px] rounded-[13px]" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur necessitatibus maiores quisquam et? Eius, temporibus atque? Amet nobis omnis excepturi ipsa odio soluta. Id quas nemo impedit, consectetur sed ex?
          </p>

          <div className="footer-social-icons flex">
            <img src={assets.facebook_icon} alt="" className="w-[40px] mr-[15px]" />
            <img src={assets.twitter_icon} alt="" className="w-[40px] mr-[15px]" />
            <img src={assets.linkedin_icon} alt="" className="w-[40px] mr-[15px]" />
          </div>
        </div>
        
        <div className="footer-content-center flex flex-col items-start gap-[20px]">
          <h2 className="text-tomato">COMPANY</h2>
          <ul className="cursor-pointer mb-[10px]">Home</ul>
          <ul className="cursor-pointer mb-[10px]">About Us</ul>
          <ul className="cursor-pointer mb-[10px]">Delivery</ul>
          <ul className="cursor-pointer mb-[10px]">Privacy Policy</ul>
        </div>
        
        <div className="footer-content-right flex flex-col items-start gap-[20px]">
          <h2 className="text-tomato">GET IN TOUCH</h2>
          <ul>
            <li className="cursor-pointer mb-[10px]">+8801792530122</li>
            <li className="cursor-pointer mb-[10px]">foodiefave@gmail.com</li>
          </ul>
        </div>
      </div>
      
      <hr className="w-full h-[2px] bg-grey my-[20px] border-none" />
      
      <p className="footer-copyright text-center">Copyright 2024 © FoodieFave.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
