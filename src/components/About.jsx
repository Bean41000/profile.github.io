import "./comstyle.css";
import img0136 from "../assets/IMG_0136.jpg";

function About(props) {
  return (
    <div ref={props.about} className="colorabout">
        <h2>ABOUT ME</h2>
      <img style={{ width: "400px" }} src={img0136} alt="" />
      <h2>นายบริภัทร เข็มรัตน์ (บีน)</h2>
      <p>
        ปัจจุบันอาศัยอยู่ที่จังหวัดอุดรธานี <br /> บ้านเลขที่558/133 อ.เมือง
        ต.หมากแข้ง หมู่บ้านรชยา2บ้านช้าง <br />
        สถานะ:นักศึกษาวิทยาลัยสันตพล ในระดับปริญญาตรี <br />
        คณะธุรกิจบัญฑิต สาขาเทคโนโลยีดิจิทัล <br />
        รหัสนักศึกษา 6620404014 <br />
        เกิดวันที่ 3 มีนาคม 2542
      </p>
    </div>
  );
}

export default About;
// <br> คือการแบ่งบรรทัด
// การทำงานในครั้งนี้ผสม2รูปแบบระหว่าง inline และ External CSS
