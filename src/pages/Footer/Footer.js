export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <div className="flex flex-col md:flex-row text-center md:text-left">
          <div className="px-3">
            <h5 className="font-bold">Made By</h5>
            <a className="text-gray-400 hover:text-white">@eliaanggaa</a>
          </div>
          <div className="px-3">
            <h5 href="" target="_blank" className="font-bold">Backsound By</h5>
            <a href="" className="text-gray-400 hover:text-white">Jiwaku Terbuka Untukmu Tuhan cover by Tiffany Justin & Dewangga Elsandro</a>
          </div>
        </div>

        <div className="text-center md:text-right mt-5 md:mt-0">
          @all rights reserved by eliaanggaa
        </div>

      </div>
    </footer>
  );
}
