import styles from "./Dashboard.module.css";
import SideNav from "../../components/SideNav";
import RecentWorks from "./components/RecentWorks";
import SignedinNavBar from "../../components/SignedinNavBar";
import Todo from "./components/Todo";
import Draggable from "react-draggable";
export default function Dashboard({ user }) {
  return (
    <>
      <Draggable>
        <SideNav />
      </Draggable>
      <Draggable>
        <div className={styles.NavParent}>
          <SignedinNavBar user={user} />
        </div>
      </Draggable>
      <Draggable>
        <div className={styles.contents}>
          <RecentWorks user={user} />
        </div>
      </Draggable>
      <Draggable>
        <div className={styles.todoContainer}>
          {" "}
          <Todo />
        </div>
      </Draggable>
    </>
  );
}
