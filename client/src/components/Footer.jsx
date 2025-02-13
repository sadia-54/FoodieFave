import { assets } from '@assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-[100px] pt-[80px] px-[8vw] flex flex-col items-center gap-[20px]" id="footer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px] w-full">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" className="w-[83px] rounded-[13px]" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur necessitatibus maiores quisquam et? Eius, temporibus atque? Amet nobis omnis excepturi ipsa odio soluta. Id quas nemo impedit, consectetur sed ex?</p>
          <div className="flex items-center gap-[15px]">
            <img src={assets.facebook_icon} alt="" className="w-[40px] cursor-pointer" />
            <img src={assets.twitter_icon} alt="" className="w-[40px] cursor-pointer" />
            <img src={assets.linkedin_icon} alt="" className="w-[40px] cursor-pointer" />
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-tomato">COMPANY</h2>
          <ul className="list-none space-y-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-tomato">GET IN TOUCH</h2>
          <ul className="list-none space-y-2">
            <li>+8801799999999</li>
            <li>foodiefave@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-2 bg-gray-600 my-[20px]" />

      <p className="footer-copyright text-center">
        Copyright 2024 © FoodieFave.com - All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer
