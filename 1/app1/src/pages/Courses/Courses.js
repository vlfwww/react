import style from "./Courses.module.css";
import Header from "./Components/Header/index.js";
import Footer from "../Components/Footer";
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";
import Course from "./Components/Course/index.js";
import Pagination from "./Components/Pagination/index.js";
function Courses() {
  const arr = [
    {
      img: img2,
      title: "JavaScript",
      discription:
        "JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.",
    },
    {
      img: img3,
      title: "TypeScript",
      discription:
        "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
    },
    {
      img: img2,
      title: "Python",
      discription:
        "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
  ];
  const numbers1 = ['←','1','2','3'];
  const numbers2 = ['27','28','29','→'];
  return (
    <div className={style.first}>
      <Header />
      <main>
        <div className={style.title}>
          <img src={img1} alt="img" />
          <p>Courses</p>
        </div>
        <div className={style.courses}>
          {arr.map((el) => (
            <Course
              title={el.title}
              img={el.img}
              discription={el.discription}
            />
          ))}
        </div>
          <div className={style.pagination}>
            {numbers1.map(el=><Pagination text = {el}/>)}
            <p>...</p>
            {numbers2.map(el=><Pagination text = {el}/>)}
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default Courses;
