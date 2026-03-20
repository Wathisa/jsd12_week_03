//readline = เครื่องมือของ Node.js ใช้สำหรับ “รับค่าจากผู้ใช้” ใน terminal
import readline from "readline";

// สร้าง function เปลี่ยน kg->lb
function kgToLb(kg) {
  return kg * 2.20462;
}

// สร้าง function เปลี่ยน lb->kg
function lbToKg(lb) {
  return lb / 2.20462;
}

// สร้าง Interface สำหรับรับ-ส่งข้อมูล
// input รับค่าจาก keyboard
// output แสดงผลบนหน้าจอ
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ถามข้อมูลจากผู้ใช้ ให้ผู้ใช้กรอกข้อมูล ตอนนี้ค่าจะยังเป็น string นะ!
rl.question("Enter weight: ", function (weightInput) {
  // parseFloat = แปลงข้อความ -> ตัวเลข
  const weight = parseFloat(weightInput);

  // ถามหน่วย
  rl.question("Enter unit (KG or LB): ", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();

    let result;

    if (unit === "KG") {
      result = kgToLb(weight);
      console.log(`${weight} KG is ${result.toFixed(2)} LB`);
    } else if (unit === "LB") {
      result = lbToKg(weight);
      console.log(`${weight} LB is ${result.toFixed(2)} KG`);
    } else {
      console.log("Invalid unit! Please enter KG or LB.");
    }

    // สำคัญมาก: ต้องปิด rl ทุกครั้งเมื่อสิ้นสุดการใช้งาน
    // เพื่อคืนทรัพยากรให้ระบบและหยุดการรอรับ Input
    rl.close();
  });
});
