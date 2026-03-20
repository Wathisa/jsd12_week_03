// Start of Guide

// นำเข้า module 'readline' เพื่อใช้ติดต่อกับผู้ใช้ผ่าน Terminal (Standard Input/Output)
import readline from "readline";

/**
 * ฟังก์ชันแปลง เซลเซียส เป็น ฟาเรนไฮต์
 * สูตร: (Celsius * 9/5) + 32
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/**
 * ฟังก์ชันแปลง ฟาเรนไฮต์ เป็น เซลเซียส
 * สูตร: (Fahrenheit - 32) * 5/9
 */
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// สร้าง Interface สำหรับรับ-ส่งข้อมูล
// input: process.stdin (รับค่าจากคีย์บอร์ด)
// output: process.stdout (แสดงผลบนหน้าจอ)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== โปรแกรมแปลงอุณหภูมิ (Temperature Converter) ===");

// ขั้นตอนที่ 1: ถามผู้ใช้ว่าต้องการแปลงแบบไหน
rl.question("เลือกโหมดการทำงาน (1: C->F, 2: F->C): ", function (mode) {
  // ขั้นตอนที่ 2: ถามค่าอุณหภูมิที่ต้องการคำนวณ
  rl.question("กรุณาป้อนอุณหภูมิ: ", function (tempInput) {
    // แปลง String จาก Input ให้เป็นตัวเลขทศนิยม (Float)
    const temp = parseFloat(tempInput);

    // ตรวจสอบความถูกต้องของ Input (Validation)
    // isNaN จะเป็น true ถ้าสิ่งที่ผู้ใช้พิมพ์มาไม่ใช่ตัวเลข
    if (isNaN(temp)) {
      console.log("❌ ข้อผิดพลาด: กรุณากรอกเฉพาะตัวเลขเท่านั้น");
    } else {
      // แยกประมวลผลตามโหมดที่เลือก
      if (mode === "1") {
        // เรียกใช้ฟังก์ชันแปลง C เป็น F
        const result = celsiusToFahrenheit(temp);
        // .toFixed(2) เพื่อจำกัดทศนิยมให้เหลือ 2 ตำแหน่ง
        console.log(`✅ ผลลัพธ์: ${temp}°C เท่ากับ ${result.toFixed(2)}°F`);
      } else if (mode === "2") {
        // เรียกใช้ฟังก์ชันแปลง F เป็น C
        const result = fahrenheitToCelsius(temp);
        console.log(`✅ ผลลัพธ์: ${temp}°F เท่ากับ ${result.toFixed(2)}°C`);
      } else {
        // กรณีผู้ใช้ใส่เลขโหมดอื่นที่ไม่ใช่ 1 หรือ 2
        console.log("⚠️ โหมดที่คุณเลือกไม่ถูกต้อง");
      }
    }

    // สำคัญมาก: ต้องปิด rl ทุกครั้งเมื่อสิ้นสุดการใช้งาน
    // เพื่อคืนทรัพยากรให้ระบบและหยุดการรอรับ Input
    rl.close();
  });
});

// Event Listener: ทำงานเมื่อ interface ปิดลง
rl.on("close", function () {
  console.log("จบการทำงาน ขอบคุณครับ!");
  process.exit(0);
});

// ---- End of Guide ----
