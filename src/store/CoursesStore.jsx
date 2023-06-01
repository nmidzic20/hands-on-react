import { observable, action, computed, makeObservable } from "mobx";

class CoursesStore {
  courses = [];
  currentCourse = null;

  constructor() {
    makeObservable(this, {
      courses: observable,
      setCourses: action,
      setCourse: action,
      coursesLength: computed,
      getCourseById: action,
    });
  }

  setCourses = (courses) => {
    this.courses = courses;
  };
  setCourse = (course) => {
    this.courses.push(course);
  };
  get coursesLength() {
    return this.courses.length;
  }
  getCourseById = (id) => {
    this.currentCourse = this.courses.find((course) => course.id == id);
  };
}

const coursesStore = new CoursesStore();

export default coursesStore;
