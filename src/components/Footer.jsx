import DanantaraLogo from "../assets/danantara-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        {/* Logo dan Menu */}
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img src={DanantaraLogo} className="w-40 h-auto sm:w-48 md:w-56" alt="Danantara Logo" />
          </a>

          {/* Menu Links */}
          <div className="flex flex-wrap justify-center mt-6 -mx-2 sm:-mx-4">
            <a href="#tentang-kami" className="mx-2 sm:mx-4 text-sm transition-colors duration-300 hover:text-red-900 text-black/90">
              Tentang Kami
            </a>
            <a href="#perjalanan-kami" className="mx-2 sm:mx-4 text-sm transition-colors duration-300 hover:text-red-900 text-black/90">
              Perjalanan Kami
            </a>
            <a href="#visi-misi" className="mx-2 sm:mx-4 text-sm transition-colors duration-300 hover:text-red-900 text-black/90">
              Visi & Misi
            </a>
            <a href="#narahubung" className="mx-2 sm:mx-4 text-sm transition-colors duration-300 hover:text-red-900 text-black/90">
              Narahubung
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-center text-black/90 sm:text-left">
            © 2025 Badan Pengelola Investasi Daya Anagata Nusantara (Danantara Indonesia)
            <br />
            Redesign By NousCodeDev
          </p>

          {/* Social Media Icons */}
          <div className="flex mt-4 -mx-2 sm:mt-0">
            <a href="https://www.tiktok.com/@nouscodedev" className="mx-2 text-black/90 hover:text-red-900 transition-colors duration-300" target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61571754081556" className="mx-2 text-black/90 hover:text-red-900 transition-colors duration-300" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/NousCodeDev" className="mx-2 text-black/90 hover:text-red-900 transition-colors duration-300" target="_blank">
              <i className="fa-brands fa-github w-5 h-5"></i>
            </a>
            <a href="https://www.instagram.com/nouscodedev" className="text-black/90 hover:text-red-900 transition-colors duration-300" target="_blank">
              <i className="fa-brands fa-instagram w-5 h-5"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
