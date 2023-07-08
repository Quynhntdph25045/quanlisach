import { useEffect, useState } from "../../../lib";

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(function(){
      fetch('http://localhost:3000/books')
      .then(function(res){
        return res.json()
      })
      .then(function(dataFetch){
           setData(dataFetch)
      });
    }, [])

    useEffect(() => {
        const btns = document.querySelectorAll(".delete-btn");
        for (let btn of btns) {
            const id = btn.dataset.id
            btn.addEventListener("click", function(){
                const confirm = window.confirm("bạn muốn xóa");
                if(!confirm) return;
                fetch(`http://localhost:3000/books/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    setData(data.filter((product) => product.id != id));
                });
            })
        }
    });

    return /*html*/`
    <table class="border-separate border border-slate-400 ...">
    <thead>
        <tr>
            <th class="border border-slate-300 w-[10%]">STT</th>
            <th class="border border-slate-300 w-[70%]">Tên</th>
            <th class="border border-slate-300 w-[10%]">Hình ảnh</th>
            <th class="border border-slate-300 w-[10%]">Thao tác</th>
        </tr>
    </thead>
    <tbody>
    ${data.map((book, index) => /*html*/`
    <tr>
        <td class=" text-center border border-slate-300">${index + 1}</td>
        <td class=" border border-slate-300">
            <a class="underline text-blue-300" href="update/${book.id}">${book.name}</a>
        </td>
        <td class="border border-slate-300">
            <img src="${book.images?.[0].base_url}"/>
        </td>
        <td class="px-14 flex my-12 space-x-4">
            <button data-id="${book.id}" class=" bg-red-500 rounded-md p-2 delete-btn">Xoá</button>
            <a href="update/${book.id}"><button class="bg-green-500 rounded-md p-3">update</button> </a>
        </td>
    </tr>
    `).join('')}
        
    </tbody>
    </table>
    `
}
export default Dashboard