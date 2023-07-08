const Navigation = function() {
    return /*html*/`
    <div class="header bg-[#1A94FF] flex py-5 justify-between px-5 items-center">

    <div class="logo">
      <img src="/tiki.png" alt="">
      <img src="/freeship.png" alt="">
    </div>

    <div class="find ">
      <button class="border rounded-sm">
        <input type="text" class=" w-[500px] h-[40px] outline-none"><a class="px-2">Tìm Kiếm</a>
      </button>

    </div>

    <div class="cart">
      <button class="bg-white rounded-md p-3"><a href="/admin">Admin</a></button>
    </div>
    
  </div>
  <div class="Danhmuc">
    <ul class="flex justify-between p-5 bg-gray-200">
      <li><a class="hover:text-red-500" href="/">Trang chủ</a></li>
    </ul>
  </div>
  
    `
}


export default Navigation;