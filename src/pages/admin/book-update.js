import { router, useState, useEffect } from "../../../lib";
import axios from "axios";
const upDate =function(id){
    const [book,setBook] = useState({})
    useEffect(() =>{
        axios.get(`http://localhost:3000/books/${id}`)
        .then(function(dataAxios){
        setBook(dataAxios.data)})   
    },[])
    const updatebook =function () {
        const name = document.querySelector("#name").value
        const original_price = document.querySelector("#price").value
        const description = document.querySelector("#description").value
        axios.put(`http://localhost:3000/books/${id}`,{
            ...book,
            name,
            original_price,
            description
        }).then(function(res){
            console.log(res);
        }).then(() => {
            alert("Bạn đã cập nhật sản phẩm thành công");
            setTimeout(() => {
                router.navigate("/admin");
            }, 2000);
        });
    }
    useEffect(function () {
        document.querySelector("#Update").onsubmit = function (e) {
            e.preventDefault()
            updatebook()
        }
    })
    console.log(book);
    return /*html*/`
<div class="mt-10 px-10" >
<form action="" id="Update" method="" class="px-auto">
<label>Tên</label><br>
<input value="${book.name}" type="text" id="name" class=" border-gray-500 rounded-md p-5 w-[300px]"><br>
<label>Giá</label><br>
<input value="${book.original_price}" type="number" id="price" class=" border-gray-500 rounded-md my-5  w-[300px]"><br>
<label>Giới thiệu</label><br>
<textarea  name="" id="description" cols="100" rows="10" class="w-full rounded-lg border-gray-200 p-3 text-sm"> ${book.description}</textarea><br>
<button class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">Update</button>
    </form>
</div>
`};
export default upDate


