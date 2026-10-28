const foods = [
  {
    name: "ข้าวมันไก่",
    desc: "ข้าวหุงนุ่มๆ พร้อมไก่ต้มสุกกำลังดีและน้ำจิ้มรสเด็ด",
    price: "50 - 60",
    img: "kaomankai.jpg"
  },
  {
    name: "ผัดไทย",
    desc: "ผัดไทยเส้นเหนียวนุ่ม รสชาติอร่อยกลมกล่อม",
    price: "60 - 80",
    img: "padthai.jpg"
  },
  {
    name: "กะเพราหมูสับ",
    desc: "หมูสับผัดกะเพรารสเผ็ดร้อน รสชาติจัดจ้านถึงใจ",
    price: "55 - 65",
    img: "kaproa.jpg"
  },
  {
    name: "ก๋วยเตี๋ยวเรือ",
    desc: "เส้นเหนียวนุ่ม ซุปเข้มข้น เครื่องเบิ้มๆ",
    price: "50 - 60",
    img: "boatnoodle.jpg"
  },
  {
    name: "ต้มแซ่บ",
    desc: "น้ำซุปแซ่บซี๊ดหอมกลิ่นข้าวคั่วและสมุนไพรเครื่องแกง",
    price: "55 - 70",
    img: "tomzap.jpg"
  }
];

document.getElementById('random-btn').addEventListener('click', function() {
  // สุ่มดึงข้อมูล 1 รายการ
  const randomIndex = Math.floor(Math.random() * foods.length);
  const selectedFood = foods[randomIndex];

  // อัปเดตข้อมูลบนหน้าเว็บ
  document.getElementById('food-name').innerText = selectedFood.name;
  document.getElementById('food-desc').innerText = selectedFood.desc;
  document.getElementById('food-price').innerText = selectedFood.price;
  document.getElementById('food-img').src = selectedFood.img;
});